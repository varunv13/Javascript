// Arrays In JavaScript

// Way of declaring an array in javascript
const myArray = [0, 1, 2, 3, 4, 5]
// In JavaScript, the arrays are resizeable

console.log(myArray); // will print the entire array
console.log(myArray[2]); // will print element present at the [index]

// There are other ways to declare an array, like this :
const myArray2 = new Array(1, 2, 3, 4, 5)
console.log(myArray2);

// some methods which we can use for arrays

// 1. push -> values get added into the array from end
myArray2.push(10)
myArray2.push(20)

console.log(myArray2);

// 2. pop -> values get deleted from the end
myArray2.pop();
console.log(myArray2);

// 3. unshift -> similar like push, places value at the begining of the array
myArray2.unshift(0)
console.log(myArray2);

// 4. shift -> similar like pop, removes the value at the beginning of the array
myArray2.shift();
console.log(myArray2);

// 5. includes -> gives boolean value, tells wheather the particular element is in the array or not
console.log(myArray2.includes(9));

// 6. indexOf -> gives the index of the element present in the array, returns -1 for all the number which are
// not present in the array but are asked to show. For eg: console.log(myArray2.indexOf(19)) will give -1 as 19 is 
// not present in the array
console.log(myArray2.indexOf(4));

// 7. join -> will bind the array and converts it into string
const newArr = myArray2.join()
console.log(newArr);
console.log(typeof(newArr));

// 8. slice -> will give all the values from the starting index till the ending index, i.e, givenLastIndex - 1 value
console.log("A ", myArray);

const myNewArr = myArray.slice(1, 3)
// no changes in the original array
console.log("B ", myArray);
console.log(myNewArr);

// 9. splice -> will give all the values from the starting index till the given ending index
console.log("C ", myArray);

const myAnotherArr = myArray.splice(1, 3)
// but this will alter the original array
console.log("D ", myArray);
console.log(myAnotherArr); // will return the altered array value ,i.e, all the values from the 1st to 3rd index