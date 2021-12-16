import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Container, Button, Col, Row } from "react-bootstrap";

import ProjectLoad from "../ProjectLoad";

import { QUERY_PROJECT_ALL } from "../../utils/queries";

const Projects = () => {
    const projects = useQuery(QUERY_PROJECT_ALL);

    const [currentTab, setTab] = useState({
        tabID: 0,
    });

    const [samples, setSamples] = useState({
        projects: []
    });

    const changeTab = (event) => {
        event.preventDefault();
        setTab({...currentTab, tabID: event.target.getAttribute("name")});
    }

    if(projects.loading) return <p>Loading...</p>

    const projectList = projects.data.projects;

    for(let i = 0; (samples.length < 5); ++i) {
        let randomEl = projectList[Math.floor(Math.random() * projectList.length)];
        console.log(randomEl);
        if(!(samples.projects.includes(randomEl))) {
            let copyList = [...samples.projects]
            copyList.push(randomEl);
            setSamples({...samples, projects: copyList});
        }
    }

    return(
        <Container className="font-questrial component">
            <Row>
                <Col xs={12} md={3} lg={3} className="me-2 mb-3">
                    <Container className="bg-green border-green py-2">
                        <ul className="noDecor mt-2 px-2">
                            {samples.projects.map((index) => (
                                <li className="text-center mb-2" key={index._id}>
                                    <Button variant={"success"} className="btn-block" name={index._id} onClick={changeTab}>
                                        {index.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </Container>
                </Col>
                <Col className="p-0">
                    <Container className="mb-3">
                        <ProjectLoad currentProjectId={currentTab.tabID}/>
                    </Container>
                </Col>
                <Col xs={12} md={3} lg={3}/>
            </Row>
        </Container>
    )
}

export default Projects;