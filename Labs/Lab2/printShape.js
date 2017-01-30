module.exports = {
	triangle: (lines) => {
		if(typeof(lines) !== "number") {
			throw("Please enter triangle lines as a number");
		}
		if(lines < 0 || lines === undefined) {
			throw("Please enter a number of triangle lines greater then or equal to zero");
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
				innerPadding = Array(innerShifter).join(" ");
				outerpadding = Array((outerShifter)+1).join(" ");
				triangleLine = outerpadding + "/" + innerPadding + "\\";
				console.log(triangleLine);
				baseShifter +=1;
				innerShifter+=2;
			}
		}
	},
	square: (lines) => {
		if(typeof(lines) !== "number") {
			throw("Please enter square lines as a number");
		}
		if(lines < 2 || lines === undefined) {
			throw("Please enter a number of square lines greater then or equal to two");
		}
		let squareLine = "";
		let verticalPadding = "";
		let outerPadding = "";

		for(let i = 1; i <= lines; i++) {
			if(i === 1 || i === lines) {
				verticalPadding = Array(lines+1).join("-");
				outerPadding = Array(lines+1).join(" ");
				squareLine = outerPadding + "|" + verticalPadding + "|";
				console.log(squareLine);
			} else{
				verticalPadding = Array(lines+1).join(" ");
				outerPadding = Array(lines+1).join(" ");
				squareLine = outerPadding + "|" + verticalPadding + "|"
				console.log(squareLine);
			}	
		}
	},
	rhombus: (lines)=> {
		if(typeof(lines) !== "number") {
			throw("Please enter rhombus lines as a number");
		}
		if(lines < 2 || lines === undefined ) {
			throw("Please enter a number of rhombus lines greater then or equal to 2");
		}
		if(lines % 2 !==  0) {
			throw("Please enter an even number of rhombus lines");
		}
		
		let rhombusLine = "", innerPadding = "", outerpadding="";
		let outerShifter = lines+1, innerShifter = 1;
		
		for(let i = 1; i <= lines; i++) {
			if(i === 1) {
				innerPadding = "-";
				outerpadding = Array(lines+1).join(" ");
				rhombusLine = outerpadding + "/"+innerPadding + "\\";
				console.log(rhombusLine);
				outerShifter-=1;
				innerShifter+=1;
			}
			else if(i === lines) {
				outerShifter = lines +1;
				innerPadding = "-";
				outerpadding = Array(outerShifter).join(" ");
				rhombusLine = outerpadding + "\\"+innerPadding + "/";
				console.log(rhombusLine);
			}
			else if(i < 0.5 * lines) {
				innerPadding = Array(innerShifter+i).join(" "); 
				outerpadding = Array(outerShifter).join(" ");
				rhombusLine = outerpadding +"/" + innerPadding + "\\";
				console.log(rhombusLine);
				outerShifter-=1;
				innerShifter+=1;
			}
			else if(i === 0.5 * lines)
			{
				innerPadding = Array(lines).join(" "); 
				outerpadding = Array(outerShifter).join(" ");
				rhombusLine = outerpadding +"/" + innerPadding + "\\";
				console.log(rhombusLine);
				innerShifter = lines;
			 }
			 else if(i === (0.5 * lines+1)) {
				innerPadding = Array(innerShifter).join(" "); 
				outerpadding = Array(outerShifter).join(" ");
				rhombusLine = outerpadding +"\\" + innerPadding + "/";
				console.log(rhombusLine);
				outerShifter+=1;
				innerShifter-=1;
			}
			else if(i > 0.5 * lines) {
				innerShifter-=1;
				innerPadding = Array(innerShifter).join(" ");
				outerpadding = Array(outerShifter).join(" ");
				rhombusLine = outerpadding + "\\" + innerPadding + "/";
				console.log(rhombusLine); 
				outerShifter+=1;
				innerShifter-=1;
			}
		}		
	}
}