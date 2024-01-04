// Functions In JavaScript

// declaring a function
function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("J");
}

sayMyName // this is just a reference, will not give anything on executing
sayMyName() // '()' executes the reference


function addTwoNums(number1, number2){ // number1, number2 are termed as parameters
    console.log(number1 + number2);
}

addTwoNums(3, 3) // will give number type output,
// values passed are termed as arguements

addTwoNums("3", "3") // will give string type output
addTwoNums(3, "4") // will also give string type output

function addTwoNums2(number1 , number2){
    return number1+number2;
}

const result = addTwoNums2(3, 6) // returned values get stored into a variables
console.log("Result is: ", result);

function loginUserMessage(username){
    if(!username){
        return "Please, enter valid username"; 
    }
    else return `${username} just logged in!`;
}

console.log(loginUserMessage("Raj"));

// if no value is passed then return statement returns undefined.
// console.log(loginUserMessage()); // -> will give undefined just logged in! as an output
// To overcome this, we use conditional statement
console.log(loginUserMessage("Varun"));
console.log(loginUserMessage());