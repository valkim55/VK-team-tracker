const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const generatePage = require('./src/page-template');
/*
const pageHTML = generatePage();

fs.writeFile('index.html', pageHTML, err => {
    if(err) throw err;
    console.log('HTML created!')
});
*/

const teamMembers = [];

const getManagerInfo = () => {

    return inquirer.prompt([
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
                if(Number(officeNumberInput)) {
                    return true;
                } else {
                    console.log('Please enter valid office phone number');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: true
        },
        {
            type: 'list', 
            name: 'addEmployee',
            message: "Please select team member's title",
            choices: ['intern', 'engineer']        
        }
    ])
};


const getEngineerInfo = () => {
    console.log(`===== Add an engineer to your team! =====`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name",
            validate: nameInput => {
                if(!nameInput) {                    
                    console.log("Please enter the name");
                    return false;
                } else {
                    return true;
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
                    console.log('Please enter valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's GitHub username",
            validate: githubInput => {
                if(!githubInput) {
                    console.log('Please enter valid username');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another member?',
            default: false
        }, 
        {
            type: 'list', 
            name: 'addEmployee',
            message: "Please select team member's title",
            choices: ['intern', 'engineer']        
        }
    ])
}


const getInternInfo = () => {
    console.log(`===== Add an intern to your team! =====`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name",
            validate: nameInput => {
                if(!nameInput) {                    
                    console.log("Please enter the name");
                    return false;
                } else {
                    return true;
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
                    console.log('Please enter valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school name",
            validate: schoolInput => {
                if(!schoolInput) {
                    console.log('Please enter valid school name');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another member?',
            default: false
        }, 
        {
            type: 'list', 
            name: 'addEmployee',
            message: "Please select team member's title",
            choices: ['intern', 'engineer']        
        }
    ])
}

getManagerInfo().then(answers => { // doesn't have to be named 'answers' - just easier to track
    this.name = answers.name;
    this.employeeID = answers.employeeID;
    this.email = answers.email;
    this.officeNumber = answers.officeNumber;
    const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
    teamMembers.push(manager);
    console.log(manager);
    const pageHTML = generatePage(teamMembersData);
    fs.writeFile('./src/index.html', pageHTML, err => {
        if(err) throw err;
        console.log('HTML created!')
    });
    if(answers.addEmployee == 'engineer') {
        getEngineerInfo().then(engineerAnswers => {
            this.name = engineerAnswers.name;
            this.employeeID = engineerAnswers.employeeID;
            this.email = engineerAnswers.email;
            this.github = engineerAnswers.github;
            const engineer = new Engineer(this.name, this.employeeID, this.email, this.github);
            teamMembers.push(engineer);
            console.log(teamMembers);
            if(engineerAnswers.addEmployee = 'engineer') {
                return getEngineerInfo();
            } else if(engineerAnswers.addEmployee = 'intern') {
                return getInternInfo();
            } else {
                console.log(teamMembers);
                return;
            }
        });
    } else if(answers.addEmployee == 'intern') {
        getInternInfo().then(internAnswers => {
            console.log(internAnswers);
            this.name = internAnswers.name;
            this.employeeID = internAnswers.employeeID;
            this.email = internAnswers.email;
            this.school = internAnswers.school;
            const intern = new Intern(this.name, this.employeeID, this.email, this.school);
            teamMembers.push(intern);
            console.log(teamMembers);
            if(internAnswers.addEmployee = 'engineer') {
                return getEngineerInfo();
            } else if(internAnswers.addEmployee = 'intern') {
                return getInternInfo();
            } else {
                console.log(teamMembers);
                return;
            }
        })
    } else {
        return;
    }
});