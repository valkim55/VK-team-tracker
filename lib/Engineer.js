const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, employeeID, email, github) {
        // inherit properties from parent object Employee
        super(name, employeeID, email, github);
        // github is unique to engineer object
        this.github = github;
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