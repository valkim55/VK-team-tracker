// 'require' Employee constructor to extend
const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, employeeID, email, officeNumber) {
        // calling the parent constructor object, with the name value we got from it 
        super(name, employeeID, email);
        // office number is unique to manager class
        this.officeNumber = officeNumber;
    }

   
    // method unique to manager object
    getOfficeNumber() {
        // this.officeNumber = '3472225566';
        // const validatePhoneNumber = require('validate-phone-number-node-js');
        // const result = validatePhoneNumber.validate('+13475556699')
        return this.officeNumber;
    }

    // needs to override 'employee' with the value of isManager
    getRole() {
        // this.role = '';
        // const roles = ['Manager', 'Engineer', 'Intern'];
        // const [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Intern'] = roles;
        // this.role = isManager;
        return this.role;
    }
}


module.exports = Manager;