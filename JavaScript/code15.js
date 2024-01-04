// rest and spread operator (...) are same, they just differ by the way they are used in javascript

function calculateCartPrice(val1, val2, ...num1){ // num1 here, depicts the an array which is storing the remaining elements which don't have their own parameters
    return num1 
}

console.log(calculateCartPrice(100, 200, 300, 400, 500));

// object passed and used in a function
const user = {
    userName: "Varun",
    price: 200
}

function handleObjects(anyObject) {
    console.log(`UserName is ${anyObject.userName} and it's price is ${anyObject.price}`);
}

handleObjects(user)

// we can directly pass an object and array inside a function
handleObjects({
    userName: "Raj",
    price: 1200
})
// Output:- UserName is Raj and it's price is 1200

