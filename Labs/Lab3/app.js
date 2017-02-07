const fileData = require('./fileData');
const textMetrics = require('./textMetrics');

let filePath = "C:/Users/Michael szonka/Desktop/chapter1.txt";
let JSONPath = "./test.json";
let fileToWrite = "./test.txt";
let JSONFileToWrite = "./jsonFileToWrite.json"
let text = "boogie w";

let jsonToWrite = [
    {
        "name": "Philip Barese",
        "codename": "The Spy",
        "role": "inconspicuously making your coffee while overhearing all your secret plans."
    },
    {
        "name": "Jordan Rails",
        "codename": "The Face",
        "role": "changing the face of education -- and making sure that no one catches on."
    }
]




let loadData = (filePath) => {

    fileData.getFileAsString(filePath)
    .then((data) => { // data fulfilled do something
        // console.log(data);
    }, (reason) => { //reject error, i.e file not found 
        console.log(typeof(reason))
        console.log(reason);
    });
}

let loadJSONdata = (filePath) => {
    
    fileData.getFileAsJSON(JSONPath)
    .then((data) =>{
        console.log(data);
    },(reason) => {
        console.log(reason)
    });
}

let writeDataToFile = (filePath, text) => {
    
    fileData.saveStringToFile(filePath, text)
    .then((resolved) => {
        if(resolved) {
            console.log("Data has been written to file");
        }
    }, (reason) => {
        console.log(reason);
    });
};

let writeJSONToFile = (filePath, JSONObject) => {

    fileData.saveJSONToFile(filePath, JSONObject)
    .then((resolved) => {
        console.log("Data has been written to file");
    }, (reason) => {
        console.log(reason);
    });
}


console.log(textMetrics.simplify("Daring Democrats to keep their word at the expense of several sleepless nights, Senator John Cornyn of Texas, the chamber’s No. 2 Republican, said the Senate session would not end until lawmakers confirmed four of Mr. Trump’s nominees: Ms. DeVos, Senator Jeff Sessions of Alabama as attorney general, Representative Tom Price of Georgia to lead the Department of Health and Human Services, and Steven T. Mnuchin as Treasury secretary."));


// loadData(filePath);
// loadJSONdata(JSONPath);
// writeDataToFile(fileToWrite, text);
// writeJSONToFile(JSONFileToWrite, {});
