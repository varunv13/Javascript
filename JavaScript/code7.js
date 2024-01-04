// Numbers and Maths

// defining a number in JavaScript
const num = 400
console.log(num);

// Explicit way of defining a number
const balance = new Number(400)
console.log(balance);
console.log(balance.toString().length); // -> converts the number to string, thus getting the string's property

console.log(balance.toFixed(2)); // provides number of digits after decimal
// returns strings

const otherNumber = 23.45643
console.log(otherNumber.toPrecision(3)); // gives precised value upto (n) number of digits
// returns strings

const val = 100000000
console.log(val.toLocaleString('en-IN')); // displays the value with comma, resultant is in string


// Maths library comes as a default library in JavaScript
console.log(Math.random()); // gives a value which lies between 0 and 1

// Two Math methods can work together
console.log(Math.floor(Math.random() * 10) + 1); // if we want value above 1 then we add (+ 1)

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // here, +min means value will be aove min value