const fs = require('fs');

module.exports = {
    getFileAsString: (filePath) => {
        return new Promise((resolve, reject) => {
            if(filePath === undefined) {
                reject(new Error("You must pass a file path!"))
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
















    // getFileAsString: (filename) => {
    //         fs.readFile(filename, "utf-8", (err, data) => {
    //             let promiseFile = new Promise((fulfill, reject) => {
    //                 if(err) { //reject
    //                     reject(err)
    //                 }
    //                 fulfill(console.log("successfully read file!"));
    //                 // return data;
    //             });
    //         });
    //         promiseFile.then((results) => {
    //             console.log("RESULTS TYPE: " + typeof(results));
    //         },((err) => {
    //             console.log(err);
    //         }));
    //     }











//         return new Promise((fulfill, reject) => {
//             try { 
//                 fs.readFile(filename, "utf-8", (err, data) => {
//                 if(err) {
//                     reject(err);
//                 }
//                 setTimeout((data) => {
//                     fulfill(console.log("found file!"));
//                     return data;
//                 }, 500);
//                 });
//             } catch(err) {
//                 reject(err);
//             }
//         });
//     }
// }
