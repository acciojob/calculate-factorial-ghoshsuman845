//your code here
// Get input from user
let num = parseInt(prompt("Enter a number to find its factorial:"));

// Initialize factorial variable
let factorial = 1;

// Find factorial using a for loop
for (let i = 1; i <= num; i++) {
  factorial *= i;
}

// Display result
alert("The factorial of " + num + " is " + factorial);