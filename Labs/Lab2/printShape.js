// module.exports = {
// 	description: "This is the printShape module",
// 	triangle:(lines) => {

// 	},
// 	square:(lines)=>{

// 	},
// 	rhombus(lines)=>{

// 	}
// };

function UserException(message) {
	this.message = message;
	this.name = "UserException";
}

let triangle = (lines) => {
	if(typeof(lines) !== "number") {
		throw new UserException("Please enter lines as a number");
	}
	if(lines < 0 || lines === undefined) {
		throw new UserException("Please enter a number greater then or equal to zero");
	}

	let triangleLine = "";
	let outerpadding = "", innerPadding = "";
	let baseShifter = 0, outerShifter = 0, innerShifter = 1;

	for(let i = 1; i <= lines; i++) {
		outerShifter = lines - i;
		if(i === lines) {
			innerPadding = Array((lines + baseShifter)).join("-");
			triangleLine = "/" + innerPadding + "\\";
			console.log(triangleLine);
		}else {
			innerPadding = Array(innerShifter).join("s");
			outerpadding = Array((outerShifter)+1).join("s");
			triangleLine = outerpadding + "/" + innerPadding + "\\";
			console.log(triangleLine);
			baseShifter +=1;
			innerShifter+=2;
		}
	}
}


let square = (lines) => {
	if(typeof(lines) !== "number") {
		throw new UserException("Please enter lines as a number");
	}
	if(lines < 2 || lines === undefined) {
		throw new UserException("Please enter a number greater then or equal to zero");
	}

	let squareLine = "";
	let verticalPadding = "";

	for(let i = 1; i <= lines; i++) {
		if(i === 1 || i === lines) {
			verticalPadding = Array(lines+1).join("-");
			squareLine = "|" + verticalPadding + "|";
			console.log(squareLine);
		} else{
			verticalPadding = Array(lines+1).join(" ");
			squareLine = "|" + verticalPadding + "|"
			console.log(squareLine);
		}
	}
}

triangle(10);
square(10);

















	




















	// 	let padding = Array((lines-i) + 1).join(" ");
	// 	if(lines !== 1 && i === lines-1) {
	// 		let basePadding = Array(lines+1).join("-");
	// 		let triangleLine = "/" + basePadding + "\\";
	// 		console.log(triangleLine);
	// 	}else {
	// 	let triangleLine = padding + "/" + padding + "\\";
	// 	console.log(triangleLine);
	// 	}
	// }

	// switch(lines) {
	// 	case 1:
	// 		console.log("/\\");
	// 		break;
	// 	case 2:
	// 		console.log("/\\");
	// 		console.log("/  \\");
	// 		break;
	// 	case 3:  // 3 spaces
	// 		console.log("  /\\");    //spaces = lines-i. ie 2 spaces
	// 		console.log(" /  \\");  // 1 space
	// 		console.log("/    \\"); // 0 spaces
	// 		break;
	// 	case 4: //6 spaces
	// 		console.log("   /\\");   
	// 		console.log("  /  \\"); //= lines - 2
	// 		console.log(" /    \\"); //horizonal - = lines
	// 		console.log("/------\\"); // = lines + 2
	// 		break;
	// 	case 5:  //10 spaces
	// 		console.log("    /\\");   
	// 		console.log("   /  \\"); 
	// 		console.log("  /    \\"); 
	// 		console.log(" /      \\"); lines + 2
	// 		console.log("/--------\\"); //lines + 3 for horizontal
	// 		break;
	// }






