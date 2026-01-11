import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Award, CheckCircle } from 'lucide-react';
import { opticReveal, staggerContainer } from '../utils/animations';
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
                    variants={staggerContainer}
                >
                    <span className="section-label"><Cpu size={14} /> SYSTEM ARCHITECTURE</span>
                    <motion.h2 className="ed-title" variants={opticReveal}>Education</motion.h2>

                    <motion.div className="ed-card" variants={opticReveal}>
                        <div className="ed-meta">
                            <span>2022 – 2026</span>
                            <span className="ed-location">Chennai, India</span>
                        </div>
                        <h3 className="ed-school">Vellore Institute of Technology</h3>
                        <p className="ed-degree">B.Tech – Computer Science <br />(Cyber Physical Systems)</p>

                        <div className="ed-grade">
                            Performance Index: <span className="text-white">8.17</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* 7. Certifications */}
                <motion.div
                    className="ed-block"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <span className="section-label"><Award size={14} /> SECURITY PROTOCOLS</span>
                    <motion.h2 className="ed-title" variants={opticReveal}>Certifications</motion.h2>

                    <ul className="cert-list">
                        {certs.map((cert, index) => (
                            <motion.li key={index} className="cert-item" variants={opticReveal}>
                                <CheckCircle size={16} className="text-cyan-400" />
                                {cert}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}
