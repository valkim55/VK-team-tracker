// bring file system module to be able to write a new file
const fs = require('fs');

const writeFile = managerInfo => {
    
    // return a promise that will either resolve or reject
    return new Promise((resolve, reject) => {

        // write an HTML file using htmlContent as a first argument, and error as a second one
        fs.writeFile('index.html', printManager(managerInfo), err => {
            // handel the error first
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML page created!'
            })
        })
    })
};

module.exports = {writeFile};