// Objects 

// Objects can be declared in 2 ways:
// 1. Object Literal            2. Constructor
    // const jsUser = {}            // Object.create
    // Object created like,         // Object created via constructors are called singletons 
    // this can have many instances.
    
 
// declaring a Symbol and using it as a key
const mySym = Symbol("key1")

const jsUser ={
    name: "Varun",  // objects are associated in key: value pairs
    age: 21,        // keys are considered as a string in javascript
    location: "Howrah",
    email: "varun@xmail.com",
    female: false,
    lastLogin: ["Monday", "Wednesday"],
    "full name": "Varun Verma",
    [mySym]: "myKey1" // referencing to the above Symbol 
}

console.log(jsUser.age); // to access the object we can use objectName.key
// Another way to access the objects are using [""] method
console.log(jsUser["full name"]);
console.log(jsUser["lastLogin"]);
console.log(jsUser[mySym]);

// To change the value of the object
jsUser.age = 18
// Object.freeze(jsUser) // locks the object, such that no changes can be propogate inside the object
// jsUser.name = "VarunV"

console.log(jsUser);

// Adding a function in the object
jsUser.greeting = function () {
    console.log("Hello, World!");
}

jsUser.greeting2 = function () {
    console.log(`Hello, World!, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());