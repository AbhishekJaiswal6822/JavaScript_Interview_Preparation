/*
Immediately Invoked Function Expression (IIFE)  
IIFE SYNTAX ()() use two parantesis fist one for fn declrataion and second one for fn execution

how to use two IIFE end first iife with semi-colon ;
🌟 The 3 Pillars of IIFE BenefitsBenefitWhy it matters
1. Runs Exactly OnceExecutes immediately when parsed. Ideal for setup scripts, configurations, or initializations that you only need to perform once.
2. Protects Global ScopeCreates a local private scope. Variables inside do not leak out, preventing name collisions or accidental overwrites across different script files.
3. Saves Memory SpaceOnce the execution is complete, 
the function and its internal variables are discarded by the garbage collector, freeing up system memory.

The short answer is: Scope and State Privacy. Let's break down the exact reasons why developers use IIFE, even in the modern era of let and const.

1. The Main Reason: Protecting the Global Scope
In JavaScript, variables declared with var, or even functions themselves, can "pollute" the global scope. If two different script files (like your Marathon project and a third-party plugin) use the same variable name, they will overwrite each other.

An IIFE creates an isolated scope (a "private room") for your code.

JavaScript
// Global Scope
let appName = "Sprints Saga";

// IIFE Scope - safe and isolated
(function() {
    let appName = "Internal Dashboard"; // Doesn't overwrite the global one
    console.log(appName); // Output: Internal Dashboard
})();

console.log(appName); // Output: Sprints Saga
2. The "Expression + Execution" Lifecycle
Function Expression / Arrow Function:
You define the function, and then you have to call it later on a separate line. It stays in memory until the garbage collector clears it or until you call it.

IIFE (Immediately Invoked Function Expression):
It is defined and executed all at once. Once it runs, the internal variables are processed, and the memory is freed up immediately.

JavaScript
// This function runs once, sets up initial data, and leaves no global footprint
const initData = (() => {
    let internalConfig = "prod_mode";
    return { config: internalConfig };
})();
3. Why not just use curly braces {} and let/const?
You might be thinking: "I can just use block scope { let x = 1; } to hide variables now!"

While block scope works for simple variables, it does not work for asynchronous setups, IIFE-specific patterns like the Module Pattern, or older codebases. Before ES6 (pre-2015), IIFEs were the only way to achieve scope privacy. Today, we still use them when we want to execute an initialization script exactly once without leaving any references or variables behind in the parent scope.
*/

// named iife 

(function db(){
    console.log("DB Connected")
}) ();

((name)=>{
    console.log("DB Connected", name)
})("Abhishek")


// Global Scope
let appName = "Sprints Saga";

// IIFE Scope - safe and isolated
(function() {
    let appName = "Internal Dashboard"; // Doesn't overwrite the global one
    console.log(appName); // Output: Internal Dashboard
})();

console.log(appName); // Output: Sprints Saga