

const generatePage = manager => {
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Office</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        
        <section class="hero is-small">
            <h1 class="header">welcome to the office</h1>
            <div class="hero-body"></div>
        </section>
        
        <main class="content my-3 container-lg text-center">
        <div class="row align-items-center justify-content-center">
            
            <div class="card mx-3 my-3" style="max-width: 540px">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="https://www.kindpng.com/picc/m/141-1416575_pokemon-snorlax-png-5-png-image-transparent.png" class="img-fluid rounded-center" alt="Pokemon as manager's profile image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Manager</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${manager.name}</li>
                                <li class="list-group-item">${manager.employeeID}</li>
                                <li class="list-group-item">Contact at: <a href="mailto:${manager.email}">${manager.email}</a></li>
                                <li class="list-group-item">Office number: <a href="tel:+1${manager.officeNumber}">${manager.officeNumber}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </body>
    </html>    
    
    `;
};

// add engineer card if present
const generateEngineer = engineersArray => {
    console.log(engineersArray);
    const engArrayHTML = engineersArray.map(({name, employeeID, email, github}) => {
        return `
        <main class="content my-3 container-lg text-center">
        
            <div class="card mx-3 my-3" style="max-width: 540px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://www.kindpng.com/picc/m/135-1350264_gengar-png-transparent-png.png" class="img-fluid rounded-center" alt="Pokemon as engineer's profile image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Engineer</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${name}</li>
                            <li class="list-group-item">${employeeID}</li>
                            <li class="list-group-item">Contact at: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">Visit GitHub profile: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        
        </main>
        `;
    });

    return `
        ${engArrayHTML.join('')}
    `
};

// add intern card if present
const generateIntern = internsArray => {
    console.log(internsArray);
    const intArrayHTML = internsArray.map(({name, employeeID, email, school}) => {
        return `
        <main class="content my-3 container-lg text-center">
        
            <div class="card mx-3 my-3" style="max-width: 540px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://www.kindpng.com/picc/m/177-1772786_sick-score-bro-pokemon-psyduck-hd-png-download.png" class="img-fluid " alt="Pokemon as engineer's profile image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Intern</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${name}</li>
                            <li class="list-group-item">${employeeID}</li>
                            <li class="list-group-item">Contact at: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group-item">School: <a href="https://google.com/search?q=${school}">${school}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        
        </main>
        `;
    });

    return `
        ${intArrayHTML.join('')}
    `
};

module.exports = { generatePage, generateEngineer, generateIntern};
