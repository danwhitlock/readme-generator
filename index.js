const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
"Please enter your github username",
"Please enter your email address",
"What is the title of this project?",
"Please enter a short description of the project",
"What license applies to this project?",
"How should any dependencies be installed?",
"How should any tests be run?",
"Please enter any special usage instructions for users",
"What does the user need to know about contributing to the repo?"
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        console.log('file created');
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'GPL', 'None'], 
        },
        {
            type: 'input',
            name: 'dependencies',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'instructions',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'contributions',
            message: questions[8],
        },
    ])
    .then((data) => {
        console.log(data);
        const fileName = "README.md";
        writeToFile(fileName, data);
    })
}

// function call to initialize program
init();
