import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
    return (
        <div className="footer-com">
            <div className="holder">
                <div className="content-position">
                    <div className="conten">
                        <p>maxbold0007@gmail.com</p>
                        <p>+2348068191078</p>

                    </div>
                    <div className="associates">
                        <a href="#home">Home</a>
                        <a href="#about">About Me</a>
                        <a href="#skill">My Skills</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="copyright">
                        <div className="logos">
                            <a href="https://twitter.com/Bold_max1?s=09" className="bi bi-twitter">Twitter</a>
                            <a href="https://www.linkedin.com/mwlite/in/adewumi-olabode-olalekan-091a9171" className="bi bi-linkedin">LinkedIn</a>
                            <a href="https://github.com/Boldmax" className="bi bi-github">GitHub</a>
                        </div>
                        <p>Copyright © 2021 boldmax</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
