import React, { useEffect } from 'react'
import { Card } from "react-bootstrap";
import backGroun from "./backgrd (2).jpg"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
    useEffect( () => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <div className="portfolio-card" id="portfolio">
            <h3>PORTFOLIO</h3>
            <div className="portfolio-posit">
                <div className="portfo-card">
                    <Card data-aos="fade-up" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>

                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card data-aos="fade-down" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card data-aos="fade-up" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>

                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card data-aos="fade-down" style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>

                            <Card.Text>Last updated 3 mins ago</Card.Text>
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
