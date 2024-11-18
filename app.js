"use strict";

// process.argv is a way to take command line arguments in node.js you would use a different approach for the browser

const args = process.argv.slice(2);

const add = require("./modules/add");
const subtract = require("./modules/subtract");
const divide = require("./modules/divide");
const multiply = require("./modules/multiply");

if (args.length > 3) {
  console.error(`Too many arguments: ${args.length} \nArgs: ${args}`);
  process.exit(1);
}
if (args.length !== 3) {
  console.error("Usage: node app.js <num1> <operator> <num2>");
  process.exit(1);
}
// this takes the values from the command line input and assigns them to variables
const [num1, operator, num2] = args;

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "/":
      return divide(num1, num2);
    case "*":
      return multiply(num1, num2);
    default:
      console.error("the operator must be either + - / or * ");
      return;
  }
}

const result = calculate(parseFloat(num1), operator, parseFloat(num2));

// logging the result is just to show that it works in the command line
console.log(result);
