// Michael Pszonka
// Lab 1 
// January 26, 2016

function UserException(message) {
	this.message = message;
	this.name = "UserException";
}

//1
function sumOfSquares(num1, num2, num3) {
	if(arguments.length != 3) {
		throw new UserException("Please pass three arguments to the function.");
	}
	if(typeof(num1) === 'number' && 
		typeof(num2) === 'number' &&
		typeof(num3) === 'number') {
			sumSquares = num1**2 + num2**2 + num3**2;
			return sumSquares;
	}else {
		throw new UserException("Please make sure all parameters are numbers.");
	}
}

//2
function sayHelloTo(firstName, lastName, title) {
	switch(arguments.length) {
		case 0:
			throw new UserException('Please pass a value.');
			break;
		case 1:
			console.log(`Hello ${firstName}!`);
			break;
		case 2:
			console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
			break;
		case 3:
			console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
			break;
		}
	}


//3
function cupsOfCoffee(cups) {
	if(typeof(cups) !== 'number') {
		throw new UserException("Please pass cups as a number.");
	}
	else if(cups <= 0) {
		throw new UserException("You need atleast one cup of coffee on the desk!");
	}
	let i = cups;
	while(i !== 1){
		console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!`);
		if(i-1 === 1) {
			console.log(`Pick one up, drink the cup, ${i-1} cup of coffee on the desk!`);
		} else{
			console.log(`Pick one up, drink the cup, ${i-1} cups of coffee on the desk!`);
		}
		console.log();
		i--;
		}
	console.log(`${i} cup of coffee on the desk! ${i} cup of coffee!`);
	console.log("Pick it up, drink the cup, no more coffee left on the desk!");
}

//4 
function occurrencesOfSubstring(fullString, substring) {

	if(arguments.length !== 2) {
		throw new UserException("Please pass both a string and a substring to search for.");
	}
	if(typeof(fullString) !== 'string' && typeof(substring) !== 'string') {
		throw new UserException("Please make sure both parameters are strings.")
	} 

	let regEx = new RegExp(substring);
	let occurences = 0;
	let matchingString;
	let position;

	while(matchingString = fullString.match(regEx)) {
		position = matchingString.index;
		occurences +=1;
		fullString = fullString.slice(position+1); 
	}
	return occurences;
}

//5
function randomizeSentences(paragraph) {

	if(arguments.length !== 1) {
		throw new UserException("Must only pass one string to function")
	}

	let regEx = /[^.?!]+[.!?]*/g
	let splitSentence = paragraph.match(regEx);
	let randomSentence;

	splitSentence.sort(function(sentence1, sentence2){
		return(0.5-Math.random());
	}); 
	splitSentence = splitSentence.map(function(element){
		return element.trim();
	});
	randomSentence = splitSentence.join(" ");
	return randomSentence;
}


let foo = randomizeSentences("Hello, world!!! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");
// console.log(foo);
console.log(foo);







// Test
// let foo = sumOfSquares(5,3,10);
// console.log(foo);
// sayHelloTo("Michael", "Pszonka", "Mr.");
// cupsOfCoffee();
// let bar = occurrencesOfSubstring("Helllllllo, class!", "ll");



