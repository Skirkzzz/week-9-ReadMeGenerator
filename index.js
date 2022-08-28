const inquirer = require("inquirer");

inquirer
  .prompt([
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
${response.description}
    
## Table of Contents
- [Deployment](#deployment)
- [Testing](#testing)
- [Licence](#licence)
- [Contact](#contact)
- [Github](#github)

    
    
## Deployment
${response.deployment}.
## Testing
${response.testing}.
## Licence
${response.licence}.
## Contact
${response.contact}.
## Github 
${response.github}.
    
## Questions
For further question, please visit https://github.com/${response.github}, or contact ${response.contact}.`;

  const fs = require("fs");
  fs.writeFile("README.md", readMe, (err) =>
    err ? console.error(err) : console.log("Your README has been generated")
  );
};

let licencedescription = "";
let licenceImg = "";

const licenseSelect = (response) => {
  if (response.licence === "Apache License 2.0") {
    licenceImg =
      "![license](https://img.shields.io/badge/license-Apache%20License%202.0-green)";
  }

  if (response.licence === "GNU General Public License v2.0") {
    licenceImg =
      "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v2.0-green)";
  }

  if (response.licence === "GNU General Public License v3.0") {
    licenceImg =
      "![license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green)";
  }

  if (response.licence === "ISC License") {
    licenceImg =
      "![license](https://img.shields.io/badge/license-ISC%20license-green)";
  }

  if (response.licence === "MIT License") {
    licenceImg =
      "![license](https://img.shields.io/badge/license-MLT%20license-green)";
  }

  licenceDescription = "Licenced by " + response.licence;
};
