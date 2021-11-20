import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="success" variant="dark" className="mb-3">
            <Container>
                <Nav className="ms-auto">
                    <Link className="nav-link mx-2" to={`/`}>Introduction</Link>
                    <Link className="nav-link mx-2" to={`/projects`}>Projects</Link>
                    <Link className="nav-link mx-2" to={`/`}>About Me</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;