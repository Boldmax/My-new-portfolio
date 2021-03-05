import React, { useEffect } from 'react';
import { Card } from "react-bootstrap";
import backGroun from "./backgrd (2).jpg";
import eazyRent from "./EaZyRent.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Animate } from "react-rebound";

export default function Portfolio() {
    const [hovered, setHovered] = React.useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="portfolio-card" id="portfolio">
            <h3>PORTFOLIO</h3>
            <div className="portfolio-posit">
                <div className="portfo-card">
                    <Animate scaleX={hovered ? 1.3 : 1} scaleY={hovered ? 1.3 : 1}>
                        <Card onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} data-aos="fade-up" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                            <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={eazyRent} alt="Card image" />
                            <Card.ImgOverlay>
                                <h2 className="m-title">EazyRent</h2>
                                <Card.Text className="sub-title">EazyRent user interface(frontend) was built with HTML, CSS and Javascript technology while the backend was built with python technology. </Card.Text>
                                <Card.Body>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </Card>
                    </Animate>
                    <Card data-aos="fade-down" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <h2 className="m-title">Card Title</h2>
                            <Card.Text className="sub-title">Lorem, ipsum consectetur adipisicing elit. Nostrum aliquid maiores,repudiandae qui accusamus temporibus! Saepe ab illo cum?</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card data-aos="fade-up" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <h2 className="m-title">Card Title</h2>

                            <Card.Text className="sub-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid maiores, id fugiat, quod! Saepe ab illo cum?</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card data-aos="fade-down" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <h2 className="m-title">Card Title</h2>

                            <Card.Text className="sub-title">Lorem, ipsum dolor sit amet . Nostrum aliquid maiores, id fugiat, quod, culpa laborum repellendus perspiciatis </Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>

                </div>
            </div>
        </div>
    )
}
