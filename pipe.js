// the functions add, multiply, and subtract are passed as arguments to the pipe function. The processValue function that is returned can be executed on an input value of 5. The input value 5 is passed through the add function first, then the multiply function, and finally the subtract function. The final result of 9 is logged to the console.

// In conclusion, the pipe function is a useful tool for organizing and managing your code. It allows you to create a pipeline of functions that can be executed on an input value. 


const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

const processValue = pipe(add, multiply, subtract);
const result = processValue(5);

console.log(result); 