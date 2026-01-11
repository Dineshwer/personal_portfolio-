import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Terminal, Server, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, opticReveal } from '../utils/animations';
import './Capabilities.css';

export default function Capabilities() {
    const skills = [
        {
            category: "Security Engineering",
            icon: Shield,
            items: [
                "Network Scanning & Enumeration",
                "Vulnerability Assessment",
                "Penetration Testing",
                "Active Directory Attacks",
                "Cloud Security Monitoring"
            ]
        },
        {
            category: "Development",
            icon: Code,
            items: ["Python", "Java", "C / C++", "Bash Scripting", "React / Next.js"]
        },
        {
            category: "Offensive Tools",
            icon: Terminal,
            items: [
                "Nmap / Metasploit",
                "Burp Suite Professional",
                "Wireshark / SQLMap",
                "Ngrok / Wazuh SIEM"
            ]
        },
        {
            category: "Infrastructure",
            icon: Server,
            items: ["AWS Cloud Architecture", "Linux (Kali, Ubuntu)", "Windows Server Hardening"]
        }
    ];

    return (
        <section className="capabilities-section" id="capabilities">
            <div className="capabilities-container">
                <div className="capabilities-header">
                    <span className="section-label flex items-center gap-2 text-cyan-400 font-mono tracking-widest text-sm uppercase mb-4">
                        <Zap size={14} /> Arsenal
                    </span>
                    <h2 className="section-title">Technical Capabilities</h2>
                </div>

                <motion.div
                    className="capabilities-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {skills.map((group, index) => (
                        <motion.div key={index} className="capability-card group" variants={opticReveal}>
                            <div className="cat-header">
                                <div className="cat-icon-box">
                                    <group.icon size={20} />
                                </div>
                                <h3 className="capability-category">{group.category}</h3>
                            </div>
                            <ul className="capability-list">
                                {group.items.map((item, i) => (
                                    <li key={i} className="capability-item">
                                        <span className="cap-bullet"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
