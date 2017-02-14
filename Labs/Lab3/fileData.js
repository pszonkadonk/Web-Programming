const fs = require('fs');

module.exports = {
    getFileAsString: (filePath) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined || filePath === "") {
                reject(new Error("File path cannot be empty!"));
            }
            fs.readFile(filePath, "utf-8", (err, data) => {
                if(err) {
                    reject(new Error("Cannot find the file!"));
                }
                resolve(data);
            });
        });
    },
    getFileAsJSON: (filePath) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined || filePath === "") {
                reject(new Error("File path cannot be empty!"));
            }
            fs.readFile(filePath, "utf-8", (err, data) => {
                if(err) {
                    reject(new Error("Cannot find the file!"));
                }
                try {
                JSON.parse(data)
                //    resolve(JSON.parse(data));  //gas to resolve true i beliveve!
                } catch(err) {
                    reject(new Error("File was found but does not contain valid JSON notation!"));
                }
                resole(true);
            });
        });
    },
    saveStringToFile: (filePath, text) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined || filePath === "") {
                reject(new Error("File path cannot be empty!"));
            }
            if(text === "" || typeof(text) === undefined) {
                reject(new Error("Must pass some value to write to file!"));
            }
            fs.writeFile(filePath, text, "utf-8", (err) => {
                if(err) {
                    reject(console.log(err));
                }
                resolve(true);
            })
        });
    },
    saveJSONToFile: (filePath, obj) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined || filePath === "") {
                reject(new Error("File path cannot be empty!"));
            }
            else if(obj === "" || typeof(obj) === undefined) {
                reject(new Error("Must pass an object to write to file!"));
            }
            else if(typeof(obj) === 'string') {
                reject(new Error("Must be a javascript object!"));
            }
            else {
                fs.writeFile(filePath, JSON.stringify(obj, 2, 4), "utf-8", (err) => {
                    if(err) {
                        reject(console.log(err));
                    }
                    resolve(true)
                });
            } 
        });
    }
}
