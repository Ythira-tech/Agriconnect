import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./ChatBox.css";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi farmer! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const socketRef = useRef(null);

  useEffect(() => {
    if (open && !socketRef.current) {
      // Connect to Socket.io
      socketRef.current = io("http://localhost:5001");
      
      socketRef.current.on("chat_history", (history) => {
        // Only show recent messages for demo
        setMessages([
          { from: "bot", text: "👋 Hi farmer! How can I help you today?" }
        ]);
      });

      socketRef.current.on("receive_message", (newMsg) => {
        setMessages(prev => [...prev, {
          from: newMsg.user === "AgriBot 🤖" ? "bot" : "user",
          text: newMsg.text
        }]);
        
        // Count bot responses as answers to questions
        if (newMsg.user === "AgriBot 🤖") {
          setQuestionCount(prev => prev + 1);
        }
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Check question limit
    if (questionCount >= 2) {
      setMessages(prev => [...prev, {
        from: "bot", 
        text: "🔐 You've reached the demo limit! Please sign up to continue chatting with our farming assistant. 🌱"
      }]);
      setInput("");
      return;
    }

    // Add user message
    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    // Send to backend via Socket.io
    if (socketRef.current) {
      socketRef.current.emit("send_message", {
        user: "Guest Farmer",
        text: input
      });
    }

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbox">
          <div className="chat-header">
            AgriConnect Assistant 🤖
            {questionCount > 0 && (
              <span className="question-counter">({questionCount}/2 demo questions)</span>
            )}
          </div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${msg.from === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                questionCount >= 2 
                  ? "Sign up to continue chatting..." 
                  : "Type your farming question..."
              }
              disabled={questionCount >= 2}
            />
            <button onClick={handleSend} disabled={questionCount >= 2}>
              Send
            </button>
          </div>
          {questionCount >= 2 && (
            <div className="signup-prompt">
              <a href="/signup" className="signup-link">
                🚀 Sign Up for Unlimited Access
              </a>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBox;