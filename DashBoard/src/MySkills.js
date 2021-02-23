import React from 'react'
import { Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const MySkills = () => {
    return (
        <div className="myskill-card" id="skills">
            <h3>MY SKILLS</h3>
            <div className="positions">
                <div className="sub-card">
                    <Card style={{ width: '18rem', height: '14rem', borderBottom: '4px solid #00a2ff', marginBottom: "1.7rem" }} className="mt-1">
                        <Card.Body className="bodyChange">
                            <Card.Title className="bi bi-display centerP"></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">FRONT END</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '14rem', borderBottom: '4px solid #00a2ff', marginBottom: "1.7rem" }}>
                        <Card.Body className="bodyChange">
                            <Card.Title className="bi bi-code-slash centerP"></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">BACK END</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                    </Card.Text>

                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '14rem', borderBottom: '4px solid #00a2ff', marginBottom: "1.7rem" }}>
                        <Card.Body className="bodyChange">
                            <Card.Title className="bi bi-server centerP"></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">DATABASE MANAGEMENT</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                   </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '14rem', borderBottom: '4px solid #00a2ff', marginBottom: "1.7rem" }}>
                        <Card.Body>
                            <Card.Title className="bi bi-person-circle centerP"></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">VERSION CONTROL</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MySkills