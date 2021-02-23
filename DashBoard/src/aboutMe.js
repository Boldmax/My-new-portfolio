import React from 'react';
import { Card } from "react-bootstrap";
import image from "./mne.jpg"

function AboutMe() {
    return (
        <div className="about-wrapper">
            <div className="description" >
                <div className="card-bod">
                    <div className="card1" id="about-me">
                        <img src={image} alt="my pictures" />
                    </div>
                    <Card className="card2" style={{ width: '30rem', height: '18rem' }}>
                        <Card.Body className="b-none">
                            <Card.Title>About Me</Card.Title>
                            <Card.Text className="details">
                                I am an highly motivated individual who is always willing to go extra miles for my client satisfaction,
                                I am technology enthusiast, always willing to learn am apply new and efficient techniques. Programing is what
                                I do with customer satisfaction in mind. We wish you a merry christmass and a happppy newww yearrrrrr!
                        </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

