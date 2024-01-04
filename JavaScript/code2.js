// datatypes and ECMA standards

"user strict"; // treats all JS code as newer version

// alert(3 + 4) -> we are using nodejs, not browser

let name = "Varun" // String Data Type -> ""

let age = 21 // Number Data Type
// Number range => 2 ^ 53 for this we use BigInt

let isLoggnedIn = true // boolean Data Type

let type = null // standalone value, it's an object
let typeAnother = undefined // value not assigned yet, typeOf undefined is undefined

// let reactRelatedDataType = Symbol; // to find the uniqueness between components

// typeOf -> gives data type of the variables


// Datatype conversion

let score = "33abc";
console.log(typeof score);

let valueInNumber = Number(score) // -> Number(variable) converts anyother datatype into number
console.log(typeof valueInNumber); // here it will show that string is converted into number

// don't rely on number incase of JavaScript
console.log(valueInNumber); // but when printing the converted number we are getting NaN


// "33" => 33
// "33ABC" => NaN
// true => 1, false => 0
// 1 => true, 0 => false
// "" => false (empty string)
// "not empty string" => true
