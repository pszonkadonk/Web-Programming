const printShape = require("./printShape");
const prompt = require("prompt");


function getInfo() {
	prompt.start();

	// Ask for the sizes of each shape

	const triangleSize = {
	name: 'triangleSize',
    description: 'How many lines would you like the triangle to be',     // Prompt displayed to the user. If not supplied name will be used.,
    type: 'number',                 // Specify the type of input to expect. 
    default: 2,      		        // Default value to use if no value is entered. 
    required: true                  // If true, value entered must be non-empty. 
	};

	const squareSize = {
		name: 'squareSize',
		description: 'How many lines would you like square to be',
		type: 'number',
		default: 2,
		required: true
	};

	const rhombusSize = {
		name: 'rhombusSize',
		description: 'How many lines would you like the rhombus to be',
		type: 'number',
		default: 2,
		required: true
	};	

	const quitPrompt = {
		name: 'quit',
		description: 'Would you like to quit after the results?  Please answer true or false',
		type: 'boolean',
		required: true
	};

	prompt.get([triangleSize, squareSize, rhombusSize, quitPrompt], function(err,result){

		if(result) {
			if (isNaN(result.triangleSize)) {
                console.log("Triangle lines not a number");
                getInfo();
                return;
            }
            if (isNaN(result.squareSize)) {
                console.log("Square lines not a number");
                getInfo();
                return;
            }
            if (isNaN(result.rhombusSize)) {
                console.log("Rhombus lines not a number");
                getInfo();
                return;
            }

			let quit = result.quit;

			for(let i = 1; i <= 10; i++){
				console.log(i);
				printShape.triangle(result.triangleSize);
			}
			for(let i = 1; i <= 10; i++){
				console.log(i);
				printShape.square(result.squareSize);
			}
			for(let i = 1; i <= 10; i++){
				console.log(i);
				printShape.rhombus(result.rhombusSize);
			}
			if(!quit) {
				getInfo();
			}
		} else if(err) {
			console.log(err);
		}
	});
}

getInfo();


