import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import portfolio1 from "./images/portfolio1.png";
import portfolio2 from "./images/portfolio2.png";
import portfolio3 from "./images/portfolio3.png";
import portfolio4 from "./images/portfolio4.png";

export default function Portfolio() {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="portfolio" id="portfolio">
            <h3>PORTFOLIO</h3>
            <div className="portfolio-posit">
                <div className="portfo-cont">
                    <div className="portfo-card" data-aos="fade-up" >
                        <img src={portfolio1} alt="portfolio" />
                        <div>
                            <h4>Mobile Restaurant</h4>
                            <p>Developed with React, Redux, Node and Express Js. Website
                                adaptable to all devices, with ui components and animated interactions. </p>
                            <button><a href="https://stark-brook-46223.herokuapp.com/">View App</a></button>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="portfo-card">
                        <img src={portfolio2} alt="portfolio" />
                        <div>
                            <h4>Goodies Shop</h4>
                            <p>Developed with React, Redux, Node and Express Js. Website
                                adaptable to all devices, with ui components and animated interactions.</p>
                            <button><a href="https://classicbuy-ecommerce.herokuapp.com/">View App</a></button>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="portfo-card">
                        <img src={portfolio3} alt="portfolio" />
                        <div>
                            <h4>Trendy Shoes</h4>
                            <p>Developed with React, Redux, Node and Express Js. Website
                                adaptable to all devices, with ui components and animated interactions.</p>
                            <button><a href="https://trendyshoeapp.herokuapp.com/">View App</a></button>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="portfo-card">
                        <img src={portfolio4} alt="portfolio" />
                        <div>
                            <h4>Live Love Foundation</h4>
                            <p>Developed with React, Redux, Node and Express Js. Website
                            adaptable to all devices,
                                with ui components and animated interactions. </p>
                            <button><a href="https://livelovefoundation-ngo.netlify.app/">View App</a></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
