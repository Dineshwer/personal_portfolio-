import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Capabilities.css';

export default function Capabilities() {
    const skills = [
        {
            category: "Security Engineering",
            items: [
                "Network Scanning & Enumeration",
                "Vulnerability Assessment",
                "Penetration Testing",
                "Active Directory Attacks & Hardening",
                "Cloud Security Monitoring"
            ]
        },
        {
            category: "Programming & Development",
            items: ["Python", "Java", "C / C++", "Bash", "React"]
        },
        {
            category: "Security Tooling",
            items: [
                "Nmap · Metasploit · Burp Suite",
                "Wireshark · SQLMap · BeEF",
                "Ngrok · Wazuh SIEM"
            ]
        },
        {
            category: "Platforms",
            items: ["AWS", "Linux (Ubuntu, Kali)", "Windows Server"]
        }
    ];

    return (
        <section className="capabilities-section" id="capabilities">
            <div className="capabilities-container">
                <div className="capabilities-header">
                    <span className="section-label">04</span>
                    <h2 className="section-title">Capabilities</h2>
                </div>

                <motion.div
                    className="capabilities-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {skills.map((group, index) => (
                        <motion.div key={index} className="capability-group" variants={fadeInUp}>
                            <h3 className="capability-category">{group.category}</h3>
                            <ul className="capability-list">
                                {group.items.map((item, i) => (
                                    <li key={i} className="capability-item">{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
