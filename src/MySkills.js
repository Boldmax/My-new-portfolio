import React, { useEffect } from 'react';
import { card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Aos from "aos";
import "aos/dist/aos.css";

const MySkills = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="myskill-card" id="skills">
            <h3>MY SKILLS</h3>
            <div className="positions">
                <div className="card-cont">
                    <div className="skill-card" data-aos="fade-right" >
                        <span className="bi bi-display"></span>
                        <h3>frontend</h3>
                        <p>
                            I develop web application, General web pages & landing page development, efficient & reliable frontend for different products and services.
                        </p>

                    </div>

                    <div className="skill-card" data-aos="fade-left">
                        <span className="bi bi-code-slash"></span>
                        <h3>backend</h3>
                        <p>
                            I develop the web API, efficient, user friendly and secured backend application.
                    </p>

                    </div>

                    <div className="skill-card" data-aos="fade-right">
                        <span className="bi bi-server"></span>
                        <h3>database management</h3>
                        <p>
                            I work with Mongo database (non-relational database) and Postgresq (relational database).
                   </p>
                    </div>

                    <div data-aos="fade-left" className="skill-card" >
                        <span className="bi bi-person-circle"></span>
                        <h3>version control</h3>
                        <p>
                            With the use of github and gitlab, I can apply contineous development and implementation of new features to web applications.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MySkills;