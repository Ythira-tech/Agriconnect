// components/SearchResults.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q')?.toLowerCase() || '';

  // Define your website sections and their routes
  const websiteSections = [
    { 
      id: 1, 
      title: 'Marketplace', 
      description: 'Buy and sell farm products directly', 
      keywords: ['marketplace', 'buy', 'sell', 'shop', 'products', 'store'],
      route: '/buyandsell',
      icon: '🛒'
    },
    { 
      id: 2, 
      title: 'Weather', 
      description: 'Get accurate weather forecasts for your farm', 
      keywords: ['weather', 'forecast', 'rain', 'temperature', 'climate'],
      route: '/weather',
      icon: '🌤️'
    },
    { 
      id: 3, 
      title: 'Crops Information', 
      description: 'Learn about different crops and farming techniques', 
      keywords: ['crops', 'plants', 'farming', 'agriculture', 'crop info', 'crop-information'],
      route: '/crop-info',
      icon: '🌱'
    },
    { 
      id: 4, 
      title: 'Chatbox', 
      description: 'Get AI-powered farming advice and answers', 
      keywords: ['chat', 'chatbox', 'ai', 'assistant', 'help', 'advice', 'questions'],
      route: '/chatboxx',
      icon: '💬'
    },
    { 
      id: 5, 
      title: 'Profile', 
      description: 'Manage your account and settings', 
      keywords: ['profile', 'account', 'settings', 'user', 'dashboard'],
      route: '/profile',
      icon: '👤'
    },
    { 
      id: 6, 
      title: 'Community', 
      description: 'Connect with other farmers', 
      keywords: ['community', 'farmers', 'forum', 'discuss', 'connect'],
      route: '/community',
      icon: '👥'
    }
  ];

  // Find matching sections based on search query
  const matchingSections = websiteSections.filter(section => 
    section.keywords.some(keyword => 
      keyword.toLowerCase().includes(query) || 
      query.includes(keyword.toLowerCase())
    ) ||
    section.title.toLowerCase().includes(query) ||
    section.description.toLowerCase().includes(query)
  );

  const handleSectionClick = (route) => {
    navigate(route);
  };

  const handleBackToSearch = () => {
    navigate('/');
  };

  return (
    <div className="search-results" style={{ 
      padding: '2rem', 
      minHeight: '60vh',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={handleBackToSearch}
          style={{
            background: 'none',
            border: '1px solid #2c5aa0',
            color: '#2c5aa0',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
        >
          ← Back to Search
        </button>
        <h2>Search Results for: "{query}"</h2>
      </div>

      {matchingSections.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            No sections found for "{query}"
          </p>
          <p>Try searching for:</p>
          <div style={{ marginTop: '1rem' }}>
            {websiteSections.map(section => (
              <span 
                key={section.id}
                style={{
                  display: 'inline-block',
                  backgroundColor: '#e9ecef',
                  padding: '0.3rem 0.8rem',
                  margin: '0.3rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
                onClick={() => handleSectionClick(section.route)}
              >
                {section.title}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-list">
          <p style={{ marginBottom: '1.5rem', color: '#666' }}>
            Found {matchingSections.length} section{matchingSections.length !== 1 ? 's' : ''}:
          </p>
          {matchingSections.map(section => (
            <div 
              key={section.id} 
              className="search-result-item" 
              style={{ 
                border: '1px solid #e0e0e0', 
                padding: '1.5rem', 
                marginBottom: '1rem', 
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: 'white'
              }}
              onClick={() => handleSectionClick(section.route)}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.borderColor = '#2c5aa0';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <div>
                  <h3 style={{ 
                    margin: '0 0 0.5rem 0', 
                    color: '#2c5aa0',
                    fontSize: '1.3rem'
                  }}>
                    {section.title}
                  </h3>
                  <p style={{ 
                    margin: '0 0 0.5rem 0', 
                    color: '#666',
                    fontSize: '1rem'
                  }}>
                    {section.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {section.keywords.slice(0, 3).map((keyword, index) => (
                      <span 
                        key={index}
                        style={{ 
                          backgroundColor: '#e3f2fd', 
                          padding: '0.2rem 0.6rem', 
                          borderRadius: '12px', 
                          fontSize: '0.8rem',
                          color: '#1976d2'
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ 
                marginTop: '1rem', 
                textAlign: 'right',
                color: '#2c5aa0',
                fontSize: '0.9rem'
              }}>
                Click to navigate →
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;