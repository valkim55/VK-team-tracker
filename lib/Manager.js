class Manager {
    constructor(name = ' ') {
        this.name = name;
        this.employeeID = Math.floor(Math.random() * 999 + 1000);
        this.email = 'poogeon@gmail.com';
        this.officeNumber = 6463273179;
    }

    getName() {
        this.name = 'potato';
        return this.name;
    }

    getID() {
        this.employeeID = Math.floor(Math.random() * 999 + 1000);
        return this.employeeID;
    }

    getEmail() {
        this.email = 'potato@gmail.com';
        return this.email;
    }

    getOfficeNumber() {
        this.officeNumber = 3474208817;
        return this.officeNumber;
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