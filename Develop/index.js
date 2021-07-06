// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


//Questions for user
let questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },{
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description'
    },{
        type: 'input',
        message: 'What install instructions should the user follow?',
        name: 'installation'
    },{
        type: 'list',
        name: 'license',
        message: 'Select which license you would like to use.',
        choices: [
            'APACHE2.0',
            'BSD3',
            'GPL3.0',
            'MIT',
            'None',
        ],
    },{
        type: 'input',
        message: 'Enter your github username.',
        name: 'github',
    },{
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },{
        type: 'input',
        message: 'Give test instructions',
        name: 'tests',
    },{
        type: 'input',
        message: 'How is this project used',
        name: 'usage'
    },{
        type: 'input',
        message: 'How would you contribute to this project',
        name: 'contributing',
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data, err => {
        if(err) throw err;
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(userAnswers =>
     {
        writeToFile("README.md", generateMarkdown(userAnswers))
        console.log('README Complete')
     });
};

// Function call to initialize app
init();