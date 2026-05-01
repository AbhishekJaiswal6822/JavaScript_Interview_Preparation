/*
🖥️ Technical Note: The JavaScript Call Stack
1. What is the Call Stack?
The Call Stack is a fundamental mechanism used by the JavaScript engine (such as V8 in Chrome or Node.js) to keep track of function calls in your program. It operates on the LIFO (Last In, First Out) principle.

JavaScript is a single-threaded language, meaning it can only do one thing at a time. The call stack tells the engine exactly where it is in the execution process and which function needs to run next.

2. Core Concepts & Terminology
The LIFO Principle
Think of the call stack like a stack of plates in a cafeteria:

Push: When you put a new plate on top of the stack.

Pop: When you take the top plate off the stack.

In programming:

Last In: The most recently called function is placed at the top of the stack.

First Out: That same function must finish executing before the engine can go back to the function below it.

Types of Execution Context
Global Execution Context: Created when the script initially loads. It sits at the very bottom of the stack.

Function Execution Context: Pushed onto the stack when a function is invoked, and popped off when the function returns.

3. Call Stack Lifecycle
The engine follows a sequential lifecycle for function management:

+--------------------------------------------------------+
| 3. Function Return (Pop)                               |
| The engine removes the function context from the top.  |
+--------------------------------------------------------+
                            |
                            v
+--------------------------------------------------------+
| 2. Function Invocation (Push)                          |
| A new function context is placed at the top of the     |
| stack and executed.                                    |
+--------------------------------------------------------+
                            |
                            v
+--------------------------------------------------------+
| 1. Initial State (Global Context)                      |
| The global execution context is placed at the bottom.  |
+--------------------------------------------------------+
4. Execution Trace Example
Let's look at how the stack handles a set of nested functions:

JavaScript
function first() {
    console.log("Inside First");
    second();
    console.log("Back to First");
}

function second() {
    console.log("Inside Second");
}

// Invoke the first function
first();
The Call Stack Trace:
Initial state: The engine reads the script, and the Global() context is pushed to the stack.

Calling first(): first() is pushed onto the top of the stack.

Execution step: console.log("Inside First") executes.

Calling second(): second() is pushed onto the top of the stack.

Execution step: console.log("Inside Second") executes.

Return from second(): second() completes, is popped off the stack, and control returns to the line after the invocation in first().

Resuming first(): console.log("Back to First") executes.

Return from first(): first() completes, is popped off the stack, and the stack returns to its empty, global state.

5. Error Scenario: Stack Overflow
The call stack has a fixed amount of memory allocated to it. If the number of function calls exceeds this limit, the engine throws a RangeError: Maximum call stack size exceeded.

Common Cause: Infinite Recursion
JavaScript
function recursiveFunction() {
    // Missing base case causes infinite execution
    recursiveFunction(); 
}

recursiveFunction(); // Triggers Stack Overflow
Why this happens: Each call adds another frame to the stack without returning, filling up memory until the system crashes.

6. Summary for Technical Interviews
When an interviewer asks about the Call Stack, you can use the following summary to demonstrate your knowledge:

"The call stack is a LIFO (Last In, First Out) data structure that keeps track of the execution context of functions. When a function is called, it is pushed onto the stack; when it returns, it is popped off. It ensures the synchronous, single-threaded execution of JavaScript code."
*/