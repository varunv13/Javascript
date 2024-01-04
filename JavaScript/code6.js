// Strings

const name = "${}"
const repoCount = 10
// console.log(name + repoCount + " yo"); => old way to concatinate

console.log(`Using BackTicks like this, ${name} is used to insert a variable inside it`);
// this a new method called string interpolation. A modern way to concatinate a string

const newString = "     varun      "
console.log(newString.trim()); // trim() woeks only on whitespace characters

const url = "https://varun.com/varun%13verma"
console.log(url.replace('%13','-')) // gives https://varun.com/varun-verma

const gameName = new String('One-punch-man')
console.log(gameName.split('-')); // splits the string on the basis of whatever inside (' ')
// resultant is in array

