//const fs = require('fs');


const generatePage = require('./dist/generate-html');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// array to store employee objects
const teamMembers = [];

// array of questions to prompt the manager
/*
const promptForManager = () => {
    return inquirer.prompt(

    )
} 
*/




[
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your name');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'employeeID',
        message: 'Please enter your employee ID',
        validate: employeeIDInput => {
            if(Number(employeeIDInput)) {
                return true;
            } else {
                console.log('Please enter valid ID');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: emailInput => {
            const isEmail = require('sane-email-validation');
            if(isEmail(emailInput)) {
                return true;
            } else {
                console.log('Please enter valid email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter your office number',
        validate: officeNumberInput => {
            if(officeNumberInput) {
                return true;
            } else {
                console.log('Please enter valid office phone number');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        default: true
    },
    {
        type: 'list', 
        name: 'addEmployee',
        message: "Please select employee's title",
        choices: [Intern, Engineer]        
    }
];


// array of questions to prompt for adding an intern
const internQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "Please enter intern's name",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the name");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'employeeID',
        message: "Please enter intern's employee ID",
        validate: employeeIDInput => {
            if(Number(employeeIDInput)) {
                return true;
            } else {
                console.log('Please enter valid ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter intern's email",
        validate: emailInput => {
            const isEmail = require('sane-email-validation');
            if(isEmail(emailInput)) {
                return true;
            } else {
                console.log('Please enter valid email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter intern's school name",
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            } else {
                console.log("Please enter a valid school name");
                return false;
            }
        }
    },
];


const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "Please enter engineer's name",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the name");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'employeeID',
        message: "Please enter engineer's employee ID",
        validate: employeeIDInput => {
            if(Number(employeeIDInput)) {
                return true;
            } else {
                console.log('Please enter valid ID');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter engineer's email",
        validate: emailInput => {
            const isEmail = require('sane-email-validation');
            if(isEmail(emailInput)) {
                return true;
            } else {
                console.log('Please enter valid email');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter engineer's GitHub username",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter a valid username");
                return false;
            }
        }
    },
];


const promptForManager = managerQuestions => {
    inquirer.prompt(([]) => {
        this.name = answer.name;
    this.employeeID = answer.employeeID;
    this.email = answer.email;
    this.officeNumber = answer.officeNumber;
    const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
    console.log(manager);
    teamMembers.push(manager);
    console.log(teamMembers);
    })

    
}


const promptForIntern = () => {
    console.log(`=== Adding a new intern to the team! ===`);
    return inquirer.prompt(internQuestions);
}

const promptForEngineer = () => {
    console.log(`=== Adding a new engineer to the team! ===`);
}





promptForManager()
    .then((manager) => {generatePage(manager)})
    .then(promptForEmployee)
    .catch(err => {
        console.log(err)
    })
    

    
    









