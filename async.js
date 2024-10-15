// Asynchronous iteration allows us to iterate over asynchronous data sources, such as an async function or a Promise, in a synchronous-like manner. In this example, we create an async function that contains a for-await-of loop. The for-await-of loop is used to iterate over the array of values. The loop logs each value to the console. The use of the async keyword ensures that the loop will wait for each iteration to complete before moving on to the next one.

async function asyncIteration() {

    let array = [1, 2, 3];
   
    for await (const value of array) {
   
    console.log(value);
   
    }
   
   }
   
   asyncIteration();