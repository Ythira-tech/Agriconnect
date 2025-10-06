// src/components/KnowledgeCard.jsx
import React from "react";

const KnowledgeCard = ({ item, onRead }) => {
  return (
    <article className="kh-card">
      <div
        className="kh-card-media"
        style={{ backgroundImage: `url(${item.image})` }}
        role="img"
        aria-label={item.title}
      />
      <div className="kh-card-body">
        <h3>{item.title}</h3>
        <p className="kh-card-excerpt">{item.excerpt}</p>
        <div className="kh-card-actions">
          <button className="kh-btn" onClick={() => onRead(item)}>
            Read
          </button>
          {item.type === "pdf" && item.url && (
            <a className="kh-link" href={item.url} target="_blank" rel="noreferrer">
              Download
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default KnowledgeCard;
