class Manager {
    constructor(name, employeeID, email, officeNumber) {
        this.name = name;
        this.employeeID = employeeID;
        this.email = email;
        this.officeNumber = officeNumber;
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
        this.email = 'potato123@gmail.com';
        const isEmail = require('sane-email-validation');
        if(isEmail(this.email)) {
            return true;
            //console.log(`${this.email} is valid`);
        } else {
            return false;
            //console.log(`${this.email} is not an email`);
        }
    }

    getOfficeNumber() {
        this.officeNumber = '3472225566';
        const validatePhoneNumber = require('validate-phone-number-node-js');
        const result = validatePhoneNumber.validate('+13474208817')
        return result;
    }

    getRole() {
        this.role = '';
        const roles = ['Manager', 'Engineer', 'Intern'];
        const [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Intern'] = roles;
        this.role = isManager;
        return this.role;
    }
}



module.exports = Manager;