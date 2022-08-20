// import required packages
// Use of file system to write the new mark-down component
const fs = require("fs");
// Bring in the node file object inquirer
const inquirer = require("inquirer");

// import helper functions
const generateMarkDown = require("./helper/markdown.generator.js");

// create Inquirer prompts to ask user questions
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
    default: "Project Title",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
    default: "Project Description",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message:
      "If applicable, describe the steps required to install your project for the Installation section.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples of your project in use for the Usage section.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "If applicable, provide guidelines on how other developers can contribute to your project.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "If applicable, provide any tests written for your application and provide examples on how to run them.",
    name: "tests",
  },
  {
    type: "list",
    message: "Choose a license for your project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is your Github username? (No @ needed)",
    name: "github",
    default: "Github Username",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid Github username is required.");
      }
      return true;
    },
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

/**
 * function to write README file
 */
function writeReadme(filename, data) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote to " + filename);
  });
}

/**
 * function to initialize program
 */
async function main() {
  const filename = "README.md";
  const userResponses = await inquirer.prompt(questions);
  console.log("Thank you for your answers!");

  const markdown = generateMarkDown(userResponses);

  writeReadme(filename, markdown);
}

main();
