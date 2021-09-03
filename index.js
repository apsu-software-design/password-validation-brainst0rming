const validatePassword = require('./passwordvalidation'); //import the function

// Your code goes here!

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Enter a password to validate (or :q to quit)');

let passwordPrompt = () => {
	rl.question('$ ', userInput => {
		if (userInput === ':q') {
			console.log('Goodbye!');
			rl.close();
		}
		else if (validatePassword(userInput)) {
			console.log(`The password is valid: ${userInput}`);
			passwordPrompt();
		}
		else {
	                console.log(`The password is invalid: ${userInput}`);
			passwordPrompt();
		}
	});
};

passwordPrompt();
