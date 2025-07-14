import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_8nijq8c',
      'template_18ez6iz',
      formData,
      'oKkoqc-68PMeNRiqt'
    ).then(
      (result) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: '',
          budget: '',
          timeline: ''
        });
        setTimeout(() => setSubmitStatus(''), 5000);
      },
      (error) => {
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    );
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'mbbadiger93@gmail.com',
      link: 'mbbadiger93@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8123058579',
      link: '+91 9606357662'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Karnataka, India',
      link: null
    },
    {
      icon: '⏰',
      label: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'YouTube',
      icon: '🎥',
      url: 'https://www.youtube.com/@mahanteshbadiger6819',
      color: '#FF0000'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://www.instagram.com/createditor__?igsh=OXh4OXNiN283MGVv&utm_source=qr',
      color: '#E4405F'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://x.com/mbbadiger93?s=21',
      color: '#1DA1F2'
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/8123058579', // WhatsApp direct link with phone number
      color: '#25D366'
    }
  ];

  const projectTypes = [
    'Corporate Video',
    'Music Video',
    'Wedding/Event',
    'YouTube Content',
    'Social Media',
    'Documentary',
    'Commercial',
    'Short Film',
    'Other'
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div
          ref={ref}
          className={`contact-content ${inView ? 'animate-fade-in-up' : ''}`}
        >
          <div className="section-header text-center">
            <h2 className="section-title">Let's Create Something Amazing</h2>
            <p className="contact-subtitle">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h3>Start Your Project</h3>
                <p>Tell me about your vision and let's make it happen</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me more about your project, goals, style preferences, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-success">
                    <span className="success-icon">✅</span>
                    Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <p>Ready to discuss your project? Reach out through any of these channels:</p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-method">
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-details">
                        <span className="contact-label">{info.label}</span>
                        {info.link ? (
                          <a href={info.link} className="contact-value">
                            {info.value}
                          </a>
                        ) : (
                          <span className="contact-value">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="social-section">
                <h4>Follow My Work</h4>
                <p>Stay updated with my latest projects and behind-the-scenes content</p>

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      title={social.name}
                    >
                      <span className="social-icon">{social.icon}</span>
                      <span className="social-name">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;