import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './About.css';

function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const [counters, setCounters] = useState({
    experience: 3,
    projects: 100,
    clients: 50,
  });

  useEffect(() => {
    if (inView) {
      const targets = {
        experience: 3,
        projects: 100,
        clients: 50,
      };
      
      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${inView ? 'animate-fade-in-left' : ''}`}>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-description">
              I'm a passionate video editor with over 3 years of experience in creating 
              compelling visual narratives. My journey began with a love for storytelling 
              and has evolved into a professional career spanning multiple industries.
            </p>
            <p className="about-description">
              I specialize in cinematic editing, corporate videos, music videos, and social 
              media content. My approach combines technical expertise with creative vision 
              to deliver content that not only looks great but also resonates with audiences.
            </p>
            
            <div className="expertise-list">
              <h3>My Expertise</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-icon">🎬</div>
                  <div>
                    <h4>Cinematic Editing</h4>
                    <p>Creating movie-quality edits with professional color grading and sound design</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🏢</div>
                  <div>
                    <h4>Corporate Videos</h4>
                    <p>Professional business content, training videos, and promotional materials</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">🎵</div>
                  <div>
                    <h4>Music Videos</h4>
                    <p>Creative music video production with rhythm-based editing and effects</p>
                  </div>
                </div>
                <div className="expertise-item">
                  <div className="expertise-icon">📱</div>
                  <div>
                    <h4>Social Media</h4>
                    <p>Engaging content for YouTube, Instagram, TikTok, and other platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`about-stats ${inView ? 'animate-fade-in-right' : ''}`}>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{counters.experience}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.clients}+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
            
            <div className="software-expertise">
              <h3>Software Proficiency</h3>
              <div className="software-list">
                <div className="software-item">
                  <span className="software-name">Adobe Premiere Pro</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="software-item">
                  <span className="software-name">After Effects</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div className="software-item">
                  <span className="software-name">DaVinci Resolve</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '5%'}}></div>
                  </div>
                </div>
                <div className="software-item">
                  <span className="software-name">Final Cut Pro</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '5%'}}></div>
                  </div>
                </div>
                <div className="software-item">
                  <span className="software-name">Photoshop</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;