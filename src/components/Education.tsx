import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Education.css';

export default function Education() {
    const certs = [
        "Google Cybersecurity Professional Certificate",
        "EC-Council Digital Forensics Essentials (DFE)",
        "GUVI Ethical Hacking",
        "CompTIA Security+ (Expected Feb 2026)"
    ];

    return (
        <section className="education-section" id="education">
            <div className="education-grid">

                {/* 6. Education */}
                <motion.div
                    className="ed-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <span className="section-label">06 / ACADEMICS</span>
                    <h2 className="ed-title">Education</h2>

                    <div className="ed-card">
                        <div className="ed-meta">
                            <span>2022 – 2026</span>
                            <span className="ed-location">Chennai, India</span>
                        </div>
                        <h3 className="ed-school">Vellore Institute of Technology</h3>
                        <p className="ed-degree">B.Tech – Computer Science <br />(Cyber Physical Systems)</p>

                        <div className="ed-grade">
                            [ CGPA: 8.17 ]
                        </div>
                    </div>
                </motion.div>

                {/* 7. Certifications */}
                <motion.div
                    className="ed-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <span className="section-label">07 / CREDENTIALS</span>
                    <h2 className="ed-title">Certifications</h2>

                    <ul className="cert-list">
                        {certs.map((cert, index) => (
                            <motion.li key={index} className="cert-item" variants={fadeInUp}>
                                {cert}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}
