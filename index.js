const inquirer = require('inquirer');

//const fs = require('fs');
// const generatePage = require('./src/homepage-templ.js');
// const homepageHTML = generateHomepage();
// fs.writeFileSync(')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


/*
--------------------------New Task------------------------------

1.create Manager object()
-collectName()
-collectID()
-collectEmail()
-collectNumber()

2.prompt addWhat()
-if engineer
--collect() - engineers stuffs: collectName() ID() email() github()
-if intern
--collect() - intern stuffs: collectName() ID() email() school()

3.ask if add another, or done
-if another, prompt addWhat()
4.if done, print HTML stuffs

--------------------------End Task------------------------------
*/

//const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);


const collectManagerInfo = function() {
    //const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);

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
            message: 'What is your 4-digits employee ID?',
            validate: employeeIDInput => {
                if(employeeIDInput == num) {
                    return true;
                } else {
                    console.log('Please enter valid ID');
                    return false;
                }
            }
        }).then((answer) => {
            this.employeeID = answer.employeeID;
            console.log(this.employeeID);
        }).then(() => {
            const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
            console.log(manager);
        })
    })
    
}

collectManagerInfo()
    


/*
const collectInfo = function() {
    const employee = new Employee();

    inquirer.prompt(
        {   type: 'input',
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
        }).then(({ name }) => {
            this.name = name; 
            console.log(`Employee's name is ${this.name}`);
    
            inquirer.prompt(
                {   type: 'input',
                    name: 'email',
                    message: 'Please enter your email address',
                    validate: emailInput => {
                        const isEmail = require('sane-email-validation');
                        if(isEmail(emailInput)) {
                            return true;
                        } else {
                            console.log('Please enter the valid email address');
                            return false;
                        }
                    }
                }).then(({ email }) => {
                    this.email = email;
                    console.log(`Employee's email is ${email}`);


                    inquirer.prompt(
                        {   type: 'input',
                            name: 'employeeID',
                            message: 'Please enter your 4-digits ID',
                            validation: employeeIDInput => {
                                
                            }

                        })


                    inquirer.prompt(
                        {   type: 'checkbox',
                            name: 'role',
                            message: 'What is your occupation?',
                            choices: ['Manager', 'Engineer', 'Intern'],
                            validation: choice => {
                                if(!choice) {
                                    console.log('You need to make a selection');
                                    return false;               
                                } else {
                                    return true;
                                    
                                } 
                            }
                        }).then(({role}) => {
                            this.role = role;
                            if(role = 'Manager') {
                                console.log('manager');
                                
                            } else if(role = 'Engineer') {
                                console.log(`this employee is a ${role}`);
                                
                            } else if(role = 'Intern') {
                                console.log(`this employee is ${role}`);
                                return role;
                            }
                        });
    
                });
        });
    
    
}
*/








