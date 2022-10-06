class Engineer {
    constructor(name, employeeID, email, github) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.github = github;
    }

    getName() {
        this.name = 'String';
        return this.name;
    }

    getID() {
        this.employeeID = Math.floor(Math.random() * 999 + 1000);
        return this.employeeID;
    }

    getEmail() {
        this.email = 'psyduck.engineer@gmail.com';
        const isEmail = require('sane-email-validation');
        if(isEmail(this.email)) {
            return true;
            //console.log(`${this.email} is valid`);
        } else {
            return false;
            //console.log(`${this.email} is not an email`);
        }
    }

    getRole() {
        this.role = '';
        const roles = ['Manager', 'Engineer', 'Intern'];
        const [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Intern'] = roles;
        this.role = isEngineer;
        return this.role;
    }

    getGithub() {
        this.github = 'String';
        return this.github;
    }
}


module.exports = Engineer;