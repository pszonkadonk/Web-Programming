const fileData = require('./fileData');

let filePath = "C:/Users/Michael Pszonka/Desktop/chapter1.txt";

let loadData = (filePath) => {

    fileData.getFileAsString(filePath)
    .then((data) => {
        // data fulfilled do something
        console.log("This is executing from APP.JS");
        console.log(data);
    }, ((reason) => { //reject file not found 
        console.log(reason);
    }));
}

loadData(filePath);






















// let promise = new Promise((resolve, reject) => {
//     if(4<5) {
//         reject(3);
//     }
//     resolve(4)

// });

// promise.then((results) =>{
//     console.log(results);
//     },((err) => {
//         console.log(err);
// }));
