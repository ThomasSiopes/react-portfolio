import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PROJECT_ALL } from "../utils/queries";

import { Container, Row, Col } from "react-bootstrap";
import ProjectLoad from "../components/ProjectLoad";

function AllProjects() {
    const {loading, data} = useQuery(QUERY_PROJECT_ALL);

    if(loading) return <p>Loading...</p>

    const allProjects = data.projects;

    return(
        <Container className="mt-nav">
            <div className="genText font-questrial text-center mb-3">
                <h1>My Projects</h1>
                <p>These are all my projects. More sample text has to go here.</p>
            </div>
            <div>
                <ul id="filters" className="font-questrial text-center px-1">
                    <li className="btn btn-success-inverse m-1">Show All</li>
                    <li className="btn btn-success-inverse m-1">Front-End</li>
                    <li className="btn btn-success-inverse m-1">Back-End</li>
                    <li className="btn btn-success-inverse m-1">HTML</li>
                    <li className="btn btn-success-inverse m-1">Javascript</li>
                    <li className="btn btn-success-inverse m-1">React</li>
                    <li className="btn btn-success-inverse m-1">JQuery</li>
                    <li className="btn btn-success-inverse m-1">Node.js</li>
                    <li className="btn btn-success-inverse m-1">MySQL</li>
                    <li className="btn btn-success-inverse m-1">Mongoose</li>
                </ul>
            </div>
            <Row>
                {allProjects.map((index) => (
                    <Col xs={12} md={6} lg={4} className="mb-3" key={index._id}>
                        <ProjectLoad currentProjectId={index._id}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllProjects;