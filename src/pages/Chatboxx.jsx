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

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    console.log("🔄 Attempting to connect to Socket.io...");
    
    // Connect to Socket.io
    socketRef.current = io("http://localhost:5001", {
      transports: ['websocket', 'polling']
    });
    
    socketRef.current.on("connect", () => {
      console.log("✅ Connected to server with ID:", socketRef.current.id);
      setIsConnected(true);
      setMessages(prev => [...prev.filter(msg => !msg.text.includes("Connecting")), 
        { text: "✅ Connected! How can I assist with your farming today?", sender: "bot" }
      ]);
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Disconnected from server");
      setIsConnected(false);
      setMessages(prev => [...prev, 
        { text: "❌ Disconnected from server. Please refresh.", sender: "bot" }
      ]);
    });

    socketRef.current.on("connect_error", (error) => {
      console.error("❌ Connection error:", error);
      setIsConnected(false);
      setMessages(prev => [...prev, 
        { text: "❌ Failed to connect to chat server. Please refresh.", sender: "bot" }
      ]);
    });
    
    // Get chat history
    socketRef.current.on("chat_history", (history) => {
      console.log("📨 Received chat history:", history?.length, "messages");
      if (history && history.length > 0) {
        const formattedMessages = history.map(msg => ({
          text: msg.text,
          sender: msg.user === "AgriBot 🤖" ? "bot" : "user"
        }));
        setMessages(formattedMessages);
      }
    });

    // Listen for new messages
    socketRef.current.on("receive_message", (newMsg) => {
      console.log("📨 New message received:", newMsg);
      setIsLoading(false);
      setMessages(prev => [...prev, {
        text: newMsg.text,
        sender: newMsg.user === "AgriBot 🤖" ? "bot" : "user"
      }]);
    });

    return () => {
      if (socketRef.current) {
        console.log("🧹 Cleaning up Socket.io connection");
        socketRef.current.disconnect();
      }
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    console.log("📤 Sending message:", input);

    // Add user message immediately
    const newMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    // Send to backend
    if (socketRef.current && isConnected) {
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      socketRef.current.emit("send_message", {
        user: user.name || "Registered Farmer",
        text: input
      });
      console.log("✅ Message emitted to server");
    } else {
      console.error("❌ Cannot send - not connected to server");
      setIsLoading(false);
      setMessages(prev => [...prev, 
        { text: "❌ Not connected to server. Please refresh and try again.", sender: "bot" }
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
          🌍 AgriConnect Smart Assistant
          <div className={`chat-status ${isConnected ? "connected" : "disconnected"}`}>
            {isConnected ? "✅ Connected" : "❌ Connecting..."} • Powered by AI
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="chat-message bot loading">
              🌱 Thinking...
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
                ? "Ask about crops, weather, pests, or farming advice..." 
                : "Connecting to server..."
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
        
        {/* Connection status */}
        <div className="connection-info">
          Status: {isConnected ? `Connected ✅` : 'Disconnected ❌'}
          {socketRef.current?.id && ` | ID: ${socketRef.current.id}`}
        </div>
      </div>
    </div>
  );
}

export default Chatboxx;