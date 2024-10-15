// A Promise is a returned object representing the eventual completion or failure of an asynchronous operation. In this example, we create a new Promise using the Promise constructor. The constructor takes a callback function with resolve and reject parameters. We use the setTimeout function to wait for 1 second and then call resolve with a string value of "Success!". The returned Promise object has a then method that takes a success callback function as its argument. This function will be called if the Promise is resolved. The Promise object also has a catch method that takes an error callback function as its argument. This function will be called if the Promise is rejected. In this example, the Promise is resolved, so the then method logs the value "Success!" to the console.



let promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
   
    resolve("Success!");
   
    }, 1000);
   
   });
   
   promise
   
    .then(function (result) {
   
    console.log(result); 
   
    })
   
    .catch(function (error) {
   
    console.error(error);
   
    });