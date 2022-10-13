const Employee = require('./Employee');
// extend parent Employee class 
class Intern extends Employee {
    constructor(name, employeeID, email, school) {
        super(name, employeeID, email, school);
        // 'school' property is unique to intern class
        this.school = school;
    }

  
    // this method is unique to Intern class therefore cannot be inherited from Employee parent object
    getSchool() {
        this.school = 'String';
        return this.school;
    }

    // override default 'employee' role with the value of isIntern
    getRole() {
        this.role = '';
        const roles = ['Manager', 'Engineer', 'Intern'];
        const [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Intern'] = roles;
        this.role = isIntern;
        return this.role;
    }

}

module.exports = Intern;