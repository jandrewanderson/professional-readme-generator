const inquirer = require('inquirer');
const fs = require('fs');
let img;

const licenseChoices = [
    {
        name: "Apache 2.0 License",
        url: "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
    },
    {
        name: "Boost Software License",
        url: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
    },
    {
        name: "BSD 3-Clause License",
        url: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
    },
    {
        name: "BSD 2-Clause License",
        url: "https://img.shields.io/badge/License-BSD_2--Clause-blue.svg"
    },
    {
        name: "Eclipse Public License 1.0",
        url: "https://img.shields.io/badge/License-EPL_1.0-red.svg"
    },
    {
        name: "GNU GPL v3",
        url: "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    {
        name: "GNU GPL v2",
        url: "https://img.shields.io/badge/License-GPL_v2-blue.svg"
    },
    {
        name: "GNU AGPL v3",
        url: "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
    },
    {
        name: "GNU LGPL v3",
        url: "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
    },
    {
        name: "IBM Public License Version 1.0",
        url: "https://img.shields.io/badge/License-IPL_1.0-blue.svg"
    },
    {
        name: "ISC License (ISC)",
        url: "https://img.shields.io/badge/License-ISC-blue.svg"
    },
    {
        name: "The MIT License",
        url: "https://img.shields.io/badge/License-MIT-yellow.svg"
    },
    {
        name: "Mozilla Public License 2.0",
        url: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
    },
    {
        name: "The Perl License",
        url: "https://img.shields.io/badge/License-Perl-0298c3.svg"
    },
    {
        name: "SIL Open Font License 1.1",
        url: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg"
    },
]

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectname',
    },
    {
      type: 'input',
      message: 'Give a description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe how to use this program.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Describe the steps for installation.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Give an account of all collaborators and resources.',
      name: 'credits',
    },
    {
      type: 'list',
      message: 'Which license would you like to include?',
      name: 'license',
      choices: licenseChoices
    },
    {
      type: 'input',
      message: 'Explain all tests that a user could do in your application.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Drop the link to your GitHub profile.',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    // setBadge(response);
    fs.writeFile('README2.md', 
    `
# ${response.projectname}

## Description

${response.description}

## Table of Contents
- [Intallation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## Credits

${response.credits}

## License

${response.license}

## Tests

${response.tests}

## Questions

If you have questions you can reach me with the following information:

[Link to my Github](${response.github})

Email: ${response.email}

---

`, (err) =>
err ? console.error(err) : console.log('README file created')
);
});

//function to set the badge for the license
// function setBadge(response) {
//     if (response === "Apache 2.0 License"){
//         img = "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
//     } else if (response === "Boost Software License"){
//         img = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
//     } else if (response === "BSD 3-Clause License"){
//         img = "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
//     } else if (response === "BSD 2-Clause License"){
//         img = "https://img.shields.io/badge/License-BSD_2--Clause-blue.svg"
//     } else if (response === "Eclipse Public License 1.0"){
//         img = "https://img.shields.io/badge/License-EPL_1.0-red.svg"
//     } else if (response === "GNU GPL v3"){
//         img = "https://img.shields.io/badge/License-GPLv3-blue.svg"
//     } else if (response === "GNU GPL v2"){
//         img = "https://img.shields.io/badge/License-GPL_v2-blue.svg"
//     } else if (response === "GNU AGPL v3"){
//         img = "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
//     } else if (response === "GNU LGPL v3"){
//         img = "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
//     } else if (response === "IBM Public License Version 1.0"){
//         img = "https://img.shields.io/badge/License-IPL_1.0-blue.svg"
//     } else if (response === "ISC License (ISC)"){
//         img = "https://img.shields.io/badge/License-ISC-blue.svg"
//     } else if (response === "The MIT License"){
//         img = "https://img.shields.io/badge/License-MIT-yellow.svg"
//     } else if (response === "Mozilla Public License 2.0"){
//         img = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
//     } else if (response === "The Perl License"){
//         img = "https://img.shields.io/badge/License-Perl-0298c3.svg"
//     } else if (response === "SIL Open Font License 1.1"){
//         img = "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg"
//     } 
// }
// add this under license ![License](${img})