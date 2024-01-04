// Primitive and Non-Primitive Data Type

// Primitive: 7 Types
// 1. String
// 2. Number (integer, float, double all comes into number)
// 3. Boolean 
// 4. Null (means empty)
// 5. Undefined 
// 6. Symbol 
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // values won't be same for each of them
// 7. BigInt

// Non-Primitive (Reference Type): Reference of these data types can be allocated in the memory
// 1. Arrays
const heroes = ["shaktiman", "ben 10", "Oggy"];

// 2. Objects => anything inside {} are considered objects
let myObj = {
    name: "varun",
    age: 18
}

// 3. Functions => can also be treated as a variable

const myFunc = function () {
    console.log("Hello Varun");
}

console.log(myFunc);

// [Note]: JavaScript is Dynamically Typed Language
// A variable doesn't need to be associated with a data type, we can directly assign the data type value into tha varible


// +++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++++++//

// Primitive -> goes to stack -> Stack Memory gets used
// in stack, we get a copy of the value, hence altering the copied value doesn't make any changes in the original value

// Non-Primitive -> goes to heap -> Heap Memory gets used

// this get's allocated into the heap
// we get reference of the value, if we put anything in the heap
// hence any change in the reference of the value means altertering the original value
let userOne = {
    email: "user@outlook.com",
    id: "user123"
}

let userTwo = userOne;
userTwo.email = "raj13@gmail.com" // will change the email for both the users

console.log(userOne.id);