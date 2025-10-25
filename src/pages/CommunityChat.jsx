import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./CommunityChat.css";

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log("🔄 Connecting to Community Chat Socket.io...");
    
    // Connect to Socket.io with COMMUNITY CHAT namespace
    socketRef.current = io("http://localhost:5001/community-chat", {
      transports: ['websocket', 'polling']
    });
    
    socketRef.current.on("connect", () => {
      console.log("✅ Connected to Community Chat with ID:", socketRef.current.id);
      setIsConnected(true);
      
      // Join community room
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      socketRef.current.emit("join_community", {
        user: user.name || "Community Farmer"
      });
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Disconnected from Community Chat");
      setIsConnected(false);
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("❌ Community Chat connection error:", error);
      setIsConnected(false);
    });

    // Listen for COMMUNITY messages only
    socketRef.current.on("receive_community_message", (newMsg) => {
      console.log("📨 New COMMUNITY message received:", newMsg);
      setMessages(prev => [...prev, { 
        text: newMsg.text, 
        time: new Date().toLocaleTimeString(),
        user: newMsg.user 
      }]);
    });

    // Get COMMUNITY chat history
    socketRef.current.on("community_chat_history", (history) => {
      console.log("📨 Received COMMUNITY chat history:", history?.length, "messages");
      if (history && history.length > 0) {
        const communityMessages = history.map(msg => ({
          text: msg.text,
          time: new Date(msg.timestamp).toLocaleTimeString(),
          user: msg.user
        }));
        setMessages(communityMessages);
      }
    });

    // Online users count
    socketRef.current.on("online_users_update", (data) => {
      setOnlineUsers(data.count);
    });

    // User joined/left notifications
    socketRef.current.on("user_joined", (data) => {
      setMessages(prev => [...prev, {
        text: `👋 ${data.user} joined the chat`,
        time: new Date().toLocaleTimeString(),
        user: "System",
        type: "system"
      }]);
    });

    socketRef.current.on("user_left", (data) => {
      setMessages(prev => [...prev, {
        text: `🚪 ${data.user} left the chat`,
        time: new Date().toLocaleTimeString(),
        user: "System",
        type: "system"
      }]);
    });

    return () => {
      if (socketRef.current) {
        console.log("🧹 Cleaning up Community Chat connection");
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === "" || !isConnected) return;

    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    // Send message to backend - COMMUNITY CHAT
    socketRef.current.emit("send_community_message", {
      user: user.name || "Community Farmer",
      text: input,
      chatType: "community" // Important: identify as community chat
    });

    // Clear input immediately
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <div className="community-header">
        <h2>🌍 Farmer Community Chat</h2>
        <div className="chat-status-info">
          <span className={`status ${isConnected ? "connected" : "disconnected"}`}>
            {isConnected ? "✅ Live" : "❌ Offline"}
          </span>
          {onlineUsers > 0 && (
            <span className="online-users">👥 {onlineUsers} farmers online</span>
          )}
        </div>
      </div>
      
      <div className="chat-box">
        {messages.length === 0 ? (
          <div className="welcome-message">
            <p>🌾 Welcome to the Farmer Community!</p>
            <p>Start the conversation with fellow farmers about crops, prices, and experiences.</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div className={`chat-message ${msg.type === 'system' ? 'system-message' : ''}`} key={index}>
              {msg.type !== 'system' && (
                <div className="message-user">{msg.user}:</div>
              )}
              <p>{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder={isConnected ? "Share your farming experience or ask a question..." : "Connecting to community chat..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!isConnected}
        />
        <button onClick={handleSend} disabled={!isConnected || !input.trim()}>
          Send to Community
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;