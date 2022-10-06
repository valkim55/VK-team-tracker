//const { getRandomValues } = require('crypto');

class Employee {
    constructor(name, employeeID, email) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
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
        this.email = 'employee@gmail.com';
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
        this.role = 'Employee';
        return this.role;
    }
}

module.exports = Employee;

