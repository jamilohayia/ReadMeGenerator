const fs = require('fs');
const inquirer = require("inquirer");
const generatedMd = require("./utils/generateMarkdown.js");
const { type } = require('os');


const questions = [

    {
        message: "What is the name of the project?",
        type: "input",
        name: "title"
    },
    {
        message: "Provide a description of the project.",
        type: "input",
        name: "description"
    },
    {
        message: "Please enter the table of contents.",
        type: "input",
        name: "table of contents"
    },
    {
        message: "What are the installation instructions?",
        type: "input",
        name: "instructions"
    },
    {
        message: "How will the project be used?",
        type: "input",
        name: "usage"
    },
    {
        message: "Which license/s do you plan to use?",
        type: "input",
        name: "license"
    },
    {
        message: "Please enter your GitHub username",
        type: "input",
        name: "username"
    },
    {
        message: "Please enter your GitHub username",
        type: "input",
        name: "username"
    },


];

function writeToFile(fileName, data) {
}

function init() {

}

init();
