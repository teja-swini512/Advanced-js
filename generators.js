// A generator is a special type of function that can be paused and resumed multiple times. In this example, we create a generator function using the function* syntax. The generator function uses the yield keyword to return a value each time it is resumed. We create an iterator using the generator function and use the next method to get the next value from the iterator. This will log the values 1, 2, and 3 to the console, indicating that the generator has been resumed and returned the values one by one.


function* generator() {

    yield 1;
   
    yield 2;
   
    yield 3;
   
   }
   
   let iterator = generator();
   
   console.log(iterator.next().value); 
   
   console.log(iterator.next().value); 
   
   console.log(iterator.next().value); 