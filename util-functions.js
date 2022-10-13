

const inquirer = require('inquirer');

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

module.exports = {getManagerInfo, getEngineerInfo, getInternInfo};