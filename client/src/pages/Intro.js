import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Intro() {
    return (
        <Container className="text-center d-flex height-max">
            <Container className="align-self-center">
                <section className="mb-3"><h1 className="genText">Hi, I'm Tom Siopes. I'm an aspiring full-stack web developer, and this is my portfolio app.</h1></section>
                <section><Link className="btn btn-success" to={`/projects`}>My Projects</Link></section>
            </Container>
        </Container>
    )
}

export default Intro;