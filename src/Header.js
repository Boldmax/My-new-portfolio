import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Hi, I Am Olabode, A Software Developer...</h1>
                <Typed
                    className="typed-text"
                    strings={["I Develop Web Applications...", "Frontend and Backend applications...", "I Work With Version Control Technonology...", "I Develop Web API..."]}
                    typeSpeed={35}
                    backSpeed={60}
                    loop
                />
                <a href="#contact" className="offer-button">Hire Me</a>
            </div>

        </div>
    )
}

export default Header;
