"use strict";

// process.argv is a way to take command line arguments in node.js you would use a different approach for the browser

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: node app.js <num1> <operator> <num2>");
  process.exit(1);
}

// this takes the values from the command line input and assigns them to variables
const [num1, operator, num2] = args;

function calculate(num1, operator, num2) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
    return result;
  } else if (operator === "-") {
    result = num1 - num2;
    return result;
  } else if (operator === "/") {
    result = num1 / num2;
    return result;
  } else if (operator === "*") {
    result = num1 * num2;
    return result;
  } else {
    console.error("the operator must be either + - / or * ");
    return;
  }
}

const result = calculate(num1, operator, num2);

// logging the result is just to show that it works in the command line
console.log(result);
