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
    }
});

const Project = model("Project", projectSchema);

module.exports = Project;