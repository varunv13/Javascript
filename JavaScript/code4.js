// Comparisons of Data Types

// console.log("2" > 1);  // here the string gets converted into number for comparison
// console.log("02" > 1);

console.log(null >= 0); // gives true
console.log(null == 0);  // gives false
console.log(null > 0); // gives false

// javascript changes null into number (in case of >= ) and in some cases it changes null into NaN (Not a Number)
// equality check (==) and comparisons (>, <, <=, >=) are different in javascript
// even there inner working is different

// strict check (===)
console.log("2" === 2); 
// strict check not only checks the value but also it's data type
// hence above code will give false, since they have different data types

console.log(3 === 3); // will give true
console.log("3" == 3) // compares whether the 2 values are same despite of different data types
