const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Project {
        _id: ID
        title: String
        repoURL: String
        projectURL: String
        thumbnail: String
        description: String
        status: String
        tags: [String]
    }

    type Query {
        projects: [Project]
        projectID(projectId: ID): Project
    }
`;

module.exports = typeDefs;