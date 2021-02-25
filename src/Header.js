import React from "react";
import Typed from "react-typed";

function Header() {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Hi, Am Olabode, A Software Engineer...</h1>
                <Typed
                    className="typed-text"
                    strings={["I Will Develop A primium Rated User Interface...", "I Will Develop An Efficient Server Side Application...", "I Work With Version Control Technonology...", "Am A Fan Of Test Driven development..."]}
                    typeSpeed={35}
                    backSpeed={60}
                    loop
                />
                <a href="#contact" className="offer-button">Hire Me</a>
            </div>

        </div>
    )
}

export default Header
