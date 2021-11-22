import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function AboutMe() {
    return (
        <Container className="text-center d-flex height-max">
            <Container className="align-self-center">
                <Row>
                    <Col>
                        <div className="genText mb-2">Placeholder Text About Me</div>
                        <div>
                            <Button variant={"success"} href="#" className="mx-1"><FaGithub/></Button>
                            <Button variant={"success"} href="#" className="mx-1"><FaLinkedinIn/></Button>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AboutMe;