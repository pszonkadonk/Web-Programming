(function() {

    let palindromeMethods = {
        isPalindrome: function(text) {
            text = text.toLowerCase();
            text = text.replace(/[.,\/#!$%\^&’\*;:{}=\?-_`~()]/g,"").replace(/\s+/g,'');
            textArray = text.split('');
            textArrayReversed = text.split('').reverse()

            if(textArray.join() == textArrayReversed.join()) {
                return true
            }
            else {
                return false;
            }
        }
    };
    var staticForm = document.getElementById("static-form");

    if(staticForm) {
        palindromeList = document.getElementById("list-palindrome");
    }

    staticForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var isPalindrome = palindromeMethods['isPalindrome'];
        var errorTextElement = document.getElementById("error-container");
        try {
            var textArea = document.getElementById("palindrome").value;

            if(textArea === "") {
                errorTextElement.classList.remove('hidden');
                throw new Error("A value must be provided in the text area");
            }
            else {
                errorTextElement.classList.add('hidden');
            }

            var li = document.createElement("li");
            var result = isPalindrome(textArea);

            if(result) {
                li.classList.add('is-palindrome');
            }
            else {
                li.classList.add('not-palindrome')
            }
            li.appendChild(document.createTextNode(textArea));
            palindromeList.appendChild(li);

        } catch(e) {
            var message = typeof e === "string" ? e : e.message;
            errorTextElement.textContent = e;
        }  
    });
})();