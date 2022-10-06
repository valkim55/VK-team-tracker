class Intern {
    constructor(name, employeeID, email, school) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.school = school;
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
        this.email = 'internsnorlax@gmail.com';
        const isEmail = require('sane-email-validation');
        if(isEmail(this.email)) {
            return true;
            //console.log(`${this.email} is valid`);
        } else {
            return false;
            //console.log(`${this.email} is not an email`);
        }
    }

    getSchool() {
        this.school = 'String';
        return this.school;
    }

    getRole() {
        this.role = '';
        const roles = ['Manager', 'Engineer', 'Intern'];
        const [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Intern'] = roles;
        this.role = isIntern;
        return this.role;
    }

}

module.exports = Intern;