//packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
       message: 'Enter your github username (required)',
       validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('Please enter your github username');
          return false
        }
      }
      },
      {
        type: 'input',
        name: 'github',
       message: 'Enter link to github profile (required)',
       validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter link to your github profile');
          return false
        }
      }
      },
      {
        type: 'input',
        name: 'email',
       message: 'Enter your email address (required)',
       validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email');
          return false
        }
      }
      },
      {
        type: 'input',
        name: 'title',
        message: 'Enter the name of your project (required)',
        validate: projectInput => {
            if (projectInput) {
              return true;
            } else {
              console.log('Please enter your project name');
              return false
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (required)',
        validate: descrInput => {
            if (descrInput) {
              return true;
            } else {
              console.log('Please enter your project name');
              return false
            }
          }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions for installation',
        default: 'npm i'
      },
      {
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Is your project licensed?',
        default: false
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select license:',
        choices: ["MIT", "Apache 2.0", "BSD 3", "GPL 3.0"],
        when: (licenseConfirm) => {
            if (licenseConfirm) {
              return true;
            } else {
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use (required)',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please include instructions for application usage');
              return false
            }
        }
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Provide instructions for contribution to application (required)',
        validate: contributionInput => {
            if (contributionInput) {
              return true;
            } else {
              console.log('Please include contribution guidelines');
              return false
            }
          }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Enter tests to run for applications:',
        default: 'npm test'
    }
];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions)
//     .then(questions => {
//         const readmeFile = generateMarkdown(questions);
//     })
// }
// // Function call to initialize app
// init();




//MOCK DATA
const mockData = {
    username: 'rtanguyen',
    github: 'https://github.com/rtanguyen/README-generator',
    email: 'becki@gmail',
    title: 'READ ME GEN',
    description: 'GENERATES READ ME',
    installation: 'npm i',
    licenseConfirm: true,
    license: [ 'Apache 2.0' ],
    usage: 'BLAHBLAHBLAH',
    contribute: 'lsdkfjlsdkfjlsdkfjlsdfj',
    test: 'npm test'
}

function test() {
        const readmeFile = generateMarkdown(mockData);
        console.log(readmeFile)
    }

test();