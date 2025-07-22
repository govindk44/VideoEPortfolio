import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './Showreel.css';

function Showreel() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  // Video URLs
  const videoUrl = "https://res.cloudinary.com/dymj4wfdr/video/upload/v1753171149/SHOWREEL_tyx9rt.mp4";
  const thumbnailUrl = "https://res.cloudinary.com/dymj4wfdr/image/upload/v1753171133/SHOWREEL_THUMB_kp8rtj.jpg";

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePauseClick = (e) => {
    e.stopPropagation();
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Play video when video box is clicked
  const handleVideoBoxClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  // Handle video time updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Handle video loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Handle video ended
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  // Handle video click when playing
  const handleVideoClick = () => {
    if (isPlaying) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Format time display
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
                <div className="video-placeholder" style={{ backgroundImage: `url(${thumbnailUrl})` }}>
                  <div className="play-button-large" onClick={handlePlayClick}>
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="40" r="40" fill="url(#gradientLarge)" fillOpacity="0.9" />
                      <path d="M32 26L54 40L32 54V26Z" fill="white" />
                      <defs>
                        <linearGradient id="gradientLarge" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#667eea" />
                          <stop offset="100%" stopColor="#764ba2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="video-info">
                    <h3>Professional Showreel 2024</h3>
                    <p>High Quality • Creative Portfolio</p>
                  </div>
                  <div className="video-overlay-gradient"></div>
                </div>
              ) : (
                <div className="video-playing">
                  <video
                    ref={videoRef}
                    src={videoUrl}
                    className="showreel-video"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={handleVideoEnded}
                    onClick={handleVideoClick}
                    controls={false}
                    preload="metadata"
                  />
                  <div className="video-controls">
                    <button className="control-btn" onClick={handlePauseClick}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect x="6" y="4" width="4" height="16" fill="white" />
                        <rect x="14" y="4" width="4" height="16" fill="white" />
                      </svg>
                    </button>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <span className="time-display">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <button 
                      className="control-btn fullscreen-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (videoRef.current) {
                          if (videoRef.current.requestFullscreen) {
                            videoRef.current.requestFullscreen();
                          } else if (videoRef.current.webkitRequestFullscreen) {
                            videoRef.current.webkitRequestFullscreen();
                          } else if (videoRef.current.msRequestFullscreen) {
                            videoRef.current.msRequestFullscreen();
                          }
                        }
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 14H5v5h5v-2H7v-3zM5 10h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" fill="white"/>
                      </svg>
                    </button>
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
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Global Brands</span>
              </div>
              <div className="stat">
                <span className="stat-number">4K</span>
                <span className="stat-label">Cinema Grade</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showreel;
