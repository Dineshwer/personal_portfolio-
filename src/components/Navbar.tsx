import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="navbar-container">
            <nav className="navbar" aria-label="Main Navigation">
                <div className="nav-left">
                    <a href="/" className="brand-link">R S Dineshwer</a>
                </div>

                <div className="nav-center">
                    <ul className="nav-links">
                        <li><a href="#work" className="nav-link">Work</a></li>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#process" className="nav-link">Process</a></li>
                        <li><a href="mailto:contact@example.com" className="nav-link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav-right">
                    <button className="nav-cta">
                        Let's Collaborate
                    </button>
                </div>
            </nav>
        </header>
    );
}
