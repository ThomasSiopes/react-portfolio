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
                {currentProject.thumbnail && <Card.Img src={`./assets/images/${currentProject.thumbnail}`} alt="Preview failed to load"/>}
                <Card.Title className="mt-2">{currentProject.title}</Card.Title>
                {currentProject.description && <Card.Body className="pt-1">{currentProject.description}</Card.Body>}
                <Card.Footer>
                    {currentProject.repoURL && <Button className="mx-1" variant={"success"} href={currentProject.repoURL}>Repo</Button>}
                    {currentProject.projectURL && <Button className="mx-1" variant={"success"} href={currentProject.projectURL}>Deployed Project</Button>}
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default ProjectLoad;