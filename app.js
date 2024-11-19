"use strict";

// process.argv is a way to take command line arguments in node.js you would use a different approach for the browser
const add = require("./add.js");
const subtract = require("./subtract.js");
const divide = require("./divide.js");
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: node app.js <num1> <operator> <num2>");
  process.exit(1);
}

// this takes the values from the command line input and assigns them to variables
const [num1, operator, num2] = args;

function calculate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else {
    console.error("the operator must be either + - / or * ");
    return;
  }
}

const result = calculate(num1, operator, num2);

// logging the result is just to show that it works in the command line
console.log(result);
