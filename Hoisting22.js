/*
When the Global Execution Context is created, it happens in two phases:

Memory Creation Phase: JavaScript scans your code for variables and functions.

If it sees a Function Declaration (function hello(){...}), it stores the entire function in memory immediately.

If it sees a Variable (const, let, or var), it allocates memory but does not store the value yet.

Execution Phase: The code runs line by line.

Why your code throws a ReferenceError
Because you used const, the variable expressionFunction is technically hoisted, but it is placed in the Temporal Dead Zone. 
It exists in memory, 
but JavaScript forbids you from touching it until the code actually reaches the line where it is initialized.

1. The Memory Phase Breakdown
When the JS Engine scans your file, it treats values differently based on how they were declared:

Function Declarations: JS reserves memory AND stores the entire function code immediately. This is why you can call them anywhere.

var Variables: JS reserves memory and stores the literal value undefined as a placeholder.

let & const Variables: JS reserves the memory space, but it does not store any value (not even undefined). It leaves it "uninitialized."

2. Why "Reserved but not Stored" leads to the TDZ
Because let and const have the memory reserved but nothing stored inside, if you try to access them, the engine says: "I know this variable exists, but it's empty and locked. I won't let you see it yet."

This "locked" state is the Temporal Dead Zone (TDZ).

3. The Execution Phase (The "Fill-up")
Once the memory is reserved, the Execution Phase starts. This is when JS actually "stores" the real values:

JavaScript
// --- Phase 1: Memory Reserved ---
// Phase 2: Execution starts line-by-line

console.log(name); // It looks at memory, sees "undefined", and prints it.
var name = "Abhishek"; // Now it replaces "undefined" with "Abhishek" in memory.

console.log(age); // It looks at memory, sees "Uninitialized", and CRASHES.
let age = 18; // If it hadn't crashed, it would store 18 here.

++++++++++++++++++++++ MY NOTES ++++++++++++++++++++++++++++++

so global execution context works in two phases



Memory creation phase and execution phase



in memory creation phase js scan the file and reserve spaace for the clarration for fn declaration it reserve as well as store the values for vardeclaration it reserves memory and store undefined for let and const it reserves memeory and doest store value it leaves it uninitialized tdz



so in execution phase even before the fn declaration fn can be called

and if same happend with var it will return undefined and const and let will return ReferenceError: Cannot access 'first' before initialization
*/

console.log(first) // undefined

var first = 1


// console.log(second) //ReferenceError: Cannot access 'second' before initialization
const second = 2

// console.log(third)  //ReferenceError: Cannot access 'third' before initialization
let third = 3


greet() // reserve memory space and store value even during memory creation phase
function greet(){
    console.log(`Hello Abhishek`)
}