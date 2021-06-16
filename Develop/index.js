// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [
//     "What is your name?",
//     "What program are you using?"
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // file = readme
    // data = content
    // var stringQuestions;

    // for(var i =0; i < data.length; i++) {
    //    stringQuestions += '\n' + data[i]; 
    // }

    fs.writeFile(fileName, data, function(err){

        if(err) {
            console.log(err);
        }
        console.log('success');

    })
}

// TODO: Create a function to initialize app
function init() {
   //writeToFile('readme.md', 'questions');
   inquirer
  .prompt([
    {
        name: 'firstQ',
        type: 'input',
        message: 'What is your name?',
    },
    {
        name:
        type:

    }
  ])
  .then((answers) => {
    writeToFile('readme.md', answers.firstQ)
    writeToFile

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
