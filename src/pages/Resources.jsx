import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Resources.css";

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const categories = [
    { id: "all", name: "All Resources", icon: "📚" },
    { id: "guides", name: "Guides", icon: "📘" },
    { id: "videos", name: "Videos", icon: "🎥" },
    { id: "tools", name: "Tools", icon: "🛠️" },
    { id: "infographics", name: "Visuals", icon: "📊" }
  ];

  const resources = [
    {
      id: 1,
      title: "Smart Irrigation Guide",
      category: "guides",
      description: "Learn water-efficient irrigation techniques that can save up to 50% water while increasing yields.",
      type: "PDF Guide",
      duration: "15 min read",
      image: "https://images.unsplash.com/photo-1620748699237-e2a6c91b21a1?w=400",
      action: "view",
      premium: false
    },
    {
      id: 2,
      title: "Soil Health Basics",
      category: "guides",
      description: "Understand soil types, pH levels, and simple tests you can do to improve soil fertility.",
      type: "PDF Guide",
      duration: "12 min read",
      image: "https://images.unsplash.com/photo-1591889179630-ba5c15978d1c?w=400",
      action: "view",
      premium: false
    },
    {
      id: 3,
      title: "Organic Pest Control",
      category: "guides",
      description: "Natural methods to control common pests without harmful chemicals.",
      type: "PDF Guide",
      duration: "18 min read",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400",
      action: "signup",
      premium: true
    },
    {
      id: 4,
      title: "Drip Irrigation Setup",
      category: "videos",
      description: "Step-by-step video guide to install efficient drip irrigation systems.",
      type: "Video Tutorial",
      duration: "8:24 min",
      videoId: "DLzxrzFCyOs",
      action: "view",
      premium: false
    },
    {
      id: 5,
      title: "Compost Making",
      category: "videos",
      description: "Turn farm waste into rich organic compost in 45 days.",
      type: "Video Tutorial",
      duration: "6:15 min",
      videoId: "dQw4w9WgXcQ",
      action: "view",
      premium: false
    },
    {
      id: 6,
      title: "Crop Rotation Planner",
      category: "tools",
      description: "Interactive tool to plan optimal crop rotation for soil health.",
      type: "Interactive Tool",
      duration: "5 min setup",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400",
      action: "signup",
      premium: true
    },
    {
      id: 7,
      title: "Maize Growth Timeline",
      category: "infographics",
      description: "Visual guide to maize growth stages and key care requirements.",
      type: "Infographic",
      duration: "Quick view",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
      action: "view",
      premium: false
    },
    {
      id: 8,
      title: "Fertilizer Calculator",
      category: "tools",
      description: "Calculate exact fertilizer needs based on your soil test results.",
      type: "Interactive Tool",
      duration: "3 min use",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400",
      action: "signup",
      premium: true
    }
  ];

  const faqs = [
    {
      question: "When is the best time to plant maize in different regions?",
      answer: "Maize planting times vary by region. Coastal areas: March-April, Highlands: September-October, Dry areas: With first rains."
    },
    {
      question: "How can I test my soil without expensive equipment?",
      answer: "Simple jar test for texture, vinegar test for alkalinity, and observing weed types can give good initial insights."
    },
    {
      question: "What's the easiest crop for beginners to start with?",
      answer: "Beans and kale are great starter crops - they grow quickly, are relatively pest-resistant, and have high success rates."
    },
    {
      question: "How much water do different crops need?",
      answer: "Tomatoes: 2-3cm/week, Maize: 4-5cm/week during growth, Beans: 2.5-3.5cm/week. Adjust based on rainfall."
    }
  ];

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  const handleResourceAction = (resource) => {
    if (resource.action === "signup") {
      navigate("/signup");
    } else {
      // For demo purposes, show alert. In production, this would open the resource
      alert(`Opening: ${resource.title}`);
    }
  };

  const handleContribute = () => {
    navigate("/signup");
  };

  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="resources-container">
      {/* Hero Section */}
      <section className="resources-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Agricultural Resources Hub</h1>
          <p className="hero-subtitle">
            Access free farming guides, video tutorials, and interactive tools to enhance your 
            agricultural knowledge and improve farm productivity.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Free Resources</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Video Guides</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Interactive Tools</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="categories-section">
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Resources Grid */}
      <section className="resources-grid-section">
        <h2 className="section-title">Featured Resources</h2>
        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className={`resource-card ${resource.premium ? 'premium' : ''}`}>
              {resource.premium && <div className="premium-badge">Premium</div>}
              
              {resource.videoId ? (
                <div className="video-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${resource.videoId}`}
                    title={resource.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="image-container">
                  <img src={resource.image} alt={resource.title} />
                </div>
              )}
              
              <div className="resource-content">
                <div className="resource-meta">
                  <span className="resource-type">{resource.type}</span>
                  <span className="resource-duration">{resource.duration}</span>
                </div>
                
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                
                <button 
                  className={`action-btn ${resource.action === 'signup' ? 'signup-btn' : 'view-btn'}`}
                  onClick={() => handleResourceAction(resource)}
                >
                  {resource.action === 'signup' ? 'Sign Up to Access' : 'View Resource'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{expandedFaq === index ? '−' : '+'}</span>
              </button>
              {expandedFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="resources-cta-section">
        <div className="cta-content">
          <h2>Unlock Premium Resources</h2>
          <p>
            Sign up for free to access our complete library of premium guides, interactive tools, 
            and personalized farming recommendations tailored to your specific needs.
          </p>
          <div className="cta-features">
            <div className="feature">✅ 100+ Detailed Guides</div>
            <div className="feature">✅ Interactive Planning Tools</div>
            <div className="feature">✅ Personalized Recommendations</div>
            <div className="feature">✅ Expert Community Access</div>
          </div>
          <button className="cta-button" onClick={handleContribute}>
            Sign Up for Full Access
          </button>
          <p className="cta-note">Free forever • No credit card required</p>
        </div>
      </section>
    </div>
  );
};

export default Resources;