const inquirer = require("inquirer");

inquirer
  .createPromptModule([
    {
      type: "input",
      name: "name_your_application",
      message: "What is the name of your application?",
    },
    {
      type: "input",
      name: "description",
      message: "Give your project a brief description",
    },
    {
      type: "input",
      name: "deployment",
      message: "Give brief description on how to deploy your application",
    },
    {
      type: "input",
      name: "testing",
      message: "describe how to test the application:",
    },
    {
      type: "list",
      name: "licence",
      message: "select a license:",
      choices: [
        "MIT License",
        "Apache License 2.0",
        "GNU General Public License v2.0",
        "GNU General Public License v3.0",
        "ISC License",
      ],
    },
    {
      type: "input",
      name: "contact",
      message: "Type your email for questions:",
    },
    {
      type: "input",
      name: "github",
      message: "Type Github username for Questions:",
    },
  ])
  .then((response) => {
    licenseSelect(response);
    renderHtml(response);
  });

const renderHtml = (response) => {
  readMe = `# ${response.name_your_application}
    

        
## Description
${response.describe_your_project}
    
## Table of Contents
- [deployment](#deployment)
- [testing](#testing)
- [licence](#licence)
- [contact](#contact)
- [github](#github)

    
    
## deployment
${response.deployment}.
## testing
${response.testing}.
## licence
${licence}.
## contact
${response.contact}.
## github 
${response.github}.
    
## Questions
For further question, please visit https://github.com/${response.github}, or contact ${response.contact}.`;

  const fs = require("fs");
  fs.writeFile("README.md", readMe, (err) =>
    err ? console.error(err) : console.log("Your README has been generated")
  );
};
