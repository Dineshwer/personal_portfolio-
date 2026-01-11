import React from 'react';
import { motion } from 'framer-motion';
import { Search, Skull, Activity, ShieldCheck, Crosshair } from 'lucide-react';
import { staggerContainer, fadeInUp, opticReveal } from '../utils/animations';
import './Process.css';

export default function Process() {
    const steps = [
        {
            title: "Reconnaissance",
            desc: "Mapping attack surface, architecture, and hidden dependencies.",
            icon: Search
        },
        {
            title: "Exploitation",
            desc: "Simulating adversary behavior to breach trust boundaries.",
            icon: Skull
        },
        {
            title: "Impact Analysis",
            desc: "Tracing privilege paths and business impact of failures.",
            icon: Activity
        },
        {
            title: "Remediation",
            desc: "Implementing controls that eliminate the root cause.",
            icon: ShieldCheck
        }
    ];

    return (
        <section className="process-section" id="process">
            <div className="process-container">
                <div className="process-header">
                    <span className="section-label flex justify-center items-center gap-2 text-cyan-400 font-mono tracking-widest text-sm uppercase mb-4">
                        <Crosshair size={14} /> METHODOLOGY
                    </span>
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
                        <motion.div key={index} className="process-step group" variants={fadeInUp}>
                            <div className="step-icon-box">
                                <step.icon size={28} />
                                <span className="step-number">{index + 1}</span>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
