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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
