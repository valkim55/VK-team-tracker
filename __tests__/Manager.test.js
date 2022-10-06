const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 'employeeID', 'email', 'officeNumber');

    // test if constructor creates object Manager with properties passed as arguments
    expect(manager.name).toBe('name');
    expect(manager.employeeID).toBe('employeeID');
    expect(manager.email).toBe('email');
    expect(manager.officeNumber).toBe('officeNumber');
})

test('gets managers name', () => {
    const manager = new Manager('Potato');
    
    /* const myMock = jest.fn();
     myMock.mockReturnValue(true); */ // - test using jest mock function, works too

    expect(manager.getName()).toEqual(expect.any(String));
})

test('gets managers employee ID', () => {
    const manager = new Manager('Potato');
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(manager.getID()).toEqual(expect.any(Number));
})

test('gets managers email', () => {
    const manager = new Manager('Potato');
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(manager.getEmail()).toBeTruthy();
})

test('gets managers office number', () => {
    const manager = new Manager('Potato');
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(manager.getOfficeNumber()).toBeTruthy();
})

test('gets managers role', () => {
    const manager = new Manager('Potato');
    const roles = ['Manager', 'Engineer', 'Intern'];
    [isManager = 'Manager', isEngineer = 'Engineer', isIntern = 'Inter'] = roles;
    /* const myMock = jest.fn();
    myMock.mockReturnValue(true); */
    expect(manager.getRole()).toEqual(isManager);
})