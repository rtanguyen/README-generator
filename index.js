//packages for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
var readmeData = {}

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
       message: 'Enter your github username',
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
       message: 'Enter link to github profile',
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
       message: 'Enter your email address',
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
        message: 'Enter the name of your project',
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
        message: 'Provide a description of the project',
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
        default: true
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Select license:',
        choices: ["MIT", "Apache2.0", "BSD3", "GPL3.0"],
        when: ({licenseConfirm }) => {
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
        message: 'Provide instructions and examples for use',
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
        message: 'Provide instructions for contribution to application',
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
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README created!');
    })
}

// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('./README.md', generateMarkdown(data));
    });
}

// // Function call to initialize app
init()


// //MOCK DATA
// const mockData = {
//     username: 'rtanguyen',
//     github: 'https://github.com/rtanguyen',
//     email: 'rtanguyen@gmail.com',
//     title: 'README-generator',
//     description: 'Allows users to quickly and easily generate a README file by using a command-line application.',
//     installation: 'npm i',
//     licenseConfirm: true,
//     license: [ 'Apache 2.0' ],
//     usage: 'Clone repo, install packages, have fun',
//     contribute: 'Please contact me if you would like to contribute to this project, but please don't.',
//     test: 'npm test'
// }

// function test() {
//         console.log(readmeFile)
//     }

// function writeToFile(fileName, data) {
//     const readmeFile = generateMarkdown(mockData);
//     fs.writeFile('./README.md', readmeFile, err => {
//         if (err) throw err;
//         console.log('README created!');
//     })
// }
