import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import './Experience.css';

export default function Experience() {
    const experience = [
        {
            role: "AI Developer",
            company: "Theta Zero",
            period: "May 2025 – Jul 2025",
            description: [
                "Architected AI learning orchestrator for personalized education paths",
                "Designed MongoDB workflows to optimize content delivery logic",
                "Engineered APIs for real-time dynamic recommendations",
                "Integrated large language model intelligence into frontend"
            ]
        },
        {
            role: "Cyber Security Support Engineer Intern",
            company: "PreludeSys",
            period: "Jul 2024 – Aug 2024",
            description: [
                "Conducted vulnerability assessments and penetration testing",
                "Analyzed security documentation and compliance reports",
                "Monitored SIEM tools and responded to security alerts",
                "Enforced corporate security policies and incident response protocols"
            ]
        }
    ];

    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-header">
                    <span className="section-label">
                        <Clock size={14} /> MISSION LOG
                    </span>
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
                                    <span className="job-company flex items-center gap-2">
                                        <Briefcase size={14} /> {job.company}
                                    </span>
                                    <span className="job-period flex items-center gap-2">
                                        <Calendar size={14} /> {job.period}
                                    </span>
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
