// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is  the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project?"

    },
    {
        type: "input",
        name: "installation",
        message: "Write an Installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how this will be used.",

    },
    {
        type: "input",
        name: "license",
        message:"What kind of license will you use?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are your contribution guidelines?",

    },
    {
        type:"input",
        name:"test",
        message: "What are your test instructions?",
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub name?",
    },
    {
        type:"input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) console.log(err);
        console.log('File created with content passed!');
      });
}

function content(a, b, c, d, e, f, g, h, i) {
    return `# ${a} 
    
    # Table of Content: 
    -[Description](#description)
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contribution Guidelines](#contribution)
    -[Test](#test)
    -[Questions](#question)
    
    ## Description: ${b}

    ## Installation: ${c}

    ## Usage: ${d}

    ## License: ${e}

    ## Contribution: ${f}

    ## Test: ${g}

    ## Question:

    For any questions about my README.md Generator you can go to my Github page at the following link:
    [Github Profile](https://github.com/${h})
     
    For additional questions please reach out to my email: ${i}`;
};

// TODO: Create a function to initialize app
function init() {
    
    inquirer
        .prompt(questions)
        .then(answers => {
            const {title, description, installation, usage, license, contribution, test, Github, email,} = answers
            writeToFile("Readme.md", content(title, description, installation, usage, license, contribution, test, Github, email));
            // Use user feedback for... whatever!!
        })
        .catch(error => {
            console.log(error)
        });
}

// Function call to initialize app
init();
