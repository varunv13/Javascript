// Types of functions

// Arrows Functions

const user = {
    username: "Varun",
    price: 999,
    
    // this is a keyword, referring to the current context/value present in the particular block
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // here, referring to the username present above
        console.log(this); // 'this' is referring to all the keys of the object
    }
}

user.welcomeMessage()
user.username = 'Raj'
user.welcomeMessage()


// In Browser, the global object is the window object.
// Hence, while doing console.log(this) in the browser, we get all the events which are the part of the window object

function chai(){
    const username = "varun"
    // console.log(this.username); will not execute, this will be used inside objects only

}
// chai()


// Arrow function is written like this
const Chai = () => {
    let userName = "varun"
    console.log(userName);
}

// Chai()

// () => {} ... this is the syntax of arrow function
// it can be held inside a variable
const addNums = (num1, num2) => {
    return num1 + num2
}

// console.log(addNums(2, 4));

// another way to use arrow function is using implicit return, only works when there's a single statement 
const AddNums = (num1, num2) => ( num1 + num2 )
console.log(addNums(7, 4));

