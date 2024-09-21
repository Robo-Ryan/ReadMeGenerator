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
        name: 'name',
        message: 'What is your name?.'
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
        name: 'github',
        message: 'Please provide your GitHub project link.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.'
    }
    ];

// //FUNCTIONS
// //Prompt user for input
// const promptUser = () => {
//     return inquirer.prompt(questions)
// };

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
${response.description}

- [${response.title}](#${response.title})
	- [Installation](#installation)
	- [Usage](#usage)
	- [Contributions](#contributions)
	- [License](#license)
	- [Contact](#contact)
	- [Acknowledgments](#acknowledgments)

## Installation
git clone ${response.github}
cd ${response.title}

## Usage


## Contributions
Contributing
    1.	Fork the project
    2.	Create your feature branch (git checkout -b feature/featurename)
    3.	Commit your changes (git commit -m 'Added a feature')
    4.	Push to the branch (git push origin feature/featurename)
    5.	Open a pull request


## License
This is an ${response.license} - see the LICENSE file for details.

## Contact
Your name: ${response.name}
Your email: ${response.email}
Project Link: ${response.github}
`
  fs.writeFile(`readmeexample.md`, ReadMe, (err)=>
  err ? console.error(err) : console.log(`Success!`))
})

// //INITIALIZATION
console.log(colors.rainbow("Welcome")+colors.red(" to your ReadMe builder!"));
// init ();
