// src/components/FAQ.jsx
import React, { useState } from "react";

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((s) => !s)}>
        {q} <span className="faq-toggle">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
};

export default function FAQ({ items }) {
  return (
    <div className="faq-list">
      {items.map((it, idx) => (
        <FAQItem key={idx} q={it.q} a={it.a} />
      ))}
    </div>
  );
}
