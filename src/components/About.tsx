"use client";

import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && blockRef.current) {
                    blockRef.current.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section">
            <div className="about-container">

                {/* Left Column: Label */}
                <div className="about-label-column">
                    <h2 className="about-label">
                        About
                    </h2>
                </div>

                {/* Right Column: Editorial Content Block */}
                <div
                    ref={blockRef}
                    className="about-block about-text"
                >
                    <p>
                        My work sits at the intersection of <strong>security engineering, penetration testing, and system design</strong>.
                        I do not build for pure expression; I build for resilience. In an
                        environment defined by rapid exploitation and fragility, my role is
                        to construct digital architectures that remain calm under pressure.
                    </p>

                    <p>
                        I approach development with the mindset of an adversary and the
                        discipline of an architect. Every interface, API endpoint, and
                        interaction is evaluated not just for function, but for integrity.
                        Systems should explain themselves quietly, guiding users through
                        complexity without concealing the underlying logic.
                    </p>

                    <p>
                        This portfolio is not a showcase of visual trends. It is a documentation
                        of technical rigor—a calibration of trust. By stripping away
                        decorative noise, I ensure that the remaining signals are precise,
                        intentional, and inevitable.
                    </p>
                </div>
            </div>
        </section>
    );
}
