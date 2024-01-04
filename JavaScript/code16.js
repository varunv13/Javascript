// Global Scope And Local Scope

// {} -> this is scope, comes with a conditional statement or functional statement

let a = 10

if(true){
    let a = 20
    console.log("This is local/block scope, value of a is ", a);
}

console.log("This is global scope, value of a is ", a);

// In the nested functions, the child function can access the variables of the parent function
function one() {
    const userName = "Varun"
    two()

    function two() { 
        const website = "youtube"
        console.log(userName); // accessing the parent function's variables
    }

    // console.log(website); // the parent function cannot access the child function's variables

}

// one()

// In javascript, variables are very powerful, they can hold anything inside them
// addTwo(5) not allowed
const addTwo = function(num){
    return num + 2
}

addTwo(5) // This is a part of Hoisting, where we can not invoke a function before declaring it.
