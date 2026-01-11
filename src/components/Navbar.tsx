import React from 'react';
import { Home, User, Lightbulb, Mail, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar-container">
            <nav className="navbar" aria-label="Main Navigation">
                <div className="nav-left">
                    <a href="/" className="brand-link">
                        R S Dineshwer
                    </a>
                </div>

                <div className="nav-center">
                    <ul className="nav-links">
                        <li>
                            <a href="#work" className="nav-link">
                                <Home size={16} /> <span className="nav-text">Work</span>
                            </a>
                        </li>
                        <li>
                            <a href="#capabilities" className="nav-link">
                                <User size={16} /> <span className="nav-text">Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#process" className="nav-link">
                                <Lightbulb size={16} /> <span className="nav-text">Process</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                <Mail size={16} /> <span className="nav-text">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="nav-right">
                    <button className="nav-cta">
                        Collaborate <ArrowRight size={16} className="ml-2 inline" />
                    </button>
                </div>
            </nav>
        </header>
    );
}
