import React, { useState } from "react";
import "./Chatbox.css";

function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "👋 Welcome to AgriConnect Chatbox!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);

    // Fake bot reply (you can hook API later)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "🤖 This is a demo reply. Soon I’ll be smarter!", sender: "bot" }
      ]);
    }, 800);

    setInput("");
  };

  return (
    <div className="chatbox-page">
    <div className="chatbox-container">
      <div className="chat-header">
        🌍 AgriConnect Chatbox
      </div>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
  );
}

export default Chatbox;

