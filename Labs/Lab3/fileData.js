const fs = require('fs');

module.exports = {
    getFileAsString: (filePath) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined) {
                reject(new Error("File path cannot be empty!"))
            }
            fs.readFile(filePath, "utf-8", (err, data) => {
                if(err) {
                    reject(new Error("This is not a valid file path!"));
                }
                resolve(data);
            });
        });
    }
}