const fileData = require('./fileData');
const textMetrics = require('./textMetrics');
const fs = require('fs');

let filePath = "./chapter";

fs.open(filePath, "r", (err) => {
    if(!err) {  
        fileData.getFileAsString(filePath)
        .then((data) => {
            console.log(data);
        })
    } else {
        let fileRegEx = /[\w]+/
        file = fileRegEx.exec(filePath)[0];
        fileData.getFileAsString(file.concat(".txt"))
        .then((data) => {
            let simplifiedText = textMetrics.simplify(data);
            return simplifiedText;
        }, (reason) => {
            console.log(reason);
        })
        .then((simplifiedText) => {
            let simplifiedFile = file + ".debug.txt";
            fileData.saveStringToFile(simplifiedFile, simplifiedText);
            return simplifiedText;
        }, (reason) => {
            console.log(reason);
        })
        .then((simplifiedText) => {
            let textFileMetrics = textMetrics.createMetrics(simplifiedText);
            return textFileMetrics;
        }, (reason) => {
            console.log(reason);
        })
        .then((textFileMetrics) => {
            let metricFile = file + ".result.json";
            fileData.saveJSONToFile(metricFile, textFileMetrics);
            return metricFile;
        }, (reason) => {
            console.log(reason);
        })
        .then((metricFile) => {
            let theMetrics = fileData.getFileAsString(metricFile);
            console.log(theMetrics);
        }, (reason) => {
            console.log(reason);
        })
    }
});






// let t = "Hello, my friends! This is a great day to say hello.\n\nHello! 2 3 4 23";
// let foo = textMetrics.createMetrics(t);

// console.log(foo);




































// let filePath = "C:/Users/Michael szonka/Desktop/chapter1.txt";
// let JSONPath = "./test.json";
// let fileToWrite = "./test.txt";
// let JSONFileToWrite = "./jsonFileToWrite.json"
// let text = "boogie w";

// let jsonToWrite = [
//     {
//         "name": "Philip Barese",
//         "codename": "The Spy",
//         "role": "inconspicuously making your coffee while overhearing all your secret plans."
//     },
//     {
//         "name": "Jordan Rails",
//         "codename": "The Face",
//         "role": "changing the face of education -- and making sure that no one catches on."
//     }
// ]





//  loadData = (filePath) => {

//     fileData.getFileAsString(filePath)
//     .then((data) => { // data fulfilled do something
//         // console.log(data);
//     }, (reason) => { //reject error, i.e file not found 
//         console.log(typeof(reason))
//         console.log(reason);
//     });
// }

// let loadJSONdata = (filePath) => {
    
//     fileData.getFileAsJSON(JSONPath)
//     .then((data) =>{
//         console.log(data);
//     },(reason) => {
//         console.log(reason)
//     });
// }

// let writeDataToFile = (filePath, text) => {
    
//     fileData.saveStringToFile(filePath, text)
//     .then((resolved) => {
//         if(resolved) {
//             console.log("Data has been written to file");
//         }
//     }, (reason) => {
//         console.log(reason);
//     });
// };

// let writeJSONToFile = (filePath, JSONObject) => {

//     fileData.saveJSONToFile(filePath, JSONObject)
//     .then((resolved) => {
//         console.log("Data has been written to file");
//     }, (reason) => {
//         console.log(reason);
//     });
// }



// loadData(filePath);
// loadJSONdata(JSONPath);
// writeDataToFile(fileToWrite, text);
// writeJSONToFile(JSONFileToWrite, {});
