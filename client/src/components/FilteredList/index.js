import React from "react";

import { Row, Col } from "react-bootstrap";
import ProjectLoad from "../../components/ProjectLoad";

const FilteredProject = (input) => {
    const allProjects = input.projectList;

    let filtered = [];

    let checker = (arr1, arr2) => arr2.every(v => arr1.includes(v));

    for(let index of allProjects) {
        if(checker(index.tags, input.chosenTags) && !(filtered.includes(index))) filtered.push(index);
    }
    
    return(
        <Row>
            {filtered.map((i) => (
                <Col xs={12} md={6} lg={4} className="mb-3" key={i._id}>
                    <ProjectLoad currentProjectId={i._id}/>
                </Col>
            ))}
        </Row>
    )
}

export default FilteredProject;