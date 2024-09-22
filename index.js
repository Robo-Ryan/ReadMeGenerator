//DEPENDENCIES
import colors from 'colors';
import inquirer from 'inquirer';
import fs from 'fs';

//DATA
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions?.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?.'
    },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Please provide installation instructions for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Please provide usage information for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'Please provide contribution guidelines for your project.'
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Please provide test instructions for your project.'
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Please provide your GitHub username.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub repository link.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    },{
        type: 'input',
        name: 'name',
        message: 'What is your name?.'
    },
    ];

// //FUNCTIONS
// //Prompt user for input
// const promptUser = () => {
//     return inquirer.prompt(questions)
// };
const pickBadge = (license) => {
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'GNU GPLv3':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'Apache 2.0':
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'ISC':
            return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
        case 'None':
            return '';
    }
}

// handle answer/response
// const handleAnswer = function(response) {
//     return inquirer.then(response)
// }
// write response to readmefile
// //Generate ReadMe file
// const generateHTML
// //Write ReadMe file
// const writeHTMLToFILE


// //UI
//prompt the user
inquirer
    .prompt(questions)
    .then((response) => {
      let ReadMe = 
`
# ${response.title}
${pickBadge(response.license)}

## Description
${response.description}

## Table of Contents
- [${response.title}](#${response.title})
	- [Installation](#installation)
	- [Usage](#usage)
	- [License](#license)
    - [Contributing](#contributing)
	- [Tests](#tests)
	- [Questions](#acknowledgments)

## Installation
Find the repository here ${response.github}

## Usage


## License
This is an ${response.license} - see the LICENSE file for details.

## Contributing
Contributing
    1.	Fork the project
    2.	Create your feature branch (git checkout -b feature/featurename)
    3.	Commit your changes (git commit -m 'Added a feature')
    4.	Push to the branch (git push origin feature/featurename)
    5.	Open a pull request  

## Tests

## Questions
If you have any questions, please contact me at ${response.githubName} on GitHub or email me at Your email: ${response.email}.
`
  fs.writeFile(`ReadMe.md`, ReadMe, (err)=>
  err ? console.error(err) : console.log(`Success!`))
})

// //INITIALIZATION
console.log(colors.rainbow("Welcome")+colors.red(" to your ReadMe builder!"));
// init ();
