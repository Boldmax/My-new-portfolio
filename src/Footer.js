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
                        <a href="#mySkill">My Skills</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="copyright">
                        <div className="logos">
                            <a href="#" className="bi bi-twitter"></a>
                            <a href="#" className="bi bi-linkedin"></a>
                            <a href="#" className="bi bi-github"></a>
                        </div>
                        <p>Copyright 2021 boldmax</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
