import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import myImage from '../assets/IMG_4000.jpg';

// Move roles outside the component to avoid linter warning
const roles = [
  'Video Editor',
  'Story Teller'
];

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth > 768 : true
  );
  const previewRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // ✅ Fixed: Removed 'roles.length' from dependency array

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e) => {
    if (!previewRef.current) return;
    const rect = previewRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * 15, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Mahantesh Badiger</span>
            </h1>
            <div className="hero-subtitle">
              <span>Creative </span>
              <span className="rotating-role gradient-text">
                {roles[currentRole]}
              </span>
            </div>
            <p className="hero-description">
              At CreatEditor, we turn ordinary footage into powerful, emotion-driven stories.
              Whether it’s a wedding highlight, a teaser reel, or other creative works for
              filmmakers—we focus on rhythm, emotion, and detail. With a cinematic eye and technical precision,
              we help you stand out with edits that captivate
            </p>
            <div className="hero-buttons">
              <button onClick={scrollToProjects} className="btn">
                View My Work
              </button>
              <button onClick={scrollToContact} className="btn btn-outline">
                Get In Touch
              </button>
            </div>
          </div>

          <div className={`hero-visual ${isVisible ? 'animate-fade-in-right' : ''}`}>
            <div
              className="video-preview"
              ref={previewRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.2s cubic-bezier(.03,.98,.52,.99)',
              }}
            >
              <img
                src={myImage}
                alt="Mahantesh Badiger Showreel Preview portrait"
                className="showreel-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'inherit'
                }}
              />
            </div>
          </div>
        </div>

        {isDesktop && (
          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span>Scroll to explore</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
