module.exports = {
    simplify: (text) => {
        if(typeof(text) !== "string") {
            reject(new Error("Supplied data must be a string!"));
        }
        if(text === "") {
            reject(new Error("Text supplied cannot be an empty string!"));
        }
        let simplifiedText = text.replace(/[^\w\s]/g, "")
                                  .replace(/[\n\t+]/g, " ")
                                  .toLowerCase();
        return(simplifiedText);
    },
    createMetrics: (text) => {
        
    }
}