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

	for(let i = 0; i < arguments.length; i++) {
		if(typeof(arguments[i]) !== 'string') {
			throw new UserException("Please only pass strings as parameters");
		}
	}

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

	let lyrics = [];

	if(arguments.length === 0) {
		throw new UserException("Please pass a value.");
	}
	if(typeof(cups) !== 'number') {
		throw new UserException("Please pass cups as a number.");
	}
	else if(cups <= 0) {
		throw new UserException("You need atleast one cup of coffee on the desk!");
	}

	let i = cups;
	let msg = '';

	while(i !== 0){
		if(i === 1){
			msg = `${i} cup of coffee on the desk! ${i} cup of coffee!`;
			lyrics.push(msg);
			msg = "Pick it up, drink the cup, no more coffee left on the desk!";
			lyrics.push(msg);
			break;
		}else {
		msg = `${i} cups of coffee on the desk! ${i} cups of coffee!`;
		lyrics.push(msg);
		}
		if(i === 2) {
			msg = `Pick one up, drink the cup, ${i-1} cup of coffee on the desk!`;
			lyrics.push(msg);
		} else{
			msg = `Pick one up, drink the cup, ${i-1} cups of coffee on the desk!`;
			lyrics.push(msg);
		}
		i--;
	}
	//print lyrics
	lyrics.forEach(function(line,index){
		console.log(line);
		if(index % 2 === 1) {
			console.log();
		}
	});
	return lyrics;
}

//4 
function occurrencesOfSubstring(fullString, substring) {

	if(arguments.length !== 2) {
		throw new UserException("Please pass both a string and a substring to search for.");
	}
	if(typeof(fullString) !== 'string' && typeof(substring) !== 'string') {
		throw new UserException("Please make sure both parameters are strings.")
	}
	if(substring === "") {
		throw new UserException("Cannot search for an empty string!");
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
		throw new UserException("Must pass one string to function");
	}
	if(typeof(paragraph) !== 'string') {
		throw new UserException("Parameter must be a string.");
	}
	if(paragraph === "") {
		throw new UserException("Please do not pass an empty string.")
	}

	let regEx = /[^.?!]{1,}[.!?]+/g
	let splitSentence = paragraph.match(regEx);
	let randomSentence;

	splitSentence.sort(function(sentence1, sentence2){
		return(0.5-Math.random());
	}); 
	splitSentence = splitSentence.map(function(element){
		return element.trim();
	});
	randomSentence = splitSentence.join(" ");
	console.log(randomSentence);
	return randomSentence;
}


// Test
// let foo = sumOfSquares(5,3,10);
// console.log(foo);

// sayHelloTo("Phil", "Barresi", "Mr.");

// let lyrics = cupsOfCoffee(99);

// let bar = occurrencesOfSubstring("Helllllllo, class!", "ll");
// console.log(bar);

// let baz = randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations.");


