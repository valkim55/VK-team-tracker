//const { exportAllDeclaration } = require('@babel/types');
//const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

// test creating class constructor for Employee
test('creates employee class constructor', () => {
    // since employee will be a parent class constructor it has to have only those properties and methods that will be inherited by all other classes
    const employee = new Employee('name', 'employeeID', 'email');

    expect(employee.name).toBe('name');
    expect(employee.employeeID).toBe('employeeID');
    expect(employee.email).toBe('email');
});

test("get employee's name", () => {
    const employee = new Employee('Pokemon');
    expect(employee.getName()).toEqual(expect.any(String));

    /* const myMock = jest.fn();
     myMock.mockReturnValue(true); */ // - test using jest mock function, works too, test for expected value to be true
});

test("gets employee's ID number as any 4-digits number", () => {
    const employee = new Employee('Pokemon');
    expect(employee.getID()).toEqual(expect.any(Number));
})

test("get employee's email", () => {
    const employee = new Employee('Pokemon');
    expect(employee.getEmail()).toBeTruthy();
});

test("get employee's role", () => {
    const employee = new Employee('Pokemon');
    //const allRoles = [['Employee'], ['Manager', 'Engineer', 'Intern']];
    //expect(employee.getRole()).toEqual(allRoles[0]);
    const role = 'Employee';
    expect(employee.getRole()).toBe(role);

})

