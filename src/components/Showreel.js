import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Showreel.css';

function Showreel() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger video playback
    // For demo purposes, we'll just show the playing state
  };

  // Open modal when video box is clicked
  const handleVideoBoxClick = () => {
    setIsModalOpen(true);
  };

  // Close modal when overlay or close button is clicked
  const handleCloseModal = (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close-btn')) {
      setIsModalOpen(false);
    }
  };

  return (
    <section id="showreel" className="showreel" ref={ref}>
      <div className="container">
        <div className={`showreel-content ${inView ? 'animate-fade-in-up' : ''}`}>
          <div className="showreel-header">
            <h2 className="section-title text-center">
              My <span className="gradient-text">Profile</span>
            </h2>
            <p className="showreel-subtitle text-center">
              A curated collection of my best work showcasing various editing styles, 
              techniques, and creative approaches across different projects and industries.
            </p>
          </div>
          
          <div className="video-container">
            <div
              className={`video-player ${isPlaying ? 'playing' : ''}`}
              style={{ cursor: 'pointer' }}
              onClick={handleVideoBoxClick}
            >
              {!isPlaying ? (
                <div className="video-placeholder">
                  <div className="play-button-large" onClick={handlePlayClick}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="url(#gradientLarge)" fillOpacity="0.9"/>
                      <path d="M32 26L54 40L32 54V26Z" fill="white"/>
                      <defs>
                        <linearGradient id="gradientLarge" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea"/>
                          <stop offset="100%" stopColor="#764ba2"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="video-info">
                    <h3>Professional Showreel 2024</h3>
                    <p>2:15 minutes • 4K Quality</p>
                  </div>
                  <div className="video-overlay-gradient"></div>
                </div>
              ) : (
                <div className="video-playing">
                  <div className="instagram-embed-wrapper">
                    <iframe
                      src="https://www.instagram.com/reel/Co2AcsUptkw/embed"
                      className="instagram-embed-iframe"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="Instagram Reel"
                    ></iframe>
                  </div>
                  <div className="video-controls">
                    <button className="control-btn" onClick={() => setIsPlaying(false)}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" fill="white"/>
                        <rect x="14" y="4" width="4" height="16" fill="white"/>
                      </svg>
                    </button>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <span className="time-display">1:23 / 2:15</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="showreel-features">
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🎨</div>
                <h4>Color Grading</h4>
                <p>Professional color correction and cinematic grading techniques</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎵</div>
                <h4>Sound Design</h4>
                <p>Audio mixing, sound effects, and music synchronization</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✨</div>
                <h4>Motion Graphics</h4>
                <p>Dynamic animations, titles, and visual effects integration</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎬</div>
                <h4>Storytelling</h4>
                <p>Narrative structure and emotional pacing in every edit</p>
              </div>
            </div>
          </div>
          
          <div className="showreel-stats">
            <div className="stats-row">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Different Styles</span>
              </div>
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Industries Covered</span>
              </div>
              <div className="stat">
                <span className="stat-number">2:15</span>
                <span className="stat-label">Runtime</span>
              </div>
              <div className="stat">
                <span className="stat-number">4K</span>
                <span className="stat-label">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Popup for Instagram Reel */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
            <div className="modal-embed-wrapper">
              <iframe
                src="https://www.instagram.com/reel/Co2AcsUptkw/embed"
                className="modal-embed-iframe"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Instagram Reel Modal"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Showreel;