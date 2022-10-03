// const { default: test } = require('node:test');
const Manager = require('../lib/Manager');


test('creates a manager object', () => {
    const manager = new Manager('Poogeon');

    // manager object needs to have: name, id, email, number properties, and getName(), getID(), getEmail(), getRole() methods
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets managers name', () => {
    const manager = new Manager('Poogeon');
    const myMock = jest.fn();
    myMock.mockReturnValue(true); 
    //expect(manager.getName()).toEqual(expect.any(String));
})

test('gets managers employee ID', () => {
    const manager = new Manager('Poogeon');
    const myMock = jest.fn();
    myMock.mockReturnValue(true); 
    //expect(manager.getID()).toEqual(expect.any(Number));
})

test('gets managers email', () => {
    const manager = new Manager('Poogeon');
    const myMock = jest.fn();
    myMock.mockReturnValue(true); 
    //expect(manager.getEmail()).toEqual(expect.any(String));
})

test('gets managers office number', () => {
    const manager = new Manager('Poogeon');
    const myMock = jest.fn();
    myMock.mockReturnValue(true);
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})

test('gets managers role', () => {
    const manager = new Manager('Poogeon');
    const roles = ['Manager', 'Engineer', 'Intern'];
    [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Inter'] = roles;
    const myMock = jest.fn();
    myMock.mockReturnValue(true);
    //expect(manager.getRole()).toHaveReturnedWith(isManager);
})