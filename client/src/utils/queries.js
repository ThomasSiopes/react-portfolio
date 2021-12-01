import { gql } from "@apollo/client";

export const QUERY_PROJECT_ALL = gql`
    query getProjects {
        projects {
            _id
            title
            repoURL
            projectURL
            thumbnail
            description
            status
        }
    }
`;

export const QUERY_PROJECT_ID = gql`
    query getProjectID($projectId: ID!) {
        projectID(projectId: $projectId) {
            _id
            title
            repoURL
            projectURL
            thumbnail
            description
            status
        }
    }
`;