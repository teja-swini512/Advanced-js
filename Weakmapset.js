// A WeakMap is a collection of key-value pairs where the keys are objects and the values can be any value. A WeakSet is a collection of objects. Unlike Map and Set, the entries in a WeakMap or WeakSet do not prevent the objects from being garbage collected. In this example, we create a WeakMap and use the set method to add a key-value pair. We use the has method to check if the key exists in the WeakMap. We then set the key to null, which makes it eligible for garbage collection. We check the has method again and it returns false, as the key has been garbage collected. We also create a WeakSet and use the add method to add a value. We use the has method to check if the value exists in the WeakSet. We then set the value to null, which makes it eligible for garbage collection. We check the has method again and it returns false, as the value has been garbage collected.



let weakMap = new WeakMap();

let key = {};

weakMap.set(key, "value");

console.log(weakMap.has(key)); 
key = null;

console.log(weakMap.has(key)); 

let weakSet = new WeakSet();

let value = {};

weakSet.add(value);

console.log(weakSet.has(value)); 

value = null;

console.log(weakSet.has(value)); 