"use strict";

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error("Usage: node app.js <num1> <operator> <num2>");
  process.exit(1);
}

const [num1, operator, num2] = args;

console.log(num1, operator, num2);
