module.exports = {
    simplify: (text) => {
        if(typeof(text) !== "string") {
            throw new Error("Supplied data must be a string!");
        }
        if(text === "") {
            throw new Error("Text supplied cannot be an empty string!");
        }
        let simplifiedText = text.replace(/[^\w\s]/g, "")
                                  .replace(/[\n]+/g, " ") 
                                  .replace(/[\t]+/g, " ")
                                  .toLowerCase();
        return(simplifiedText);
    },
    createMetrics: (text) => {
        let textArray = text.split(" ");
        let totalLetters = 0, totalWords = 0, uniqueWords = 0;
        let longWords = 0, averageWordLength = 0;
        let wordOccurrences = {}, metrics = {};

        uniqueTextArray = textArray.filter((word, index, textArray) => {  // remove duplicates
            let wordIndex = textArray.indexOf(word);
            if(wordIndex !== index) {  //increment word occurence if not unique
                wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
            }
            else {                      //otherwise add word to occurence dictionary
                wordOccurrences[word] = 1;
                return wordIndex === index;
            }
        });

        textArray.forEach((word) => { // count total letters and words
            totalLetters += word.length;
            totalWords +=1;
        });
        
        averageWordLength = totalLetters/totalWords; // average word length
        uniqueWords = uniqueTextArray.length;   // total unique words
        
        uniqueTextArray.forEach((word) => {          // count long words
            if(word.length >= 6) {
                longWords += 1;
            }
        });
        return metrics =  {
            "totalLetters": totalLetters,
            "totalWords": totalWords,
            "uniqueWords": uniqueWords,
            "longWords": longWords,
            "averageWordLength": averageWordLength,
            "wordOccurrences": wordOccurrences   
        }; 
    }
}