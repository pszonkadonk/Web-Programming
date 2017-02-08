// fs.open(filePath, "r", (err) => { 
//     if(!err) {  //if result file already exists, get it and output
//         fileData.getFileAsString(filePath)
//         .then((data) => {
//             console.log(data);
//         })
//     } else {  //if not
//         fileName = filePath.replace(/.+[\\\/]/, '').split(".")[0]; //strip filename w/o extensions. i.e "chapter3"
//         fileData.getFileAsString(fileName.concat(".txt")) // get the text from the file
//         .then((data) => {
//             let simplifiedText = textMetrics.simplify(data);  //simplify the text
//             let simplifiedFile = fileName + ".debug.txt";
//             return fileData.saveStringToFile(simplifiedFile, simplifiedText)  //write simplified text to new file
//                 .then(() => {
//                     fileData.getFileAsString(fileName.concat(".debug.txt")) // read from simplified text file
//                     .then((data) => {
//                         let textFileMetrics = textMetrics.createMetrics(data); // run metrics on simplified text
//                         let metricFile = fileName + ".result.json"
//                         return fileData.saveJSONToFile(metricFile, textFileMetrics)  //write metrics to file
//                             .then(() => {
//                                 fileData.getFileAsJSON(fileName.concat(".result.json"))  //retrieve metrics as JSON object from file
//                                 .then((data) => {
//                                     console.log(data);   //log metrics to the console
//                                 }).catch((err) => {console.log(err);})
//                             }).catch((err) => {console.log(err)})
//                 }).catch((err) => {console.log(err);});      
//             }).catch((err) => {console.log(err);});
//         }).catch((err) => {console.log(err);});
//     }
// });



// let filePath = "chapter3.txt";
// filePath = filePath.replace(".txt","").concat(".result.json")

