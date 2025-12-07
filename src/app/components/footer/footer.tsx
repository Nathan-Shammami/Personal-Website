"use client";

import "./footerStyles.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <h2>Nathan Shammami 2025</h2>
            </div>
            <div className="footerRight">
                <a href="mailto:Nathan.Shammami@gmail.com" target="_blank" className="navLinks">Email Me</a>
                <a href="https://www.linkedin.com/in/nathan-shammami-181606234" target="_blank" className="navLinks">Linkedin</a>
                <a href="https://github.com/Nathan-Shammami" target="_blank" className="navLinks">Github</a>
            </div>
        </div>
    );
}
