import React, { useState } from "react";
import "./CommunityChat.css";

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, time: new Date().toLocaleTimeString() }]);
    setInput("");
  };

  return (
    <div className="chat-page">
      <h2>💬 Farmer Community Chat</h2>
      <div className="chat-box">
        {messages.length === 0 ? (
          <p className="no-messages">Start the conversation with fellow farmers 🌾</p>
        ) : (
          messages.map((msg, index) => (
            <div className="chat-message" key={index}>
              <p>{msg.text}</p>
              <span>{msg.time}</span>
            </div>
          ))
        )}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default CommunityChat;
