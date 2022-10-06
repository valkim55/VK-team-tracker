const inquirer = require('inquirer');

//const fs = require('fs');
// const generatePage = require('./src/homepage-templ.js');
// const homepageHTML = generateHomepage();
// fs.writeFileSync(')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');


const collectInfo = function() {
    const employee = new Employee();

    inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ).then(({ name }) => {
        this.employee.getName(name);
        console.log(this.employee.name);

        inquirer.prompt(
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email'
            }
        ).then(({ email }) => {
            this.employee.getEmail(email);
            console.log(this.employee.email);

            inquirer.prompt(
                {
                    type: 'input',
                    name: 'role',
                    message: 'What is your occupation?',
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ).then(({role}) => {

                this.employee.getRole(role);
                console.log(this.employee.role)
            })
            
        })
        
    })
    
        
}


collectInfo();