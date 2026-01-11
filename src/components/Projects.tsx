import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { staggerContainer, opticReveal } from '@/utils/animations';
import { projects } from '@/data/projects';
import './Projects.css';

export default function Projects() {
    return (
        <section className="projects-container" id="work">
            <div className="projects-content">
                <header className="projects-header">
                    <h2 className="company-title">Selected Intelligence</h2>
                    <h3 className="company-subtitle">Deployed Systems & Research</h3>
                </header>

                <motion.div
                    className="projects-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={index}
                            className="project-card group"
                            variants={opticReveal}
                        >
                            <div className="card-header-top">
                                <FolderGit2 className="folder-icon" size={40} strokeWidth={1.5} />
                                <ExternalLink className="external-icon" size={20} />
                            </div>

                            <div className="project-info mt-6">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-description">
                                    {project.description}
                                </p>
                            </div>

                            <div className="card-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag-pill">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
