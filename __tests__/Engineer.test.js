const Engineer = require('../lib/Engineer');

// testing if new object constructor is created
test('creates a new engineer object', () => {
    const engineer = new Engineer('name', 'employeeID', 'email', 'github');

    expect(engineer.name).toBe('name');
    expect(engineer.employeeID).toBe('employeeID');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
})

test('get engineer name', () => {
    const engineer = new Engineer('Psyduck');
    
    /* const myMock = jest.fn();
     myMock.mockReturnValue(true); */ // - test using jest mock function, works too

    expect(engineer.getName()).toEqual(expect.any(String));
})

test('get engineers employee ID', () => {
    const engineer = new Engineer('Psyduck');
    expect(engineer.getID()).toEqual(expect.any(Number));
})

test('get engineers email', () => {
    const engineer = new Engineer('Psyduck');
    expect(engineer.getEmail()).toBeTruthy();
})

test('get engineers role', () => {
    const engineer = new Engineer('Psyduck');
    const roles = ['Manager', 'Engineer', 'Intern'];
    [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Inter'] = roles;
    expect(engineer.getRole()).toEqual(isEngineer);
})

test("get engineer's github account username", () => {
    const engineer = new Engineer('Psyduck');
    expect(engineer.getGithub()).toEqual(expect.any(String));
})
