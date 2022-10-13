
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');
const write = require('write');
const generatePage = require('./src/page-template');
const generateEngineer = require('./src/page-template');
const generateIntern = require('./src/page-template');
const {getManagerInfo, getEngineerInfo, getInternInfo} = require('./utils');


const internsArray = [];
const engineersArray = [];

getManagerInfo().then(answers => { // doesn't have to be named 'answers' - just easier to track
    this.name = answers.name;
    this.employeeID = answers.employeeID;
    this.email = answers.email;
    this.officeNumber = answers.officeNumber;
    const manager = new Manager(this.name, this.employeeID, this.email, this.officeNumber);
    console.log(manager);
    const pageHTML = generatePage(manager);
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
            engineersArray.push(engineer);
            console.log(engineersArray);
            const writeEngineer = generateEngineer(engineersArray);
            write('./src/index.html', writeEngineer, err => {
                if(err) throw err;
                console.log(`couldn't write engineer ${err}`);
            })
            if(engineerAnswers.addEmployee == 'engineer') {
                return getEngineerInfo();
            } else if(engineerAnswers.addEmployee == 'intern') {
                return getInternInfo();
            } else {
                console.log(engineersArray);
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
            internsArray.push(intern);
            console.log(internsArray);
            if(internAnswers.addEmployee == 'engineer') {
                return getEngineerInfo();
            } else if(internAnswers.addEmployee =='intern') {
                return getInternInfo();
            } else {
                console.log(internsArray);
                return;
            }
        })
    } else {
        return;
    }
   
});