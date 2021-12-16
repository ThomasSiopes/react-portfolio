import React from "react";

import { Row, Col } from "react-bootstrap";

import About from "../components/About"
import Intro from "../components/Intro"

function Main() {
    return(
        <div id="intro">
            <Intro/>
            
            <Row className="genText mx-5 mb-5">
                <Col className="ps-0 align-items-center"><hr/></Col>
                <Col xs={4} md={2} xl={1} className="text-center font-questrial pt-1 px-0" id="about">About Me</Col>
                <Col className="pe-0 align-items-center"><hr/></Col>
            </Row>
            
            <About/>
        </div>
    );
}

export default Main;