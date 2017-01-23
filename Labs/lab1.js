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
			} else {
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













// Test
// let foo = sumOfSquares(5,3,10);
// console.log(foo);
// sayHelloTo("Michael", "Pszonka", "Mr.");

