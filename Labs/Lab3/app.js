const fileData = require('./fileData');
const textMetrics = require('./textMetrics');
const fs = require('fs');

let textFile = "./chapter2.txt";

let resultFile = textFile.replace(/.+[\\\/]/, '')
                         .replace(".txt", ".result.json");


let mainChain = fileData.getFileAsJSON(resultFile).then((jsonObject) => {                //if result.json exists, print
    console.log(jsonObject);
}).catch((error) => {                                                                    // else search for .txt file and begin
       return fileData.getFileAsString(textFile)
            .then((text) => {
                text = textMetrics.simplify(text);                                      // simplify text
                let simplifiedFile = textFile.replace(/.+[\\\/]/, '')
                                             .replace(".txt", ".debug.text");
                return fileData.saveStringToFile(simplifiedFile, text)                  // write simplified text to .debug-text file
                .then(() => {
                    return fileData.getFileAsString(simplifiedFile)                      // read data from .debug-text
                        .then((text) => {
                            let textFileMetrics = textMetrics.createMetrics(text);        // create metrics on file
                            return fileData.saveJSONToFile(resultFile, textFileMetrics)   // write metric json to file
                            .then(() => {
                                return fileData.getFileAsJSON(resultFile)                 // read metrics json object from file
                                .then((metrics) => {
                                    console.log(metrics);                                 // console.log metrics file
                                }) 
                                .catch((err) => {
                                    console.log(err);
                                });
                            }).catch((err) => {
                                console.log(err);
                            });
                        }).catch((err) => {
                            console.log(err);
                        });
                    }).catch((err) => {
                        console.log(err);
                });
            }).catch((err) => {
                console.log(err);
            });
        });