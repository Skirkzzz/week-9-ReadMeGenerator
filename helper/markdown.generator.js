const inquirer = require('inquirer')

inquirer
.createPromptModule([
  {
    type: 'input',
    name: 'name_your_application',
    message: 'What is the name of your project?'
  }
  {
    type: 'input',
    name: 'application_purpose',
    message:'What is the purpose of the application?'
},
  {
    type: 'input',
    name: 'describe_your_project',
    message: 'Give your project a brief description'
  }
  {
    type: 'input',
    name: 'deployment',
    message: 'Give brief description on how to deploy your application'
  }
  {
    type: 'input',
    name: 'testing',
    message:'describe how to test the application:'
},
  {
    type: 'list',
    name: 'licence',
    message:'select a license:',
    choices: [ "MIT License", "Apache License 2.0", "GNU General Public License v2.0","GNU General Public License v3.0","ISC License"]
},
{
  type: 'input',
  name: 'contact_email',
  message:'Type your email for questions:'
},
{
  type: 'input',
  name: 'github',
  message:'Type Github username for Questions:'
},
])
.then((response) => {
  licenseSelect (response)
  htmlRender(response)
  })

  





/*function generateMarkdown(userResponses) {
  // Generate Table of Contents conditionally based on userResponses
  let draftToC = `
## Table of Contents
  `;

  if (userResponses.description !== "") {
    draftToC += `
  * [Description](#description)`;
  }

  if (userResponses.installation !== "") {
    draftToC += `
  * [Installation](#installation)`;
  }

  if (userResponses.usage !== "") {
    draftToC += `
  * [Usage](#usage)`;
  }

  if (userResponses.license !== "") {
    draftToC += `
  * [License](#license)`;
  }

  if (userResponses.contributing !== "") {
    draftToC += `
  * [Contributing](#contributing)`;
  }

  if (userResponses.tests !== "") {
    draftToC += `
  * [Tests](#tests)`;
  }

  if (userResponses.questions !== "") {
    draftToC += `
  * [Questions](#questions)`;
  }

  // Generate markdown for the top required portions of the README
  let draftMarkdown = `
# ${userResponses.title}

## Description 

*The what, why, and how:* 

${userResponses.description}
    `;

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;

  // Optional Installation section
  if (userResponses.installation !== "") {
    draftMarkdown += `
  
## Installation

*Steps required to install project and how to get the development environment running:*

${userResponses.installation}`;
  }

  // Optional Usage section
  if (userResponses.usage !== "") {
    draftMarkdown += `

## Usage 

*Instructions and examples for use:*

${userResponses.usage}`;
  }

  // Optional Contributing section
  if (userResponses.contributing !== "") {
    draftMarkdown += `
  
## Contributing

*If you would like to contribute it, you can follow these guidelines for how to do so.*

${userResponses.contributing}`;
  }

  // Optional Tests section
  if (userResponses.tests !== "") {
    draftMarkdown += `
  
## Tests

*Tests for application and how to run them:*

${userResponses.tests}`;
  }

  // License section is required
  draftMarkdown += `
  
## License

${userResponses.license}
    `;

  // Questions / About Developer section
  let draftDev = `
---

## Questions?

For any questions, please contact me with the information below:

GitHub: [@${userResponses.github}](https://github.com/${userResponses.github})
    `;

  // If GitHub email is not null, add to Developer section
  if (userResponses.email !== null) {
    draftDev += `
  
Email: ${userResponses.email}
  
    `;
  }

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
}

module.exports = generateMarkdown;
