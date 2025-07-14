import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Video Editing',
    'Color Grading',
    'Post Production',
    // 'Consultation'
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      icon: '🎥',
      url: '#'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: '#'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#'
    },
    {
      name: 'Behance',
      icon: '🎨',
      url: '#'
    },
    {
      name: 'Vimeo',
      icon: '🎬',
      url: '#'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-grid">
              {/* Brand Section */}
              <div className="footer-brand">
                <div className="brand-logo">
                  <span className="logo-icon">🎬</span>
                  <span className="logo-text">VideoEditor</span>
                </div>
                <p className="brand-description">
                  Crafting compelling visual stories through expert video editing,
                  color grading, and post-production services. Let's bring your vision to life.
                </p>
                <div className="footer-social">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-section">
                <h4 className="footer-title">Services</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="footer-link">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="footer-section">
                <h4 className="footer-title">Get In Touch</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:mbbadiger93@gmail.com">mbbadiger93@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <a href="+91 8123058579" className="contact-link">
                      +91 8123058579
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span className="contact-text">Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="copyright">
                <p>&copy; {currentYear} VideoEditor Portfolio. All rights reserved.</p>
                <div className="legal-links">
                  <a href="#privacy" className="legal-link">Privacy Policy</a>
                  <span className="separator">•</span>
                  <a href="#terms" className="legal-link">Terms of Service</a>
                </div>
                <div className="developed-by">
                  <small style={{ display: 'block', marginBottom: '0.2rem' }}>Developed by: Govind Kulkarni</small>
                  <small style={{ display: 'block', marginBottom: '0.2rem' }}>
                    <span role="img" aria-label="email">📧</span>
                    <a href="mailto:govindajithkulkarni@email.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>
                      govindajithkulkarni@email.com
                    </a>
                  </small>
                  <small style={{ display: 'block' }}>
                    <span role="img" aria-label="portfolio">🌐</span>
                    <a href="https://myprofilegk.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'underline' }}>
                      myprofilegk.netlify.app
                    </a>
                  </small>
                </div>
              </div>

              <div className="footer-actions">
                <div className="availability-badge">
                  <div className="status-dot"></div>
                  <span>Available for projects</span>
                </div>

                <button
                  onClick={scrollToTop}
                  className="scroll-top-btn"
                  title="Back to top"
                >
                  <span className="scroll-icon">↑</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </footer>
  );
};

export default Footer;