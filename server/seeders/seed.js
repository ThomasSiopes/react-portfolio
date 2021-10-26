const db = require("../config/connection");
const { Project } = require("../models");
const projectSeeds = require("./projectSeeds.json");

db.once("open", async () => {
    try {
        await Project.deleteMany({});
        
        await Project.create(projectSeeds);

    } catch(err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Seed complete");
    process.exit(0);
});