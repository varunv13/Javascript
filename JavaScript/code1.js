// variables and constants
// values assigned to these variables get stored in the memory


// To declare a variable as constant, there is only one way
const accountId = 144553 // -> value cannot be changed here

// To declare a variables, there are two methods/ways
// let and var, although we don't use var anymore, because of issue in block scope and functional scope
let accountEmail = "varun123@gmail.com" // values can be over written

var accountPassword = "12345"

// we can also declare a variable like this
accountCity = "Howrah" // although it's a bad practice


// accountId = 2 -> this not allowed, gives TypeError

accountEmail = "raj123@gmail.com"
accountPassword = "21212121"
accountCity = "Kolkata"

let accountSuccessor; // JavaScript will find this value undefined if nothing is assigned to it

console.table([accountId,accountEmail,accountPassword,accountCity,accountSuccessor])