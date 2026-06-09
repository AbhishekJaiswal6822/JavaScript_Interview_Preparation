
/* ++++++++++++++-------------------- THIS -------------------++++++++++++++++++++++++++++++++
"In JavaScript, this is a keyword that acts as a dynamic reference pointer pointing to the current Execution Context.
 Unlike variables that are lexically bound, the value of this inside a non-arrow function is determined dynamically at runtime based on 
 how the function is executed, not where it was written.

We can classify its behavior into four primary execution rules:

Global Context: At the top level of a script, this points to the environment's global object. In a browser environment, that is the window object. In a Node.js environment, because each file is treated as an isolated module, top-level this points to a clean, empty module exports object ({}).

Implicit Object Binding: When a function is invoked as a method inside an object—for example, user.logProfile()—this implicitly binds to the object left of the dot.

Explicit Binding: We can manually hijack and force the execution context using call(), apply(), or bind(), passing in the exact memory box we want this to point to.

Lexical Binding (Arrow Functions): Arrow functions are the major exception. They don't possess their own this context. Instead, they look outward and lexically inherit this from their surrounding parent scope at the moment they are compiled."
"In Node.js, each file is treated as a module. The top-level this refers to module.exports, not the global object. Furthermore, variables declared with var in a Node module are local to that module and do not attach to the global object, unlike in a browser environment where they attach to the window object."


The difference is Static vs. Dynamic. Using user.name is hardcoding the object name. Using this allows the code to be flexible and reusable.1. The Reusability ProblemImagine you have 100 runners in your Sprints Saga India project. You don't want to write a separate function for every single runner by name.
 You want one function that works for whoever is calling it.Using Dot Notation (Hardcoded):JavaScriptconst runner1 = {
    name: "Abhishek",
    greet: function() {
        console.log(`Hello, ${runner1.name}`); // ❌ Bad: If we rename 'runner1', this breaks!
    }
}
Using this (Dynamic):JavaScriptconst runner1 = {
    name: "Abhishek",
    greet: function() {
        console.log(`Hello, ${this.name}`); // ✅ Good: 'this' always points to the current object.
    }
}
2. The "Context" AdvantageThe real power of this is that it changes based on who is calling the function. 
Look at this example:JavaScriptfunction showName() {
    console.log("My name is: " + this.name);
}

const userA = { name: "Abhishek", info: showName };
const userB = { name: "Anurag", info: showName };

userA.info(); // Output: My name is: Abhishek
userB.info(); // Output: My name is: Anurag
In the example above, the function showName is written once, but because it uses this, it knows which object it belongs to at the moment it is called. If you had used userA.name inside the function, it would always say "Abhishek," even for Anurag!3. Summary: When to use which?ApproachWhen to use it?Real-world AnalogyDot Notation (user.name)When you are outside the object looking in.You calling your friend by their name from across the street.this (this.name)When you are inside a method of the object.Your friend referring to themselves as "I" or "Me."

Summary for your Interview
"Hardcoding a variable name inside an object method creates a static reference that is fragile and hard to reuse.
 Using this creates a dynamic context, allowing the function to remain flexible and refer to whatever object is currently executing it. 
 This is essential for writing scalable code and using patterns like Constructors or Classes."
*/

// console.log(this) // node empty obj , browser returns window object

// const user = "Abhishek";

// console.log(this.user);   // undefined (checking module.exports)
// console.log(global.user); // undefined (var doesn't attach to global in Node modules)


const user = {
    name: "Abhishek",
    age: 35,
    welcomeMessage: function(){
        // console.log(`${this.name}, welcome to the website`)
        // console.log(this) // refers to the current context and current value
    }
}
user.welcomeMessage()


/* 
Inside a function (specifically an object method), this is your best friend. Outside, in the global scope of a Node.js file, this is a stranger.

1. Why it belongs inside the Function
Inside welcomeMessage, this acts as a dynamic pointer. It says: "Look at whoever is currently calling me." Since user is the one calling the function, this points to user, and you can grab the name easily.

2. Why it fails Outside (Node.js)
When you are just sitting out in the open file (Global/Module scope), this doesn't point to your user object. It points to module.exports.

Since user wasn't added to module.exports, this.user is undefined.

Trying to read .name of undefined is why the code crashes.

The Final "Interviewer" Summary
If you are asked about this in your TCS or tech interview, here is the expert way to explain it:

"The keyword this should primarily be used inside object methods to refer to the object's own properties. In the global scope of a Node.js environment, this refers to the exports object, not the local variables. Therefore, to access a global variable, we should refer to it directly by name instead of using this."
*/


const marathon = {
    location: "Pune" ,
     distance: "42km",
      getDetails: function(){
        console.log(`The marathon in ${this.location} is ${this.distance} long.`)
     }
}

// marathon.getDetails()

const product = {
    itemName: "Laptop",
    price: 50000,
    showPrice: function() {
        // STEP 1: Create your 'ID Card' here (const self = ...)
        console.log(this)
        const self = this
        function display() {
            // STEP 2: Use that variable here instead of 'this'
            console.log(`The price of ${self.itemName} is ${self.price}`);
            // console.log(`The price of ${this.itemName} is ${this.price}`);
        }
        display();
    }
};

// product.showPrice();

const student = {
    studentName: "Abhishek",
    rank: 1,
    getProfile: function(){
        const firstLevel = () =>  {
            const secondLevel = () =>{
                console.log(this.studentName)
            }
            secondLevel()
        }
        firstLevel()
    }
}

// student.getProfile()

const runner = {
    name: "Abhishek", speed: 10,
    increaseSpeed : function (num){
        this.speed = (num+this.speed)
    },
    status: function(){
        console.log(`${this.name} is running at ${this.speed} km\h`)
    }
}
// runner.increaseSpeed(50)
// runner.status()
// console.log(runner.speed)/

const calculator = {
    a: 10,
    b: 5,
    add: function() {
        // 1. Create this.result and set it to a + b
        this.result = this.a + this.b
        return this.result
        // 2. return this.result
    }
};

console.log(calculator.add()); // Should show 15
console.log(calculator.result); // Should now exist and show 15

console.log("This is This")

// =========================================================================
// 1️⃣ GLOBAL CONTEXT (Top of File)
// =========================================================================

// In Node.js, top-level 'this' points to an empty module exports object.
// In a browser, it would point to the massive 'window' object.
console.log("--- 1. Global Context ---");
console.log("Global 'this' in Node.js:", this); // Output: {}
console.log("Is top-level 'this' equal to global container?", this === global); // Output: false


// =========================================================================
// 2️⃣ IMPLICIT OBJECT BINDING (Object Method)
// =========================================================================
console.log("\n--- 2. Implicit Binding ---");

const runner1 = {
    username: "Abhishek",
    bibNumber: 11,
    logProfile: function() {
        // 'this' implicitly binds to the object left of the dot at runtime
        console.log(`[Implicit] Runner: ${this.username} | BIB: ${this.bibNumber}`);
    }
};

// Invocation: 'runner' is to the left of the dot, so 'this' = runner object box
runner1.logProfile(); 


// =========================================================================
// 3️⃣ EXPLICIT BINDING (call, apply, bind)
// =========================================================================
console.log("\n--- 3. Explicit Binding ---");

function displayRaceStatus(location, status) {
    // This standalone function has no natural parent object. 
    // We will explicitly force 'this' to point to any data block we want.
    console.log(`[Explicit] ${this.username} (BIB: ${this.bibNumber}) is running in ${location}. Status: ${status}`);
}

const customUser = {
    username: "Jay",
    bibNumber: 24
};

// A. .call() -> Pass the context object, followed by arguments separated by commas
displayRaceStatus.call(customUser, "Pune", "Active");

// B. .apply() -> Pass the context object, followed by arguments packed in an Array
displayRaceStatus.apply(customUser, ["Mumbai", "Finished"]);

// C. .bind() -> Does not execute right away. It creates a brand-new permanent function copy
const boundFunction = displayRaceStatus.bind(customUser, "Thane", "Registered");
boundFunction(); // Executed later


// =========================================================================
// 4️⃣ LEXICAL BINDING (Arrow Function)
// =========================================================================
console.log("\n--- 4. Lexical Binding (Arrow Functions) ---");

const standardUser = {
    username: "Sanjay",
    
    // Regular Method: Gets its own dynamic 'this' context from standardUser
    regularMethod: function() {
        console.log("Regular Method 'this.username':", this.username); // Output: Sanjay
    },

    // Arrow Method: Does NOT get its own context. Inherits 'this' from global scope frame
    arrowMethod: () => {
        console.log("Arrow Method 'this.username':", this.username); // Output: undefined
        console.log("Arrow Method 'this' is inheriting:", this);     // Output: {} (Global empty object)
    }
};

standardUser.regularMethod();
standardUser.arrowMethod();


// =========================================================================
// ⭐ BONUS: THE STANDALONE / STRICT MODE FALLBACK
// =========================================================================
console.log("\n--- Bonus: Standalone Function Behavior ---");

function standaloneFunction() {
    // Regular standalone functions fallback to the global execution context 
    // (the 'global' object in Node, 'window' in browsers)
    console.log("Standalone function 'this' equals global object?", this === global); // Output: true
}

standaloneFunction();

function strictStandaloneFunction() {
    "use strict";
    // In strict mode, the runtime completely disables the global fallback safety net
    console.log("Strict Mode standalone function 'this':", this); // Output: undefined
}

strictStandaloneFunction();