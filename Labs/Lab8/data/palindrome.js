let exportedMethods = {

    isPalindrome(text) {
        text = text.toLowerCase();
        text = text.replace(/[.,\/#!$%\^&’\*;:{}=\?-_`~()]/g,"").replace(/\s+/g,'');
        textArray = text.split('');
        textArrayReversed = text.split('').reverse()

         if(textArray.join() == textArrayReversed.join()) {
             console.log("Value is a palindrome");
             return true
         }
         else {
             console.log("Value is NOT a palindrome");
             return false;
         }
    }
}

module.exports = exportedMethods;