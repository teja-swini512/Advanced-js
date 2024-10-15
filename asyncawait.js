// Promise Creation:
// Two promises are created: one resolve immediately with “Hello”, and the other resolves after 1 second with ” GeeksforGeeks..”.
// Combining Promises:
// The Promise.all() method combines both promises into a single promise, combined_promise.
// Asynchronous Function:
// The display() function is declared as async, indicating it contains asynchronous operations.
// Awaiting Promise Resolution:
// The await keyword pauses execution until combined_promise is resolved.
// Logging Result:
// The resolved array from combined_promise is logged to the console.



function asynchronous_operational_method() {
    let first_promise = 
        new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = 
        new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    let combined_promise = 
        Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}

display();