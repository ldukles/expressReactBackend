// IMPORT DEPENDENCIES
const express = require('express');
const cors = require("cors");

// IMPORT JSON FILES
const projects = require("./projects.json")
const about = require("./about.json");

// CREATE APP OBJECT
const app = express();

// SET-UP MIDDLEWARE
app.use(cors());

// HOME ROUTE FOR TESTING APP
app.get("/", (req, res) => {
    res.send("Hello Darkness my old friend");
});


// ROUTE FOR RETRIEVING PROJECTS
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
})

// ROUTE FOR RETRIEVING ABOUT INFO
app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
})

// DECLARE A VARIABLE FOR PORT
const PORT = process.env.PORT || 4000;

// SERVER LISTENING
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));