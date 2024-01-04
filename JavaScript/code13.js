// Object De-Structuring and APIs

// We can easily access the values from the object using de-structuring

const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh", 
    medium: "Online",
    rating: 10
}

const {price: value} = course // this is object de-structuring
console.log(value); // the value is like a variable which is storing object's value
// We just have to mention the keys which we want.
// Basically, it should also be in key value pairs.

// In JSon, it's also LIKE an object but without name, and it's key is also string and values are also string
// THEY ARE NOT EXACTLT OBJECTS. For example:

// {
//     "name": "VarunVerma",
//     "course": "JavaScript in Hindi",
//     "price": "free"
// }

// We can also get APIs in array format. For Example:
// [
//     {},
//     {},
//     {}
// ]

// Basically, JaSon are javascript object notation.