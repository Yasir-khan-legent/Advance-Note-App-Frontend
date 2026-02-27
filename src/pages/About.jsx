import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* Back to Home Button */}
      <div className="back-home-container">
        <Link to="/" className="back-home-button">
          <span className="back-arrow">←</span> Home Page
        </Link>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Smart Note <span className="highlight">Se</span> - Apke Afkaar, Mehfooz Rakhein
          </h1>
          <p className="hero-subtitle">
            Aapki zarooraton ke mutabiq ek behtareen aur saaf-suthra note lene ka zariya
          </p>
        </div>
        <div className="hero-image">
          <div className="note-visual">
            <div className="note-line"></div>
            <div className="note-line"></div>
            <div className="note-line short"></div>
            <div className="note-circle"></div>
            <div className="note-pen"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-header">
          <h2>Hamara Mission</h2>
          <p>Hum kya karte hain aur kyun</p>
        </div>
        <div className="mission-content">
          <div className="mission-card">
            <div className="mission-icon note-icon">📝</div>
            <h3>Be-rukawat Note Likhna</h3>
            <p>Seamless tarike se apne afkaar (thoughts) ko record karein. Kisi bhi waqt, kisi bhi jagah.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon secure-icon">🔒</div>
            <h3>Mehfooz Rakhein</h3>
            <p>Aapke notes hamesha safe aur secure. Humein aapki privacy ka khayal hai.</p>
          </div>
          <div className="mission-card">
            <div className="mission-icon experience-icon">✨</div>
            <h3>Saaf-suthra Experience</h3>
            <p>Intuitive aur distraction-free interface ke saath apne ideas ko organize karein.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Khaas Features</h2>
          <p>Woh sab kuch jo Smart Note ko khaas banata hai</p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📅</div>
            <h4>Reminders & Alarms</h4>
            <p>Important notes ke liye reminders set karein taake kuch na bhoolen.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔍</div>
            <h4>Smart Search</h4>
            <p>Seconds mein dhoondhein koi bhi note, chahe wo kabhi bhi likha ho.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📁</div>
            <h4>Categories & Tags</h4>
            <p>Apne notes ko organize karein categories aur tags ke saath.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌙</div>
            <h4>Dark Mode</h4>
            <p>Raaton mein aankhon par bojh na pade, dark mode ke sahat.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h4>Rich Formatting</h4>
            <p>Bold, italic, lists aur headings ke saath apne notes ko khoobsurat banayein.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">☁️</div>
            <h4>Cloud Backup</h4>
            <p>Aapke notes hamesha safe cloud storage mein automatically backup hotey rahte hain.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>Hamari Values</h2>
          <p>Yeh principles hain jo humari har cheez mein hain</p>
        </div>
        <div className="values-list">
          <div className="value-item">
            <div className="value-icon">📱</div>
            <div className="value-content">
              <h3>User-First Design</h3>
              <p>Har feature aapki zaroorat aur convenience ke hisaab se banaya gaya hai.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">🔓</div>
            <div className="value-content">
              <h3>Hamesha Free Core Features</h3>
              <p>Note likhna, organize karna aur backup lena hamesha free rahega.</p>
            </div>
          </div>
          <div className="value-item">
            <div className="value-icon">🤝</div>
            <div className="value-content">
              <h3>Aapka Feedback</h3>
              <p>Hum aapki awaaz suntay hain. Aapka feedback humare liye bahut important hai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/History Section */}
      <section className="timeline-section">
        <div className="section-header">
          <h2>Humari Journey</h2>
          <p>Smart Note ka safar shuru se aaj tak</p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2022</div>
            <div className="timeline-content">
              <h3>Idea aur Shuruaat</h3>
              <p>Smart Note ka idea paida hua jab humein khud ek behtareen note-taking app ki zaroorat mehsoos hui.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              <h3>Development aur Testing</h3>
              <p>6 mahine ki intensive development aur user testing ke baad first version launch hua.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              <h3>Growth aur Expansion</h3>
              <p>10,000+ active users aur naye features ka addition. Humari community mazeed barhi.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              <h3>Future Plans</h3>
              <p>AI-powered features, team collaboration, aur cross-platform integration ki tayyari.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Notes Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Abhi Shuru Karein - Bilkul Free!</h2>
          <p>Koi credit card zaroori nahi. Hamesha mutt (free) account.</p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-button primary">Free Sign Up Now</Link>
            <Link to="/contact" className="cta-button secondary">Hum Se Rabitay Karen</Link>
          </div>
          <div className="cta-features">
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>14-day free trial of premium</span>
            </div>
            <div className="cta-feature">
              <span className="check-icon">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>
          <p className="tagline">
            "Har Khayal, Har Pal - Likhien, Sanvarein, Mehfooz Rakhein."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-content">
          <p className="footer-logo">📝 Smart Note</p>
          <p className="footer-tagline">Apke Afkaar, Apki Zubani © {new Date().getFullYear()}</p>
          <div className="footer-links">
            <Link to="/about" className="active">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/blog">Blog</Link>
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
          <p className="footer-contact">Apna User Experience Hmy Share Karein - <Link to="/feedback">Feedback Form</Link></p>
        </div>
      </footer>
    </div>
  );
}

export default About;