const inquirer = require('inquirer');

//const fs = require('fs');
// const generatePage = require('./src/homepage-templ.js');
// const homepageHTML = generateHomepage();
// fs.writeFileSync(')

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// now that all employee objects are in place we can prompt the user for information to create an instance of employee object
// once we get to role prompt, we will check for the type of role and place the object into the corresponding html section
const collectInfo = function() {
    const employee = new Employee();

    inquirer.prompt(
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ).then(({ name }) => {
        this.name = name; //  getName etc. will be used to feed the data to HTML later
        console.info(name);

        inquirer.prompt(
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address'
            }
        ).then(({ email }) => {
            this.email = email;
            console.log(email);

            inquirer.prompt(
                {
                    type: 'checkbox',
                    name: 'role',
                    message: 'What is your occupation?',
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ).then(({role}) => {
                this.role = role;
                console.log(role);
                console.log(this.employee);
            })
            
        })
        
    })
    
        
}

collectInfo(Employee);
//console.log(Employee);