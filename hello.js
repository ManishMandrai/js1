// Primitive Data Types
let name = "Manish";        // String
let age = 23;               // Number
let bigNum = 123456789n;    // BigInt
let isStudent = true;       // Boolean
let city;                   // Undefined
let car = null;             // Null
let id = Symbol("id");      // Symbol

console.log(name, typeof name);   // "Manish" string
console.log(age, typeof age);     // 23 number
console.log(bigNum, typeof bigNum); // 123456789n bigint
console.log(isStudent, typeof isStudent); // true boolean
console.log(city, typeof city);   // undefined "undefined"
console.log(car, typeof car);     // null "object" (JS quirk)
console.log(id, typeof id);       // Symbol("id") symbol

// Non-Primitive Data Types
let user = { name: "Manish", age: 23 }; // Object
let numbers = [1, 2, 3, 4];             // Array
function greet() { return "Hello World"; } // Function

console.log(user);
console.log(numbers);
console.log(greet());
