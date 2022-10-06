//const { default: test } = require('node:test');
//const { default: test } = require('node:test');
const Engineer = require('../lib/Engineer');

// testing if new object constructor is created
test('creates a new engineer object', () => {
    const engineer = new Engineer('name', 'employeeID', 'email', 'github');

    expect(engineer.name).toBe('name');
    expect(engineer.employeeID).toBe('employeeID');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
})

test('gets managers name', () => {
    const engineer = new Engineer('Psyduck');
    
    /* const myMock = jest.fn();
     myMock.mockReturnValue(true); */ // - test using jest mock function, works too

    expect(engineer.getName()).toEqual(expect.any(String));
})

test('gets managers employee ID', () => {
    const engineer = new Engineer('Psyduck');
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(engineer.getID()).toEqual(expect.any(Number));
})

test('gets managers email', () => {
    const engineer = new Engineer('Psyduck');
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(engineer.getEmail()).toBeTruthy();
})

test('gets managers role', () => {
    const engineer = new Engineer('Psyduck');
    const roles = ['Manager', 'Engineer', 'Intern'];
    [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Inter'] = roles;
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(engineer.getRole()).toEqual(isEngineer);
})

test("get engineer's github account username", () => {
    const engineer = new Engineer('Psyduck');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})
