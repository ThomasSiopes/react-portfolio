import React from "react";
import { useQuery } from "@apollo/client";
import { Container, Button, Card } from "react-bootstrap";
import { QUERY_PROJECT_ID } from "../../utils/queries";

const ProjectLoad = ({currentProjectId}) => {
    let { loading, data } = useQuery(QUERY_PROJECT_ID, {
        variables: {projectId: currentProjectId},
    })

    if(loading) return <p>Loading...</p>
    else if(!loading && !data) return <p>Project Not Found...</p>

    const currentProject = data.projectID;

    return(
        <Container id="loaded-project">
            <Card className="text-center border-green">
                <Card.Img src={`./assets/images/${currentProject.thumbnail}`} alt="Preview failed to load"/>
                <Card.Title>{currentProject.title}</Card.Title>
                <Card.Footer>
                    <Button className="mx-1" variant={"success"} href={currentProject.repoURL}>Repo</Button>
                    <Button className="mx-1" variant={"success"} href={currentProject.projectURL}>Deployed Project</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ProjectLoad;