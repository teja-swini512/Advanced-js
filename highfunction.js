// A higher-order function is a function that returns another function. In this example, the multiplyBy function takes a factor as its argument and returns a new function that takes a number as its argument. The returned function calculates and returns the product of the number and factor. We then assign the returned function to the variable double and call it with an argument 5. This will log the result 10 to the console.


function multiplyBy(factor) {

    return function (number) {
  
      return number * factor;
  
    };
  
  }
  
  let double = multiplyBy(2);
  
  console.log(double(5)); 