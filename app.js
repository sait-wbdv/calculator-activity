"use strict";

// calculation values -- they do NOT need to be the same as the values in your function
const num1 = 8;
const num2 = 33;
const operator = "+";

// wrap this in a function that accepts num1, num2, and operator as arguments
// remove the console.log() as they won't be needed in here anymore
let result;
if (operator === "+") {
  result = num1 + num2;
  console.log(result);
  return result;
} else if (operator === "-") {
  result = num1 - num2;
  console.log(result);
  return result;
} else if (operator === "/") {
  result = num1 / num2;
  console.log(result);
  return result;
} else if (operator === "*") {
  result = num1 * num2;
  console.log(result);
  return result;
} else {
  console.error("the operator must be either + - / or * ");
  return;
}

// invoke the function and the variables into it
