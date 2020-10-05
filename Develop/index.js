const fs = require('fs');
const inquirer = require("inquirer");
// const generatedMd = require("./utils/generateMarkdown.js");
// const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [

    {
        message: "What is your Github username?",
        type: "input",
        name: "username"
    },
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
        message: "Who else is contributing to this project?",
        type: "input",
        name: "contributing"
    },
    {
        message: "What tests do you plan to run?",
        type: "input",
        name: "tests"
    },
    {
        message: "What is your email address?",
        type: "input",
        name: "email"   
    },

];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data); 
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile("README.md", generateMarkdown.generateMarkdown(answers));
    });

}

init();
