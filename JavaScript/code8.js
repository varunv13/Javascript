// Dates and Times

let myDate  = new Date() // date is an object in JavaScript

// They display date in different manner

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

console.log(typeof myDate); // it's an object

// creating a user-defined date in Javascript
let myCreatedDate = new Date(2023, 10, 16)
console.log(myCreatedDate.toDateString()); // In Javascript, the months starts from 0
// hence this ones output willbe Thus(Day) Nov(Month) 16(Date) 2023(Year)

let myNewCreatedDate = new Date(2023, 10, 16,13,13)
console.log(myNewCreatedDate.toLocaleString()); // gives time also as 1:13 pm

// Time stamps

let myTimeStamp = Date.now() // returns the current time stamp in milliseconds
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); -> converts milli seconds into seconds

let newDate = new Date()
// console.log(newDate.getMonth()); -> we can get the month of the year (obviously jo chal rha hoga)
// do remember that months are stored in 0th based indexed in JavaScript , hence it will also return value in 0th indexed place

