import React from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const AboutMe = () => {
    return (
        <Container className="text-center d-flex component">
            <Container className="align-self-center">
                <Row className="align-items-center">
                    <Col xs={12} md={7}>
                        <Row className="rounded font-questrial genText align-items-center">
                            <Col xs={12} lg={4} className="mb-2">
                                <Container className="py-4 bg-green border-green">
                                    <p className="text-center"><strong>Front-End</strong></p>
                                    <ul className="noDecor ps-0 mb-0">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>JQuery</li>
                                        <li>Handlebars</li>
                                        <li>Bootstrap and similar frameworks</li>
                                        <li>PHP</li>
                                    </ul>
                                </Container>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <Container className="py-4 bg-green border-green">
                                    <p className="text-center"><strong>Back-End</strong></p>
                                    <ul className="noDecor ps-0 mb-0">
                                        <li>Node.js</li>
                                        <li>MySQL</li>
                                        <li>Mongoose & MongoDB</li>
                                    </ul>
                                </Container>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <Container className="py-4 bg-green border-green">
                                    <p className="text-center"><strong>Tools of Development</strong></p>
                                    <ul className="noDecor ps-0 mb-0">
                                        <li>Github</li>
                                        <li>Heroku</li>
                                        <li>Visual Studio Code</li>
                                        <li>Brackets</li>
                                        <li>MySQL Workbench</li>
                                        <li>XAMPP</li>
                                    </ul>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <img src="/assets/images/proverbial_wisdom.png" alt="Profile for me"/>
                        <p className="genText">Filler. Preferably an image of me.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AboutMe;