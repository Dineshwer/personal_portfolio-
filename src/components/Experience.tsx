import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Experience.css';

export default function Experience() {
    const experience = [
        {
            role: "Cyber Security Support Engineer Intern",
            company: "PreludeSys",
            period: "Jul 2024 – Aug 2024",
            description: [
                "Assisted with vulnerability assessments and penetration testing",
                "Reviewed security documentation and assessment reports",
                "Monitored security tools and responded to basic alerts",
                "Supported incident response and enforcement of security policies"
            ]
        },
        {
            role: "AI Developer",
            company: "Theta Zero",
            period: "May 2025 – Jul 2025",
            description: [
                "Built an AI-powered learning orchestrator for personalized learning paths",
                "Designed rule-based logic and MongoDB workflows to improve content delivery",
                "Developed APIs for dynamic recommendations",
                "Integrated backend intelligence into front-end interfaces"
            ]
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-header">
                    <span className="section-label">05</span>
                    <h2 className="section-title">Experience</h2>
                </div>

                <motion.div
                    className="experience-list"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {experience.map((job, index) => (
                        <motion.div key={index} className="experience-block" variants={fadeInUp}>
                            <div className="experience-meta">
                                <h3 className="job-role">{job.role}</h3>
                                <div className="job-company-row">
                                    <span className="job-company">{job.company}</span>
                                    <span className="job-period">{job.period}</span>
                                </div>
                            </div>
                            <ul className="job-description">
                                {job.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
