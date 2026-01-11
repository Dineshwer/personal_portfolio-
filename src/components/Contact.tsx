import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Zap, Github, Linkedin, ArrowRight } from 'lucide-react';
import { opticReveal, fadeInUp } from '@/utils/animations';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                {/* Header */}
                <motion.div
                    className="contact-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={opticReveal}
                >
                    <span className="section-label">
                        <Zap size={14} fill="currentColor" /> SYSTEM STATUS: ONLINE
                    </span>
                    <h2 className="contact-title">Ready to <br />Deploy?</h2>
                </motion.div>

                {/* Control Grid */}
                <div className="contact-body">

                    {/* Panel 1: Direct Comms */}
                    <motion.div
                        className="status-panel"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <div>
                            <h3 className="panel-title"><Mail className="text-violet-500" /> Secure Channel</h3>
                            <p className="contact-intro text-slate-400 mb-8">
                                Available for security consulting, penetration testing, and systems engineering roles.
                            </p>
                            <div className="detail-item">
                                <span className="detail-label">Signal / Email</span>
                                <a href="mailto:dineshwerrs@gmail.com" className="detail-link">dineshwerrs@gmail.com</a>
                            </div>
                        </div>
                        <a href="mailto:dineshwerrs@gmail.com" className="cta-button">
                            Initialize Link <ArrowRight className="ml-2" size={18} />
                        </a>
                    </motion.div>

                    {/* Panel 2: Location & Socials */}
                    <motion.div
                        className="action-panel"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, delay: 0.1 }}
                        variants={fadeInUp}
                    >
                        <div>
                            <h3 className="panel-title"><MapPin className="text-cyan-400" /> Base of Operations</h3>
                            <div className="detail-item">
                                <span className="detail-label">Coordinates</span>
                                <span className="text-xl text-white font-medium">Chennai, India</span>
                            </div>

                            <div className="detail-item">
                                <span className="detail-label">Network</span>
                                <div className="flex flex-col gap-3">
                                    <a href="#" className="detail-link flex items-center gap-2">
                                        <Linkedin size={18} /> LinkedIn
                                    </a>
                                    <a href="#" className="detail-link flex items-center gap-2">
                                        <Github size={18} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <footer className="footer">
                    <span>© 2026 R S Dineshwer / OFFENSIVE SECURITY</span>
                    <span className="flex items-center">
                        <span className="status-indicator"></span>
                        NO ACTIVE THREATS
                    </span>
                </footer>
            </div>
        </section>
    );
}
