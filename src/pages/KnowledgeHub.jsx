// src/pages/KnowledgeHub.jsx
import React, { useState } from "react";
import KnowledgeCard from "../components/KnowledgeCard";
import FAQ from "../components/FAQ";
import "./KnowledgeHub.css";

/* Sample content: replace images / URLs later with your own */
const LIB = {
  Crops: [
    {
      id: "c1",
      title: "Maize: Planting & Care",
      excerpt: "Best practices for planting maize, spacing, fertiliser timing and pest tips.",
      image: "https://images.unsplash.com/photo-1572441710268-2b9f2c2f1c9f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9d8f3a1e1bf77c7e7f0d3ce7a1e0b9b2",
      type: "article",
      url: "#",
    },
    {
      id: "c2",
      title: "Tomato Greenhouse Basics",
      excerpt: "How to set up a simple greenhouse, ventilation, watering schedule and pruning.",
      image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e6c3f3f6b2b8c1a8b29f6d3d4e5c7da",
      type: "article",
      url: "#",
    },
  ],
  Livestock: [
    {
      id: "l1",
      title: "Dairy Basics for Smallholders",
      excerpt: "Feeding, hygiene and basic health checks to keep cows productive.",
      image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4f3e8d5a9be2c9a3b1a1b7a6afbf8a7e",
      type: "article",
      url: "#",
    },
  ],
  Equipment: [
    {
      id: "e1",
      title: "Choosing the Right Hoe & Hand Tools",
      excerpt: "Which tools save time and how to keep them working season after season.",
      image: "https://images.unsplash.com/photo-1524594154908-0f7f3c7c9a7f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=b3f8b4e6d91f3a7ede1a9d3c8b2d5c4a",
      type: "article",
      url: "#",
    },
  ],
  Agribusiness: [
    {
      id: "ab1",
      title: "How to Price Your Harvest",
      excerpt: "Simple frameworks to set fair prices and calculate profit margins.",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=12a7b9ea4f3b1c9c2a8b4d6e5f7a2c3b",
      type: "article",
      url: "#",
    },
  ],
  Sustainability: [
    {
      id: "s1",
      title: "Soil Health: Mulch & Cover Crops",
      excerpt: "Practical steps to rebuild organic matter and reduce erosion.",
      image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=e3a1a2b6c7d8e9f0a1b2c3d4e5f6a7b8",
      type: "article",
      url: "#",
    },
  ],
};

const FAQS = [
  {
    q: "When is the best time to plant maize?",
    a: "Plant maize at the start of the rainy season for your zone — soil temperature >12°C; prepare seedbeds and ensure timely weeding.",
  },
  {
    q: "How do I know if my soil needs fertilizer?",
    a: "Symptoms: poor growth, yellowing. Best: do a simple soil test. Also consider organic matter and past crop performance.",
  },
];

export default function KnowledgeHub() {
  const categories = Object.keys(LIB);
  const [active, setActive] = useState("Crops");
  const [readItem, setReadItem] = useState(null);

  const items = LIB[active] || [];

  function handleRead(item) {
    setReadItem(item);
    // for demo: open modal-like panel (simple approach below)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="kh-page">
      {/* HERO */}
      <header className="kh-hero">
        <div className="kh-hero-inner">
          <div className="kh-hero-left">
            <h1>Knowledge Hub</h1>
            <p className="kh-lead">
              Practical guides, short videos, and trusted resources to help you grow smarter.
            </p>
            <div className="kh-hero-cta">
              <button className="kh-primary">Browse Guides</button>
              <a className="kh-ghost" href="/explore-crops">Explore Crops</a>
            </div>
          </div>

          <div className="kh-hero-media">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a2d7b6a4b8c2e9d3f4a5b6c7d8e9f0a"
              alt="farm learning"
            />
          </div>
        </div>
      </header>

      {/* HIGHLIGHT */}
      <section className="kh-highlight">
        <div className="highlight-left">
          <h2>Featured: Soil Health Checklist</h2>
          <p>
            This week we highlight a simple soil health checklist every farmer can use to quickly
            assess fields before planting. Practical, visual, and ready to use.
          </p>
          <a className="kh-link-btn" href="https://www.fao.org/3/y5609e/y5609e.pdf" target="_blank" rel="noreferrer">
            Download Checklist (PDF)
          </a>
        </div>

        <div className="highlight-right">
          <h3>Success Story</h3>
          <p className="muted">Meet Jane — doubled her yield using intercropping</p>
          <blockquote>
            "Switched to improved seed and simple intercropping. Two seasons later my yield and income
            both rose. I could afford school fees without taking a loan."
          </blockquote>
        </div>
      </section>

      {/* TABS + GRID */}
      <section className="kh-main">
        <div className="kh-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`kh-tab ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="kh-grid">
          {items.map((it) => (
            <KnowledgeCard key={it.id} item={it} onRead={handleRead} />
          ))}
        </div>
      </section>

      {/* VIDEO TUTORIALS */}
      <section className="kh-videos">
        <h2>Quick Video Tutorials</h2>
        <div className="kh-video-grid">
          <div className="video-wrap">
            <iframe
              title="How to plant maize"
              src="https://www.youtube.com/embed/3V4kQe6z2q4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h4>How to plant maize — step by step (3 min)</h4>
          </div>

          <div className="video-wrap">
            <iframe
              title="Drip irrigation basics"
              src="https://www.youtube.com/embed/7kYqQZ4c9uI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <h4>Drip irrigation basics (4 min)</h4>
          </div>
        </div>
      </section>

      {/* RESOURCES + FAQ + GLOSSARY */}
      <section className="kh-bottom">
        <div className="resources-col">
          <h3>Resource Library</h3>
          <ul>
            <li>
              <a href="https://www.fao.org/3/y5609e/y5609e.pdf" target="_blank" rel="noreferrer">
                Best practices for post-harvest storage (PDF)
              </a>
            </li>
            <li>
              <a href="https://www.fao.org/3/i8671en/I8671EN.pdf" target="_blank" rel="noreferrer">
                Soil testing simple guide (PDF)
              </a>
            </li>
            <li>
              <a href="https://www.fao.org/3/i9176en/i9176en.pdf" target="_blank" rel="noreferrer">
                Pest management basics (PDF)
              </a>
            </li>
          </ul>

          <h3 style={{ marginTop: "20px" }}>Mini Glossary</h3>
          <dl className="glossary">
            <dt>Mulching</dt>
            <dd>Covering the soil with organic materials to retain moisture and suppress weeds.</dd>
            <dt>Intercropping</dt>
            <dd>Growing two or more crops together to increase diversity and reduce pests.</dd>
            <dt>Hydroponics</dt>
            <dd>Soilless farming using nutrient-rich water solution.</dd>
          </dl>
        </div>

        <div className="faq-col">
          <h3>FAQs</h3>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* simple read panel (demo) */}
      {readItem && (
        <div className="kh-read-panel" role="dialog" aria-modal="true">
          <div className="kh-read-inner">
            <button className="kh-close" onClick={() => setReadItem(null)}>
              Close
            </button>
            <h2>{readItem.title}</h2>
            <img src={readItem.image} alt={readItem.title} />
            <p style={{ marginTop: 12 }}>{readItem.excerpt}</p>
            <p className="muted">
              This is a demo article panel — swap in real content or link to a full article page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
