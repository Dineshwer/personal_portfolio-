import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../utils/animations';
import './Process.css';

export default function Process() {
    const steps = [
        {
            title: "Understand the system",
            desc: "Architecture, attack surface, assumptions."
        },
        {
            title: "Break it",
            desc: "Simulate real-world threats and adversary behavior."
        },
        {
            title: "Analyze impact",
            desc: "Map privilege paths, misconfigurations, and failure points."
        },
        {
            title: "Harden & improve",
            desc: "Apply security controls that measurably reduce risk."
        }
    ];

    return (
        <section className="process-section" id="process">
            <div className="process-container">
                <div className="process-header">
                    <span className="section-label">08</span>
                    <h2 className="title-large">How I Work</h2>
                </div>

                <motion.div
                    className="process-steps"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                >
                    {steps.map((step, index) => (
                        <motion.div key={index} className="process-step" variants={fadeInUp}>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
