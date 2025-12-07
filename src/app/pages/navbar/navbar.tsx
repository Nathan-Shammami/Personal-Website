"use client";

import "./navStyles.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navLeft">
                <h2>NS</h2>
            </div>
            <div className="navRight">
                <a href="#about" className="navLinks">About</a>
                <a href="#projects" className="navLinks">Projects</a>
                <a href="#experience" className="navLinks">Experience</a>
                <a href="#contact" className="navLinks">Contact</a>
            </div>
        </div>
    );
}
