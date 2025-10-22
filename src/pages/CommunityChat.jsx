import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./CommunityChat.css";

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    // Connect to Socket.io
    socketRef.current = io("http://localhost:5001");
    
    socketRef.current.on("connect", () => {
      console.log("✅ Connected to community chat");
      setIsConnected(true);
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Disconnected from community chat");
      setIsConnected(false);
    });

    // Listen for new messages
    socketRef.current.on("receive_message", (newMsg) => {
      if (newMsg.user !== "AgriBot 🤖") { // Filter out bot messages
        setMessages(prev => [...prev, { 
          text: newMsg.text, 
          time: new Date().toLocaleTimeString(),
          user: newMsg.user 
        }]);
      }
    });

    // Get chat history
    socketRef.current.on("chat_history", (history) => {
      if (history && history.length > 0) {
        const communityMessages = history
          .filter(msg => msg.user !== "AgriBot 🤖")
          .map(msg => ({
            text: msg.text,
            time: new Date(msg.timestamp).toLocaleTimeString(),
            user: msg.user
          }));
        setMessages(communityMessages);
      }
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSend = () => {
    if (input.trim() === "" || !isConnected) return;

    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    // Send message to backend
    socketRef.current.emit("send_message", {
      user: user.name || "Community Farmer",
      text: input
    });

    // Clear input immediately
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <h2>💬 Farmer Community Chat {isConnected ? "✅" : "❌"}</h2>
      <div className="chat-status">
        {isConnected ? "Connected to live chat" : "Connecting..."}
      </div>
      
      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="no-messages">Start the conversation with fellow farmers 🌾</p>
        ) : (
          messages.map((msg, index) => (
            <div className="chat-message" key={index}>
              <div className="message-user">{msg.user}:</div>
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          ))
        )}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder={isConnected ? "Type your message..." : "Connecting to chat..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={!isConnected}
        />
        <button onClick={handleSend} disabled={!isConnected || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;