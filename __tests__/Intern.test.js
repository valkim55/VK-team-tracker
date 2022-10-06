
const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('name', 'employeeID', 'email', 'school');

    expect(intern.name).toBe('name');
    expect(intern.employeeID).toBe('employeeID');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
})

test("get intern's name", () => {
    const intern = new Intern('Snorlax');
    expect(intern.getName()).toEqual(expect.any(String));
});

test("get intern's employee ID", () => {
    const intern = new Intern('Snorlax');
    expect(intern.getID()).toEqual(expect.any(Number));
});

test("get intern's email", () => {
    const intern = new Intern('Snorlax');
    expect(intern.getEmail()).toBeTruthy();
});

test("get the name of intern's school", () => {
    const intern = new Intern('Snorlax');
    expect(intern.getSchool()).toBeTruthy();
})

test("get intern's role", () => {
    const intern = new Intern('Snorlax');
    const roles = ['Manager', 'Engineer', 'Intern'];
    [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Inter'] = roles;
    expect(intern.getRole()).toEqual(isIntern);
})