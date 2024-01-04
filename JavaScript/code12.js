// Creating an object using constructor

const jsUser = new Object() // this is a singleton object

// insertng values inside an object in key value pairs
jsUser.id = "13AP03"
jsUser.name = "Raj"
jsUser.female = false


// creating an objects inside an object
const regularUser = {
    email: "pompom@xmail.com",
    fullName: {
        firstName: "Varun",
        lastName: "Verma"
    }
}

// We can also insert an object created using Object literal inside a singleton object
jsUser.user = regularUser

// Accessing objects
console.log(regularUser.fullName);
// Accesing nested objects
console.log(regularUser.fullName.firstName);
console.log(regularUser.fullName.lastName);

// console.log(jsUser);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "C", 4: "D"}

// To merge two objects, we use Object.assign().
const obj3 = Object.assign({}, obj1, obj2) // Here, {} is used as it's considered as a good practice
// Once this method is envoked, the merged object gets inside the very first object
// so, we use an empty object, i.e., {}, such that after merging the objects get into the empty object
console.log(obj3);

const obj4 = Object.assign(obj1, obj2) // we can also use it without {}
console.log(obj4 === obj1); // here, the value of obj1 and obj4 are exactly the same

// The simplest way to merge/combine two objects are using (...obj) operator
const obj5 = {...obj1, ...obj2}
console.log(obj5);


console.log(jsUser);
// We can get Object's keys and values using Object.keys(objectName) & Object.values(objectName)
// The output will be in array format
console.log("Keys are: " , Object.keys(jsUser)); 
console.log("Values are: ", Object.values(jsUser));

// entries shows key: value pairs in an array form,
// output will be in an array format, where each value pair is also inside it's own array. Something like this -> [[key1, value1], [key2, value2]]
console.log("Entries are: ", Object.entries(jsUser));