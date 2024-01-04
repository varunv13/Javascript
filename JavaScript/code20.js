// var keyword is completely global


// falsey values :-
// 1. false
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. "" -> empty string
// 6. null
// 7. undefined
// 8. NaN

// truthy values :-
// 1. "0" 
// 2. 'false' 
// 3. " "    -> anything added into string is a truthy value
// 4. []
// 5. {}
// 6. function() {}

// Nullish Coalescing Operator (??) : null underfined

let val1 = 5 ?? null; // will take null if no value is assigned
console.log(val1);