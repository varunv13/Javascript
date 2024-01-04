/* 
“Everything in JavaScript happens inside an Execution Context.”

It’s like a box having to 2 components.

1. Memory Component.
    
    This is the place where all the variables and functions are stored as key : value pairs.
    
    This component is also known as variable environment.
    
2. Code Component.
    
    This is the place where JavaScript code is executed one line at a time.
    
    This is also known as Thread of execution.
    

---

“JavaScript is a synchronous single-threaded language.”

Single-Threaded :-  JavaScript can only execute one command at a time.

Synchronous single-threaded :-  It can execute only one command at a time in a specific order.

That means, it can only go to the next line once the current line has been finished executing.

---

“What happens when a JavaScript program is executed ?”

A Global Execution Context is created.

Global Execution Context:

- The global execution context represents the environment in which the main program runs.
- It consists of both memory and code.
- It has two main phases: memory allocation (creation of variables and functions with **`undefined`** values) and code execution (where the code is actually executed).

```jsx
var n = 2;
function square(nums){
			var ans = nums * nums;
			return ans;
}
var square2 = square(n);
var square4 = square(4);
```

> The Execution Context is created in 2 phases.
> 
> 1. Memory Creation Phase.
>     1. Variable Initialization:
>         - In the memory allocation phase of the global context, variables are indeed assigned the value **`undefined`**, and functions are assigned their own code.
>         - JavaScript will allocate memory to all the variables and functions.
> 2. Code Execution Phase.
>     1. Value is assigned of the respective variables in this phase.
>     2. JavaScript is executed line-by-line.

An Execution Context is created for the above JavaScript code:

1. Memory Component:
    - Variables:
        - `n` (value: 2)
        - `square` (function definition)
        - `square2` (not assigned yet)
        - `square4` (not assigned yet)
    - Functions:
        - `square` (with the code defined in the given example)
2. Code Component:
    - The JavaScript code will be executed line by line, following the order in the provided example.
    
    | Memory Component | Code Component |
    | --- | --- |
    | n : (undefined) | var n = 2; |
    | square : (whole function code) | Execution Context For square |
    | square2 : (undefined) | var square2 = square(n); |
    | square4 : (undefined) | var square4 = square(4); |
    
    > “undefined” is a placeholder, it’s a special keyword in JavaScript.
    > 

---

When a function is invoke in JavaScript, a brand-new Execution Context is created having it’s own memory component and code component.

| Memory Component | Code Component |
| --- | --- |
| nums : (parameter with the value from the function call) | var ans = nums * nums; |
| ans : (undefined) | return ans; |

The returned value will go to the Global Execution Context.

Once the whole function is executed, the whole Execution Context for that instance of the function will be deleted.

---

JavaScript handles everything to manage the execution creation, deletion, by creating a stack called  `Call Stack`.

Whenever an Execution Context is created, it gets pushed into the stack, and once the operation is performed or the Execution Context gets deleted, it gets popped off.

They are only used for managing these Execution Context. 

> “ `Call Stack` maintains the order of execution of Execution Contexts.”
*/
    
