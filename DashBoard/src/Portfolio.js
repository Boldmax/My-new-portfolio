import React from 'react'
import { Card } from "react-bootstrap";
import backGroun from "./backgrd (2).jpg"

export default function Portfolio() {
    return (
        <div className="portfolio-card" id="portfolio">
            <h3>PORTFOLIO</h3>
            <div className="portfolio-posit">
                <div className="portfo-card">
                    <Card style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>

                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
                        <Card.Img style={{ borderRadius: "0.7rem", border: "0.03rem solid black" }} src={backGroun} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>

                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Body>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card.ImgOverlay>
                    </Card>
                    <Card style={{ width: '20rem', height: '14rem', borderRadius: "0.7rem", padding: "0.7rem", border: "0.2rem solid #00a2ff", marginBottom: "1.7rem" }} className="bg-light text-white">
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
