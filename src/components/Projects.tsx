import React from 'react';
import { projects } from '@/data/projects';
import './Projects.css';

export default function Projects() {
    return (
        <section className="projects-container">
            <div className="projects-content">
                <header className="projects-header">
                    <h2 className="company-title">Selected work</h2>
                    <h3 className="company-subtitle">A few things I’ve built along the way</h3>
                </header>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article key={index} className="project-card group">
                            <div className="project-index">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            <div className="project-info">
                                <h4 className="card-title">{project.title}</h4>
                                <p className="card-description">
                                    {project.description}
                                </p>
                            </div>

                            <div className="card-tags">
                                <p className="tags-text">
                                    {project.tags.join(" / ")}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
