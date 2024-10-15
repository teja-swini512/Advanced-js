// A closure is a function that has access to variables in its outer scope even after the outer function has returned. In this example, the outerFunction returns the innerFunction which logs the value of counter to the console. The variable counter is declared in the outer scope and is accessible to the inner function. We assign the returned function to the variable counterFunction and call it multiple times. This will log the values 1, 2, and 3 to the console, indicating that the inner function still has access to the counter variable even after the outer function has returned.

function outerFunction() {

    let counter = 0;
  
    return function innerFunction() {
  
      counter++;
  
      console.log(counter);
  
    };
  
  }
  
  let counterFunction = outerFunction();
  
  counterFunction(); 
  
  counterFunction(); 
  
  counterFunction(); 