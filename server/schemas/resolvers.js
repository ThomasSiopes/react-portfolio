const { AuthenticationError } = require("apollo-server-express");
const { Project } = require("../models");

const resolvers = {
    Query: {
        projects: async () => {
            return Project.find();
        },
        projectID: async (parent, { projectId }) => {
            return Project.findOne({ _id: projectId });
        },
    }
}

module.exports = resolvers