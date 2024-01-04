// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
}) ();         // This is IIFE.  This is named IIFE

// We face problems/polutions while executiong a function because of global scope
// To remove the global scope polution, we use IIFE

// the first '()' resembles function defintion the second '()' is the function execution

// we have to apply ';' at the end, since we need to stop the execution of the code at some point

((name) => {
    console.log(`DB connected ${name}`);
}) ('Raj'); // This is unnamed IIFE