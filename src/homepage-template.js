const app = require('app');

const printManager = managerInfo => {
    return `      
        <div class="card mx-3 my-3" style="max-width: 540px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="https://www.kindpng.com/picc/m/141-1416575_pokemon-snorlax-png-5-png-image-transparent.png" class="img-fluid rounded-start" alt="Pokemon as manager's profile image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${Object.values(managerInfo)[0]}</li>
                            <li class="list-group-item">${Object.values(managerInfo)[1]}</li>
                            <li class="list-group-item"><a href="mailto:snorlax#gmail.com">Contact at: ${Object.values(managerInfo)[2]}</a></li>
                            <li class="list-group-item"><a href="tel:+13474208817">Office number: ${Object.values(managerInfo)[3]}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                
    `;
};