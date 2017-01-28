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
		throw new UserException("Please enter lines as a number")
	}
	let triangleLine = "";
	if(lines === 1){
		triangleLine += "/\\";
		console.log(triangleLine); 
	}
	else{
		let outerpadding = "";
		let innerPadding = "";
		let shifter = 0;
		let otherShifter = 0;
		let fooShifter = 0;
		for(let i = 1; i <=lines; i++) {
			// console.log(`I: ${i}`);
			// console.log(`lines: ${lines}`);
			// console.log('');
			otherShifter = otherShifter + 1;
			fooShifter = lines - i;

			if(i === lines) {
				innerPadding = Array((lines + shifter)).join("-");
				// outerpadding = Array((lines-2)-1).join("s");
				triangleLine = "/" + innerPadding + "\\";
				console.log(triangleLine);
			}else {
				innerPadding = Array(otherShifter).join("s");
				outerpadding = Array((fooShifter)+1).join("s");
				triangleLine = outerpadding + "/" + innerPadding + "\\";
				console.log(triangleLine);
				shifter +=1;
				otherShifter+=1;
			}
		}
	}
}


triangle(10);












	// let triangleLine = "";
	// let counter = 1;
	// for(let i = 0; i < lines; i++) {
	// 	// first two lines
	// 	if(lines === 1) {
	// 		console.log("/\\");
	// 		break;
	// 	}
	// 	else if(lines === 2){
	// 		console.log(" /\\");
	// 		console.log("/--\\");
	// 		break;
	// 	}

	// 	if(lines >= 3) {
	// 		console.log('foo');





	// 	}
		// let leftPadding = Array(lines-i).join(" ");
		// if(i !== 0) {
		// 	let middlePadding
		// }

		// triangleLine = leftPadding + "/" +

		// 	}
		// 	if(i === lines-1) {
		// 		let middlePadding = Array((lines+counter) + 1).join("-");
		// 		triangleLine = leftPadding + "/" + middlePadding + "\\";
		// 	} else{
		// 	let middlePadding = Array((lines+counter) + 1).join(" ");
		// 	triangleLine = leftPadding + "/" + middlePadding + "\\";
		// 	}
		// console.log(triangleLine);
		// counter +=1;
		// }
	



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






