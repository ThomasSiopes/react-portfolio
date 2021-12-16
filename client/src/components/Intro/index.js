import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Intro = () => {
    return (
        <Container className="text-center d-flex component">
            <Container className="align-self-center pb-5">
                <section className="mb-3">
                    <h1 className="genText font-questrial">Hi, I'm Tom Siopes</h1> 
                    <h5 className="genText font-questrial">I'm an aspiring full-stack web developer, and this is my portfolio app</h5>
                </section>
                <section>
                    <p>
                        <a className="btn btn-success rounded-0 rounded-start ms-1 font-questrial" href="#about">About Me</a>
                        <Link className="btn btn-success rounded-0 rounded-end me-1 border-start font-questrial" to={`/projects`}>Projects</Link>
                    </p>
                </section>
            </Container>
        </Container>
    )
}

export default Intro;