import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./Chatboxx.css";

function Chatboxx() {
  const [messages, setMessages] = useState([
    { text: "👋 Connecting to AgriConnect Assistant...", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log("🔄 Connecting to AI Assistant Socket.io...");
    
    // Connect to Socket.io with PRIVATE CHAT namespace
    socketRef.current = io("http://localhost:5001/private-chat", {
      transports: ['websocket', 'polling']
    });
    
    socketRef.current.on("connect", () => {
      console.log("✅ Connected to AI Assistant with ID:", socketRef.current.id);
      setIsConnected(true);
      setMessages(prev => [...prev.filter(msg => !msg.text.includes("Connecting")), 
        { text: "✅ Connected! How can I assist with your farming today?", sender: "bot" }
      ]);
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Disconnected from AI Assistant");
      setIsConnected(false);
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("❌ AI Assistant connection error:", error);
      setIsConnected(false);
    });
    
    // Get PRIVATE chat history
    socketRef.current.on("private_chat_history", (history) => {
      console.log("📨 Received PRIVATE chat history:", history?.length, "messages");
      if (history && history.length > 0) {
        const formattedMessages = history.map(msg => ({
          text: msg.text,
          sender: msg.user === "AgriBot 🤖" ? "bot" : "user",
          id: msg._id || msg.id // Add unique ID to prevent duplicates
        }));
        setMessages(formattedMessages);
      }
    });

    // Listen for PRIVATE messages only
    socketRef.current.on("receive_private_message", (newMsg) => {
      console.log("📨 New PRIVATE message received:", newMsg);
      
      // Create a unique ID for the message to prevent duplicates
      const messageId = newMsg._id || `msg-${Date.now()}-${Math.random()}`;
      
      setMessages(prev => {
        // Check if this message already exists to prevent duplicates
        const alreadyExists = prev.some(msg => 
          msg.id === messageId || 
          (msg.text === newMsg.text && msg.sender === (newMsg.user === "AgriBot 🤖" ? "bot" : "user"))
        );
        
        if (alreadyExists) {
          console.log("🔄 Skipping duplicate message");
          return prev;
        }
        
        return [...prev, {
          text: newMsg.text,
          sender: newMsg.user === "AgriBot 🤖" ? "bot" : "user",
          id: messageId
        }];
      });
      
      setIsLoading(false);
    });

    return () => {
      if (socketRef.current) {
        console.log("🧹 Cleaning up AI Assistant connection");
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    console.log("📤 Sending PRIVATE message:", input);

    // DON'T add user message immediately - wait for server confirmation
    // This prevents the duplicate message issue
    setIsLoading(true);

    // Send to backend - PRIVATE CHAT
    if (socketRef.current && isConnected) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      socketRef.current.emit("send_private_message", {
        user: user.name || "Registered Farmer",
        text: input,
        chatType: "private"
      });
      console.log("✅ PRIVATE message emitted to server");
    } else {
      console.error("❌ Cannot send - not connected to AI Assistant");
      setIsLoading(false);
      setMessages(prev => [...prev, 
        { text: "❌ Not connected to AI Assistant. Please refresh and try again.", sender: "bot", id: `error-${Date.now()}` }
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbox-page">
      <div className="chatbox-container">
        <div className="chat-header">
          🤖 AgriConnect Smart Assistant
          <div className={`chat-status ${isConnected ? "connected" : "disconnected"}`}>
            {isConnected ? "✅ AI Connected" : "❌ Connecting..."} • Private Chat
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={msg.id || i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="chat-message bot loading">
              🌱 AI Thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              isConnected 
                ? "Ask AI about crops, weather, pests, or farming advice..." 
                : "Connecting to AI Assistant..."
            }
            disabled={!isConnected || isLoading}
          />
          <button 
            onClick={handleSend} 
            disabled={!isConnected || isLoading || !input.trim()}
            className={isLoading ? "loading" : ""}
          >
            {isLoading ? "..." : "Send"}
          </button>
        </div>
        
        <div className="connection-info">
          AI Assistant: {isConnected ? `Connected ✅` : 'Disconnected ❌'}
        </div>
      </div>
    </div>
  );
}

export default Chatboxx;