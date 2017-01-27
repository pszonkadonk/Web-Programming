// module.exports = {
// 	description: "This is the printShape module",
// 	triangle:(lines) => {

// 	},
// 	square:(lines)=>{

// 	},
// 	rhombus(lines)=>{

// 	}
// };

let triangle = (lines) => {
	let triangleLine = "";
	let counter = 1;
	for(let i = 0; i < lines; i++) {
		// first two lines
		if(lines === 1) {
			console.log("/\\");
			break;
		}
		else if(lines === 2){
			console.log(" /\\");
			console.log("/--\\");
			break;
		}

		if(lines >= 3) {
			console.log('foo');





		}
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
	}



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
}

triangle(3);





