import React, { useState } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi farmer! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    // Simulated bot response
    setTimeout(() => {
      const botMsg = {
        from: "bot",
        text: "This is a demo reply 🌱. Imagine this as your smart assistant!",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);

    setInput("");
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
          <div className="chat-header">AgriConnect Assistant 🤖</div>
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
              placeholder="Type your question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
