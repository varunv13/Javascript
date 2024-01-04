const firstArr = ["a", "b", "c"]
const secondArr = ["A", "B","C"]

firstArr.push(secondArr) // will push the entire array inside the first array
console.log(firstArr);  
firstArr.pop()

// const finalArr = firstArr.concat(secondArr) // will merge the two arrays
// console.log(finalArr);

// Another way to merge the array is by using spread operator
const finalArr = [...firstArr, ...secondArr]
console.log(finalArr);

// To check wheather the particular object or element is an array or not
// we use Array.isArray()
console.log(Array.isArray(finalArr)); // this will return true
console.log(Array.isArray("Varun")); // will return false

// To convert a string or an object into an Array we use Array.from()
console.log(Array.from("Varun"))

// another way to create an array
let a = 100
let b = 200
let c = 300

console.log(Array.of(a, b, c)); // creates an array of the variable a, b, and c