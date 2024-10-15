// A Map is an ordered collection of key-value pairs, while a Set is an unordered collection of unique values. In this example, we create a Map and use the set method to add two key-value pairs. We use the get method to retrieve the value associated with a specific key and the size property to get the number of elements in the Map. We also create a Set and use the add method to add two values. We use the has method to check if a value exists in the Set and the size property to get the number of elements in the Set

let map = new Map();

map.set("key1", "value1");

map.set("key2", "value2");

console.log(map.get("key1")); 

console.log(map.size); 

let set = new Set();

set.add("value1");

set.add("value2");

console.log(set.has("value1")); 

console.log(set.size); 

