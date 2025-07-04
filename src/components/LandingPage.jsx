import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🎫</span>
            <span className="logo-text">Helpdesk Pro</span>
          </div>
          <div className="nav-links">
           
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link nav-cta">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className={`landing-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-background">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
        <div className="landing-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ New</span>
              <span>Enterprise-Grade Ticket Management</span>
            </div>
            <h1 className="hero-title">
              Streamline Your
              <span className="gradient-text"> Customer Support</span>
              <br />Like Never Before
            </h1>
            <p className="hero-description">
              Transform your customer service with our intelligent helpdesk system. 
              Enterprise-grade security, smart ticket management, and powerful analytics all in one platform.
            </p>
            <div className="hero-cta">
              <Link to="/signup" className="cta-button primary">Get Started Free</Link>
              <Link to="/demo" className="cta-button secondary">Watch Demo</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">Tickets Resolved</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">ISO 27001</span>
                <span className="stat-label">Certified</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-image.svg" alt="Helpdesk Dashboard" className="dashboard-preview" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="landing-container">
          <h2 className="section-title">Enterprise-Ready Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Ticket Management</h3>
              <p>AI-powered ticket routing, automatic categorization, and intelligent prioritization for faster resolution times.</p>
              <ul className="feature-list">
                <li>Smart ticket categorization</li>
                <li>Automated routing rules</li>
                <li>Priority-based queuing</li>
                <li>SLA management</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Enterprise Security</h3>
              <p>Bank-grade security with advanced encryption, SSO, and compliance with global security standards.</p>
              <ul className="feature-list">
                <li>SOC 2 Type II certified</li>
                <li>GDPR compliant</li>
                <li>End-to-end encryption</li>
                <li>Role-based access control</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Automation</h3>
              <p>Automate repetitive tasks and get intelligent suggestions for faster ticket resolution.</p>
              <ul className="feature-list">
                <li>Auto-response templates</li>
                <li>Smart workflows</li>
                <li>Predictive analytics</li>
                <li>Chatbot integration</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Comprehensive reporting and insights to optimize your support operations.</p>
              <ul className="feature-list">
                <li>Custom dashboards</li>
                <li>Performance metrics</li>
                <li>Trend analysis</li>
                <li>Export capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="landing-container">
          <div className="enterprise-content">
            <div className="enterprise-text">
              <h2>Enterprise-Grade Solution</h2>
              <p>Built for organizations that need robust security, scalability, and customization.</p>
              <ul className="enterprise-features">
                <li>✓ Dedicated support team</li>
                <li>✓ Custom implementation</li>
                <li>✓ API access</li>
                <li>✓ Advanced security features</li>
                <li>✓ SLA guarantees</li>
              </ul>
              <Link to="/enterprise" className="cta-button primary">Contact Sales</Link>
            </div>
            <div className="enterprise-image">
              <img src="/hero-image.svg" alt="Enterprise Features" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="nav-logo">
                <span className="logo-icon">🎫</span>
                <span className="logo-text">Helpdesk Pro</span>
              </div>
              <p>Making customer support seamless and efficient</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/enterprise">Enterprise</Link>
                <Link to="/security">Security</Link>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <Link to="/docs">Documentation</Link>
                <Link to="/help">Help Center</Link>
                <Link to="/api">API</Link>
                <Link to="/status">Status</Link>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/security">Security</Link>
                <Link to="/compliance">Compliance</Link>
              </div>
            </div>
          </div>
          <div className="footer-legal">
            <p>&copy; 2024 Helpdesk Pro. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/security">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 