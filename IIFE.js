
	// // Regular Function.
	// function Greet() {
	// 	console.log("Hello World")
	// };
	// // Execution of Regular Function.
	// Greet();

	// IIFE creation and execution.
	(function() {
		console.log("Hello IIFE")
	})();


  
	// Declaring the parameter required.
	(function(dt) {
		console.log(dt.toLocaleTimeString());
		// Passing the Parameter.
	})
    (new Date())
