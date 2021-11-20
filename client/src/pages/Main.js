import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Container, Button, Col, Row } from "react-bootstrap";

import ProjectLoad from "../components/ProjectLoad";

import { QUERY_PROJECT_ALL } from "../utils/queries";

function Home() {
    const projects = useQuery(QUERY_PROJECT_ALL);

    const [currentTab, setTab] = useState({
        tabID: 0,
    });

    const changeTab = (event) => {
        event.preventDefault();
        setTab({...currentTab, tabID: event.target.getAttribute("name")});
    }

    if(projects.loading) return <p>Loading...</p>

    return(
        <Container>
            <Row>
                <Col xs={12} md={4} lg={3} className="me-2 mb-3">
                    <div className="bg-green border-green p-2">
                        <ul className="noDecor mt-2 px-2">
                            {projects.data.projects.map((index) => (
                                <li className="text-center mb-2" key={index._id}>
                                    <Button variant={"success"} className="btn-block" name={index._id} onClick={changeTab}>
                                        {index.title}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Col>
                <Col className="p-0">
                    <ProjectLoad currentProjectId={currentTab.tabID}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;