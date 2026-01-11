import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="section-label">09</span>
                    <h2 className="contact-title">Let’s Build <br />Secure Systems</h2>
                </div>

                <div className="contact-body">
                    <p className="contact-intro">
                        Whether you’re exploring security research, building resilient systems, or need a hands-on engineer — I’m open to collaboration.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="detail-label">Email</span>
                            <a href="mailto:dineshwerrs@gmail.com" className="detail-link">dineshwerrs@gmail.com</a>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Location</span>
                            <span className="detail-text">Chennai, India</span>
                        </div>
                    </div>

                    <a href="mailto:dineshwerrs@gmail.com" className="cta-button">
                        Start a Conversation
                    </a>
                </div>

                <footer className="footer">
                    <span>© 2026 R S Dineshwer</span>
                    <span>System Status: Online</span>
                </footer>
            </div>
        </section>
    );
}
