import React from "react";
import "./FeatureStrip.css";

export default function FeatureStrip() {
  return (
    <section className="feature-strip">
      {/* Who we are */}
      <article
        className="panel panel--gold"
        style={{
          // Replace these with your own images if you like
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnR8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        <div className="panel__inner">
          <div className="panel__icon" aria-hidden>
            {/* Leaf-in-hand icon */}
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M12.6 2.2c3.8 0 6.7 2.2 8.6 5.3.4.7-.4 1.5-1.1 1.2-4.7-2-8.6-.4-11 1.6-2.2 1.8-4.1 4.9-6.8 5.2-.7.1-1.2-.6-.9-1.2 2.1-4 5.1-12.1 11.2-12.1Z" />
              <path d="M4 16.5c1.8.2 3.3-.8 4.7-1.9 2.7-2.1 6.2-3.8 11.3-1.6M5 20.5c2.5.6 4.6-1.1 6.5-2.2 2.1-1.2 4.9-1.8 7.5-.9" />
            </svg>
          </div>

          <h3 className="panel__title">Who we are</h3>
          <h4 className="panel__subtitle">
            To Plant A Garden Is To Believe In Tomorrow
          </h4>
          <p className="panel__text">
            Lorem ipsum dolor sit amet, consectetur adipisc elit. Morbi
            hendrerit elit turpis, a porttitor leo elit condiment.
          </p>
          <a href="#" className="panel__link">
            Read More
          </a>
        </div>
      </article>

      {/* Why Choose us? */}
      <article
        className="panel panel--green"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="panel__inner">
          <div className="panel__icon" aria-hidden>
            {/* Sun icon */}
            <svg viewBox="0 0 24 24" className="icon">
              <circle cx="12" cy="12" r="4.2" />
              <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
            </svg>
          </div>

          <h3 className="panel__title">Why Choose us?</h3>

          <h4 className="panel__subtitle">Reliablility</h4>
          <p className="panel__text">
            we provide farmers with direct access to trusted
  markets, expert knowledge, and modern digital tools—all in one place—
  making it easier to grow, sell, and succeed.
          </p>
          <a href="#" className="panel__link">
            Read More
          </a>

          <h4 className="panel__subtitle mt-24">Recognized Excellence</h4>
          <p className="panel__text">
            Our award-winning initiatives reflect our dedication to innovation,
            sustainability, and unmatched service in the agricultural sector.
          </p>
          <a href="#" className="panel__link">
            Read More
          </a>
        </div>
      </article>

      {/* Testimonial */}
      <article
        className="panel panel--gold"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="panel__inner">
          <div className="panel__icon" aria-hidden>
            {/* Brain/head icon */}
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M14 3.5c1.6 0 3 .9 3.7 2.3.7-.4 1.5-.6 2.3-.5 1.9.2 3.3 1.9 3 3.8-.2 1.1-.9 2-1.9 2.5.5 1.7-.3 3.5-1.9 4.2-.4.2-.9.3-1.3.3-.1 1.9-1.7 3.4-3.6 3.4H9.8c-3.5 0-6.3-2.8-6.3-6.2V12C1.6 11.1 1 10 1 8.8 1 6.7 2.7 5 4.8 5c.6 0 1.2.1 1.7.4C7.1 4 8.4 3.1 9.9 3.1c.9 0 1.8.3 2.4.9.5-.3 1.1-.5 1.7-.5Z" />
            </svg>
          </div>

          <h3 className="panel__title">Testimonial</h3>
          <h4 className="panel__subtitle">
            Something about our client satisfactions
          </h4>
          <p className="panel__text">
           Our clients consistently our reliable, innovative approach
           and the measurable improvements we bring to their farming practices
          </p>
          <a href="#" className="panel__link">
            Read More
          </a>
        </div>
      </article>
    </section>
  );
}