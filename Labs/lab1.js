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
	let regEx = /ll/g;
	let arr;
	let occurrences = 0;
	while((arr = regEx.exec(fullString)) !== null) {
		occurrences+=1;
	}
	console.log(occurrences);
	return occurrences;
}

let bar = occurrencesOfSubstring("Helllllllo", "ll");







// Test
// let foo = sumOfSquares(5,3,10);
// console.log(foo);
// sayHelloTo("Michael", "Pszonka", "Mr.");
// cupsOfCoffee();


