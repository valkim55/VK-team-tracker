
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const {generatePage, generateEngineer, generateIntern} = require('./src/page-template');
const {getManagerInfo, getEngineerInfo, getInternInfo} = require('./util-functions');


const internsArray = [];
const engineersArray = [];

getManagerInfo().then(answers => { // doesn't have to be named 'answers' - just easier to track
    this.name = answers.name;
    this.employeeID = answers.employeeID;
    this.email = answers.email;
    this.officeNumber = answers.officeNumber;
    const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
    console.log(manager);
    
    fs.writeFile('./dist/index.html', generatePage(manager), err => {
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

            // if there's no engineer with this information in the array already then push newly created object into the array
            if(!engineersArray.engineer) {
                engineersArray.push(engineer);
            }
            console.log(engineersArray);

            // using appendFile method to add information into an existing file
            fs.appendFile('./dist/index.html', generateEngineer(engineersArray), err => {
                if(err) throw err;
                console.log('engineer added to the page!');
            });

            if(engineerAnswers.addEmployee == 'engineer') {
                return new Promise(resolve => {
                    resolve(getEngineerInfo());
                }) 
            } else if(engineerAnswers.addEmployee == 'intern') {
                return new Promise(resolve => {
                    resolve(getInternInfo());
                }) 
            }; 
            
            
        });
    } else if(answers.addEmployee == 'intern') {
        getInternInfo().then(internAnswers => {
            console.log(internAnswers);
            this.name = internAnswers.name;
            this.employeeID = internAnswers.employeeID;
            this.email = internAnswers.email;
            this.school = internAnswers.school;
            const intern = new Intern(this.name, this.employeeID, this.email, this.school);
            
            if(!internsArray.intern) {
                internsArray.push(intern);
            }
            console.log(internsArray);

            fs.appendFile('./dist/index.html', generateIntern(internsArray), err => {
                if(err) throw err;
                console.log('intern has been added to the page!');
            });

            if(internAnswers.addEmployee == 'engineer') {
                return new Promise(resolve => {
                    resolve(getEngineerInfo());
                })
            } else if(internAnswers.addEmployee =='intern') {
                return new Promise(resolve => {
                    resolve(getInternInfo());
                })
            };
        })
    };   
});