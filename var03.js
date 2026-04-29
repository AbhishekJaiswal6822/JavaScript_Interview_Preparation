/* 
If the interviewer asks: "What is the difference between var and let?" > You say: "The main difference is their scope. var is function-scoped, meaning it is only confined by the boundaries of a function. It will leak out of if blocks or loops. let and const are block-scoped, meaning they are confined by any set of curly braces, like an if statement or a for loop. However, all three are confined by a function; nothing declared inside a function can be accessed from the outside."

If you are inside a function, but outside a specific block (like an if statement), you can still reach back "into" that block to grab a var. But you cannot do that for let or const.
*/

/*
1. Global Scope (The Universe)
Anything declared here (var, let, const) can be seen by everything below it (functions, if-statements, loops).

Access: Highest.

2. Function Scope (The Room)
var, let, and const are all trapped inside a function. None of them can be accessed from the global scope.

However, if you have an if block inside a function, a var declared inside that if can be seen anywhere else inside that same function (it "leaks" to the function level).

3. Block Scope (The Box)
This refers to curly braces {} in if, for, or while statements.

let and const are trapped inside the box.

var is NOT trapped; it jumps out of the box and goes up to the Function (or Global) level.
*/

// so i should explained to interviewer like let is blocked scope and var is fn scope 
// so let cant goes outside curly braces but var can goes outside curly braces but not outside fn is this answer right

/* 
prefer not to use var 
because of issue in blocked scope and fn scope
*/

// const
// var scope problem
// let fix scope problem
// const name = "Abhishek"
// age = 3
// city = "Bhayndar"
// state = "Maharashtra"

// console.table([name,age,city,state])

// SCENARIO: Checking a condition
// if (true) {
//     var greeting = "Hello!"; 
//     let secret = "I'm a secret";
// }

// console.log(greeting); // Result: "Hello!" (var leaked out!)
// console.log(secret);   // Result: ReferenceError (let stayed inside!)

if (true) {
    var one  = "can goes outside";
    let two = "will show refrence error"
    console.log(two)
}

console.table([one])