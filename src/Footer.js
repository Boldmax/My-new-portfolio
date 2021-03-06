import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
    return (
        <div className="footer-com">
            <div className="holder">
                <div className="content-position">
                    <div className="copyright">
                        <ul className="logos">
                            <li> <a href="https://twitter.com/Bold_max1?s=09"><i className="bi bi-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/mwlite/in/adewumi-olabode-olalekan-091a9171"><i className="bi bi-linkedin"></i></a></li>
                            <li><a href="https://github.com/Boldmax"><i className="bi bi-github"></i></a></li>
                            <li><a href="tel:+2348068191078"><i className="bi bi-telephone-fill"></i></a></li>
                        </ul>

                    </div>
                    <div className="ft-links">
                        <div className="associates">
                            <a href="#home">Home<span className="separator">|</span></a>
                            <a href="#about-me">About<span className="separator">|</span></a>
                            <a href="#skills">Skills<span className="separator">|</span></a>
                            <a href="#portfolio">Portfolio<span className="separator">|</span></a>
                            <a id="contact" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div>
                        <p>Copyright&copy; 2021 Olabode Adewumi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
