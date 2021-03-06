const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    repoURL: { 
        type: String,
    },
    projectURL: {
        type: String,
    },
    thumbnail: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    tags: [
        {
            type: String
        }
    ]
});

const Project = model("Project", projectSchema);

module.exports = Project;