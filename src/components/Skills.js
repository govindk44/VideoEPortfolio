import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';
import udemyCertificate from '../assets/UDEMYCERTIFICATE.jpg';

function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState('editing');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [inView, isLoaded]);

  const skillCategories = {
    editing: {
      name: 'Video Editing',
      icon: '🎬',
      skills: [
        { name: 'Adobe Premiere Pro', level: 85, years: '3+' },
        { name: 'Final Cut Pro', level: 80, years: '1+' },
        { name: 'DaVinci Resolve', level: 75, years: '1+' },
        { name: 'Avid Media Composer', level: 70, years: '1+' },
      ],
    },
    motion: {
      name: 'Motion Graphics',
      icon: '✨',
      skills: [
        { name: 'After Effects', level: 80, years: '1+' },
        { name: 'Cinema 4D', level: 70, years: '1+' },
        { name: 'Blender', level: 65, years: '1+' },
        { name: 'Motion (Apple)', level: 60, years: '1+' },
      ],
    },
    color: {
      name: 'Color Grading',
      icon: '🎨',
      skills: [
        { name: 'DaVinci Resolve', level: 85, years: '1+' },
        { name: 'Adobe Premiere Pro', level: 80, years: '1+' },
        { name: 'Final Cut Pro', level: 70, years: '1+' },
        { name: 'FilmLight Baselight', level: 65, years: '1+' },
      ],
    },
    audio: {
      name: 'Audio Production',
      icon: '🎵',
      skills: [
        { name: 'Pro Tools', level: 50, years: '1+' },
        { name: 'Adobe Audition', level: 40, years: '1+' },
        { name: 'Logic Pro', level: 45, years: '1+' },
        { name: 'Fairlight (DaVinci)', level: 40, years: '1+' },
      ],
    },
    design: {
      name: 'Design & Graphics',
      icon: '🖼️',
      skills: [
        { name: 'Adobe Photoshop', level: 68, years: '2+' },
        { name: 'Adobe Illustrator', level: 62, years: '1+' },
        { name: 'Figma', level: 45, years: '1+' },
        { name: 'Canva Pro', level: 75, years: '2+' },
      ],
    },
  };

  const coreSkills = [
    'Video Editing', 'Color Correction', 'Thumbnail Creation',
    'Client Communication', 'Creative Direction',
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        {!isLoaded ? (
          <div className="skills-loading">Loading skills...</div>
        ) : (
          <div className={`skills-content ${inView ? 'animate-fade-in-up' : ''}`}>
            <div className="skills-header">
              <h2 className="section-title text-center">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="skills-subtitle text-center">
                A comprehensive overview of my technical expertise and creative capabilities
                in video editing, motion graphics, and post-production.
              </p>
            </div>

            <div className="skills-categories">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                  onClick={() => setActiveCategory(key)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </button>
              ))}
            </div>

            <div className="skills-display">
              <div className="software-skills">
                <h3>{skillCategories[activeCategory].name} Expertise</h3>
                <div className="skills-grid">
                  {skillCategories[activeCategory].skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-meta">
                          <span className="skill-level">{skill.level}%</span>
                          <span className="skill-years">{skill.years} years</span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            animationDelay: `${index * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="core-skills">
                <h3>Core Competencies</h3>
                <div className="core-skills-grid">
                  {coreSkills.map((skill, index) => (
                    <div
                      key={skill}
                      className="core-skill-tag"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="workflow-section">
              <h3>My Creative Workflow</h3>
              <div className="workflow-steps">
                {[
                  { step: 'Pre-Production', desc: 'Script analysis, storyboarding, and planning the edit structure' },
                  { step: 'Assembly Edit', desc: 'Rough cut creation, sequence building, and initial story structure' },
                  { step: 'Fine Cut', desc: 'Detailed editing, transitions, pacing, and narrative refinement' },
                  { step: 'Post-Production', desc: 'Color grading, audio mixing, motion graphics, and final delivery' },
                ].map((item, i) => (
                  <div className="workflow-step" key={i}>
                    <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                    <div className="step-content">
                      <h4>{item.step}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="certifications">
              <h3>Certifications & Training</h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <div className="cert-icon">🏆</div>
                  <div className="cert-info">
                    <h4>Adobe Certified Expert</h4>
                    <p>Premiere Pro & After Effects</p>
                    <span className="cert-year">2024</span>
                    <a href={udemyCertificate} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">🎓</div>
                  <div className="cert-info">
                    <h4>DaVinci Resolve Certification</h4>
                    <p>Color Grading & Audio Post</p>
                    <span className="cert-year">Pursuing</span>
                  </div>
                </div>
                <div className="cert-item">
                  <div className="cert-icon">📜</div>
                  <div className="cert-info">
                    <h4>Final Cut Pro Certification</h4>
                    <p>Advanced Editing Techniques</p>
                    <span className="cert-year">Pursuing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
