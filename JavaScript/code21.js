// Iterations

// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;   
//     console.log(element);
// }

// while loop
// let i = 19
// while (i < 20) {
//     console.log("nice");
//     i++;
// }


// do - while
// let i = 1;
// do {
//     console.log("Yo");
//     i *= 2;
// } while (i <= 20);

// for of
const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {     // same as foreach in java
//     console.log(num);        // can be applied on arrays, as well as strings
// }
const greetings = "Hello World"
// for (const char of greetings) {
//     console.log(char);
// }

// Maps  -> they are not iterable hence, forin loop will not work
const map = new Map()
map.set('IN', "India")
map.set('RS', "Russia")
map.set('JP', 'Japan')
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key,' :- ', value);
// }

// const myObject = {
//     'manga1': 'OPM',
//     'manga2': 'OP',
//     'manga3': 'NS',
//     'manga4': 'DBZ'
// }

// for (const key in myObject) {
//     // console.log(myObject[key]); // this will give me values of the key
//     // console.log(key);       // this will only give me key
    
// }


// callback function doesn't have name 
// arr.forEach( function (item) {
//     console.log(item);
// }) 


// arr.forEach(element => {
//     console.log(element);
// });

const myCoding = [
    {
        languageName: "java",
        fileName: ".java"
    },
    {
        languageName: "python",
        fileName: ".py"
    },
    {
        languageName: "javascript",
        fileName: ".js"
    },
    {
        languageName: "typescript",
        fileName: ".ts"
    }
]

myCoding.forEach( (objs) => {
    console.log(objs.languageName);
});