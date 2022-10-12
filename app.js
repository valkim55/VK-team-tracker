const inquirer = require('inquirer');

const writeFile = require('./dist/generate-html');
const generatePage = require('./src/homepage-template.js');
// const homepageHTML = generateHomepage();
// fs.writeFileSync(')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// array to store employee objects
const teamMembers = [];

const promptForManager = function() {
    
    inquirer.prompt({
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
    }).then((answer) => {
        this.name = answer.name;
        console.log(this.name);

        inquirer.prompt({
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
        }).then((answer) => {
            this.employeeID = answer.employeeID;
            console.log(this.employeeID);

            inquirer.prompt({
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
            }).then((answer) => {
                this.email = answer.email;
                console.log(this.email);

                inquirer.prompt({
                    type: 'input',
                    name: 'officeNumber',
                    message: 'Please enter your office number',
                    validate: officeNumberInput => {
                        const checkNumber = require('validate-phone-number-node-js');
                        if(checkNumber.validate(officeNumberInput)) {
                            return true;
                        } else {
                            console.log('Please enter valid office phone number');
                            return false;
                        }
                    }
                }).then((answer) => {
                    this.officeNumber = answer.officeNumber;
                    console.log(this.officeNumber);
                }).then(() => {
                    const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
                    teamMembers.push(manager);
                    console.log(teamMembers) ;
                })
            })
        })
    })
}

const promptForIntern = (answers) => {
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: "Please enter the name of intern's school",
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            } else {
                console.log("Please enter the name of the school");
                return false;
            }
        }
    }).then((answers) => {
        this.name = answers.name;
        this.employeeID = answers.employeeID;
        this.email = answers.email;
        this.school = answers.school;
        console.log(this.school);
    }).then(() => {
        const intern = new Intern(this.name, this.employeeID, this.email, this.school);
        teamMembers.push(intern);
        console.log(teamMembers);
    })
}

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter employee's name",
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
        message: "Please enter employee's ID",
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
        message: "Please enter employee's email",
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
        name: 'employee',
        message: "Please enter employee's title: Engineer or Intern?",
        validate: employeeInput => {
            if(employeeInput = 'Intern') {
                return promptForIntern(answers);
            } else if(employeeInput = 'Engineer') {
                return promptForEngineer();
            } else {
                console.log("Please provide a valid response");
            }
        }
    },
];


const promptForEmployee = () => inquirer.prompt(employeeQuestions);





promptForManager()
    .then(promptForEmployee())
    .catch(err => {
        console.log(err)
    });

module.exports = app;
    









