// Destructuring allows you to extract values from objects and arrays and assign them to separate variables. In this example, we have an object person with three properties: name, age, and address. We use destructuring to extract the values of name, age, and city properties and assign them to separate variables. This will log the values "John Doe", 30, and "San Francisco" to the console.


let person = {

    name: "John Doe",
   
    age: 30,
   
    address: {
   
    street: "123 Main St",
   
    city: "San Francisco",
   
    state: "CA",
   
    },
   
   };
   
   let { name, age, address: { city } } = person;
   
   console.log(name); 
   
   console.log(age); 
   
   console.log(city); 