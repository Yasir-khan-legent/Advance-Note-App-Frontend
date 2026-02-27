import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container1">
      {/* Back to Home Button */}
      <div className="back-home-container1">
        <button onClick={() => window.location.href = '/'} className="back-home-button">
          <span className="back-arrow">←</span> Home Page
        </button>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hum Se <span className="highlight">Rabitay</span> Karen
          </h1>
          <p className="hero-subtitle">
            Aapka feedback, sawal ya mashwara - hum har baat ka intezar kar rahe hain
          </p>
        </div>
        <div className="hero-image">
          <div className="contact-visual">
            <div className="envelope">
              <div className="envelope-flap"></div>
              <div className="envelope-body"></div>
              <div className="envelope-line"></div>
              <div className="envelope-line short"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="contact-options">
        <div className="section-header">
          <h2>Hum Se Jurein</h2>
          <p>Hum se baat karnay ke mukhtalif tareeqay</p>
        </div>
        
        <div className="options-grid">
          <div className="option-card">
            <div className="option-icon email-icon">📧</div>
            <h3>Email Karein</h3>
            <p>Direct email bhejein humare support team ko</p>
            <a href="mailto:support@smartnote.app" className="option-link">
              support@smartnote.app
            </a>
          </div>
          
          <div className="option-card">
            <div className="option-icon phone-icon">📞</div>
            <h3>Helpline</h3>
            <p>Hum se phone par baat karein</p>
            <a href="tel:+921234567890" className="option-link">
              +92 123 456 7890
            </a>
            <p className="timings">Mon-Fri, 9AM to 6PM</p>
          </div>
          
          <div className="option-card">
            <div className="option-icon location-icon">📍</div>
            <h3>Office</h3>
            <p>Hum se milne aayein ya postal mail bhejein</p>
            <p className="address">
              Smart Note HQ<br />
              123 Tech Street, Karachi<br />
              Pakistan
            </p>
          </div>
          
          <div className="option-card">
            <div className="option-icon chat-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Real-time assistance ke liye live chat karein</p>
            <button className="live-chat-btn">
              Start Live Chat
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-containercontact">
          <div className="form-header">
            <h2>Form Bharein</h2>
            <p>Aapka message hum tak pohanchayein</p>
          </div>
          
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Shukriya! Aapka Message Mil Gaya</h3>
              <p>Hum jald hi aap se raabitay karenge. Aapka intezaar humari priority hai.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Aapka Naam</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Apna pura naam likhein"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select karein</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Technical Support</option>
                  <option value="feature">Naya Feature Suggest Karna</option>
                  <option value="bug">Bug Report</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Aapka Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Apna message yahan likhein..."
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Message Bhejein
                </button>
                <button type="button" className="reset-btn" onClick={() => setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                })}>
                  Form Clear Karein
                </button>
              </div>
              
              <p className="form-note">
                Hum aapki privacy ka poora khayal rakhte hain. Aapka data kabhi share nahi karenge.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Aksar Puchay Janay Walay Sawalat</h2>
          <p>In sawalon ke jawab aap ko mil sakte hain</p>
        </div>
        
        <div className="faq-list">
          <div className="faq-item">
            <h3>Smart Note kaise use karein?</h3>
            <p>Smart Note use karna bahut aasan hai. Pehle sign up karein, phir naya note create karein aur likhna shuru karein. Aap notes ko categories mein organize kar sakte hain aur search feature se asani se dhoondh sakte hain.</p>
          </div>
          
          <div className="faq-item">
            <h3>Kya Smart Note bilkul free hai?</h3>
            <p>Ji haan, Smart Note ke core features hamesha free rahenge. Aap unlimited notes create kar sakte hain, organize kar sakte hain aur cloud backup bhi free hai. Future mein kuch premium features add ho sakte hain, lekin basic note-taking hamesha free rahega.</p>
          </div>
          
          <div className="faq-item">
            <h3>Mera data safe hai?</h3>
            <p>Bilkul! Hum end-to-end encryption use karte hain aur aapka data kabhi bhi third parties ke saath share nahi karte. Aapka privacy humari sab se bari priority hai.</p>
          </div>
          
          <div className="faq-item">
            <h3>Response time kya hai?</h3>
            <p>Hum 24-48 hours ke andar aapke email ya message ka jawab dete hain. Urgent cases mein hum jald se jald response dete hain.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Abhi Join Karein Smart Note Community</h2>
          <p>Humare newsletter mein shamil ho kar updates aur tips hasil karein</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Apna email address likhein" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe Karein</button>
          </div>
          <p className="small-note">
            Hum spam emails nahi bhejte. Sirf useful updates aur tips.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="footer-content">
          <p className="footer-logo">📝 Smart Note</p>
          <p className="footer-tagline">Apke Afkaar, Apki Zubani © {new Date().getFullYear()}</p>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact" className="active">Contact</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-link" title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.397 0-.79-.023-1.177-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="social-link" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <p className="footer-contact">Apna User Experience Hmy Share Karein - <a href="/feedback">Feedback Form</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;