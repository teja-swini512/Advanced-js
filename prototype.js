// we created a constructor function called Person. We then created a new object using the Object.create() method and set the prototype of the object to the prototype of the Person constructor. We then added a method to the prototype of the Person constructor and called the method on the new object.

// As you can see, the prototype of an object is used to extend the functionality of the object. The prototype is a powerful tool that allows you to add methods and properties to an object without having to create new instances of the object.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create a new object
  let person = Object.create(Person.prototype);
  
  // Add a method to the prototype
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Call the method on the new object
  person.sayHello();