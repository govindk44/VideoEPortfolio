import React, { useState, useEffect } from 'react';
import './Header.css';
// import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h3 className="gradient-text">CREATEDITOR</h3>
          </div>
          
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('showreel')} className="nav-link">Showreel</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
            </ul>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
