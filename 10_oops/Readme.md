.call() is an immediate execution engine: It hijacks the function, injects the context this, runs it on the stack right away, and leaves.

.bind() is a function factory: It doesn't run anything. It clones your original function, seals your specified this context inside that new clone, and hands it back to you as a reusable package.


Markdown
# JavaScript Getters and Setters (Accessor Property Descriptors)

Getters and Setters are specialized functions known as **accessor properties**. They act as **virtual gatekeepers** for an object's properties. From the outside, they look and behave exactly like normal data properties, but on the inside, they function as security guards, data validation networks, and formatting tools.

---

## 🚀 Core Real-World Use Cases

1. **Data Sanitization & Formatting:** Automatically converting or normalizing text inputs (e.g., forcing a user's input email to strict lowercase during registration to ensure account uniqueness in the database).
2. **Security & Data Masking:** Shielding sensitive raw data. For instance, storing an encrypted version of a password but returning a masked string (like adding a salt suffix or returning asterisks) when read.
3. **Validation & Protection:** Intercepting values before they enter memory to keep garbage data from crashing your application (e.g., throwing a validation error if a string assigned to an email property lacks an `@` symbol).
4. **Computed Properties:** Dynamically calculating and compiling property values on the fly when read, based on separate internal fields (e.g., combining `firstName` and `lastName` into a single `fullName` property).

---

## 🚨 The Infinite Loop Trap (Stack Overflow)

A classic mistake when implementing getters and setters is using the exact same property name inside the accessor definitions as the public property name itself. This creates a recursive loop that floods the browser's execution engine.

### ❌ Broken Architecture Execution
```javascript
class User {
    constructor(email) {
        this.email = email; // 1. Triggers the setter on initialization
    }

    get email() {
        return this.email; // Triggers the getter recursively
    }

    set email(value) {
        this.email = value; // 2. ❌ Triggers the setter AGAIN (Endless Loop)
    }
}
🧠 Behind the Scenes (BTS) Reality:
When line 3 executes, the engine jumps to the setter. Inside the setter, it encounters this.email = value. The engine views this as another attempt to mutate the email property and routes right back to the start of the setter.

This causes the function to call itself tens of thousands of times in a millisecond, drowning the browser's Call Stack frame memory space until the engine crashes with a RangeError: Maximum call stack size exceeded.

🛠️ The Fixes: Soft Privacy vs. Hard Privacy
To break the infinite stack recursion, the raw data must be written into and read from a completely separate variable name slot inside the memory heap.

1. The Underscore Naming Convention (_varName) — Soft Privacy
Adding an underscore character creates a brand-new variable name (e.g., _email). To the V8 engine, this is simply a separate storage address, which breaks the infinite loop.

Note: This is a human naming convention (gentleman's agreement). It does not make the variable truly private; developers can still bypass the gatekeeper and mutate user._email directly from the outside.

JavaScript
class User {
    constructor(email, password) {
        this.email = email; // Inbound entry point
        this.password = password;
    }

    // Inbound Guard (Setter)
    set email(value) {
        // Enforces lowercase sanitization and diverts storage to a separate slot name
        this._email = value.toLowerCase(); 
    }

    // Outbound Presenter (Getter)
    get email() {
        // Reads from the custom internal slot name safely
        return this._email; 
    }
}

const userOne = new User("Abhi@GmaIL.CoM", "abc");
console.log(userOne.email); // 🎉 Output: "abhi@gmail.com"
2. The Native Hash Syntax (#varName) — Hard Privacy
Introduced in modern JavaScript (ES2022+), placing a hash (#) symbol before the field variable name forces true engine-level encapsulation. The variable becomes completely invisible outside the class brackets. Bypassing the getter or setter to read or modify #variable directly will throw a compile-time crash.

JavaScript
class SecureUser {
    // 🔒 1. You MUST declare private fields at the top of the class
    #password; 

    constructor(password) {
        this.password = password;
    }

    set password(value) {
        this.#password = value; // Loop broken and locked down securely
    }

    get password() {
        return `${this.#password}abhishek`; // Custom data modification on delivery
    }
}

const secureApp = new SecureUser("abc");
console.log(secureApp.password); // Works perfectly through the gate: "abcabhishek"
// console.log(secureApp.#password); // 🚨 Direct bypass crash! SyntaxError
🧱 Old-School Object Tracking Syntax (Object.defineProperty)
Before modern classes were introduced in ES6, developers used function constructors and attached getters/setters via the native metadata property descriptor manager Object.defineProperty().

⚠️ Critical Order of Execution Rule:
You must define the property descriptors before performing the value assignments. If assignments are made at the top of the constructor, your getter/setter gateways won't exist yet to catch them.

JavaScript
function LegacyUser(email, password) {
    // 🌟 Step 1: Define the getter/setter properties first
    Object.defineProperty(this, "email", {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, "password", {
        get: function() {
            return String(this._password).toUpperCase(); // Safely casts to String
        },
        set: function(value) {
            this._password = value;
        }
    });

    // 🌟 Step 2: Trigger assignments last so they redirect cleanly into the gates above
    this.email = email; 
    this.password = password; 
}

const legacyApp = new LegacyUser("abhi@gmail.com", 123);
console.log(legacyApp.email); // 🎉 Output: "ABHI@GMAIL.COM"


```
# Call() methods 
// call ==> so call pass the current execution context to other function
//call ==> to hold the refrence
/*
so the usecase is if child fn is getting executed once it fully executed it gets removed from the call stack and 
it looses all the data or current context so the parent fn cant accessed it

to solve this problem we use call we explicitily call the fn and pass first parameter as this to hold the current context

## interview answer
".call() is a built-in method in JavaScript that immediately invokes a function and takes an object as its first parameter to explicitly set the this keyword. Any additional arguments are passed directly to the function, separated by commas.

A major use case for .call() is preventing context loss on the Call Stack when a parent function executes a child function. Normally, if a child function runs standalone inside a parent, it defaults to the global context and its frame pops off the stack when it finishes, leaving the parent with no data.

To solve this, we use .call() on the child function and pass the parent's this context as the first parameter. This explicitly forces the child function's stack frame to execute directly inside the parent's memory boundary, allowing it to modify the parent's properties perfectly before it finishes."
*/

``` javascript 


function setUserName(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUserName.call(this,username)  // call method explicitily called , why we use this as first parameter because once executed it
    // setUserName(this,username)  // setUserName does gets called but once it got called it got executed and then got realese from the call stack and loose the context so to holds refrence we have to use .call
    this.email=email
    this.password=password
}

const userDetails = new createUser("abhishek","abhi@gmail.com",123)
// console.log(userDetails)



function parentFn(username){
    this.username = username
}

function childFn(username,email,password){
    parentFn.call(this,username)
    this.password = password
    this.email = email
}

const instance1 = new childFn("abhishek","abhishek@gmail.com","123")
// console.log(instance1)

function formatRunnerProfile(name, bib){
    this.fullName = name.toUpperCase() 
    this.assignedBib = bib
}

class MarathonRunner{
    constructor(name, bib, distance){
        formatRunnerProfile.call(this,name,bib)
        this.distance = distance
    }
}

const runnerOne = new MarathonRunner("Abhishek",12,"50km")
console.log(runnerOne)
console.log(`Runner name is ${runnerOne.fullName} bib number is ${runnerOne.assignedBib} distance is ${runnerOne.distance}`)

```

# Bind() Method
## <!-- "bind() is a built-in method in JavaScript used for deferred or later execution. 
 For example, when an event listener callback needs to access properties from a class constructor 
 when a button is clicked in the future, we use bind().

What bind() fundamentally does is create a brand-new copy of the function with its internal this
 keyword permanently locked to the object context we pass into its first parameter. It also allows us to pass additional properties as arguments right after the context, baking those props into the function so they are preserved intact when the browser triggers the event asynchronously later." -->
 
``` javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button Clicked</button>
</body>

<script>
    class React{
        constructor(){
            this.library = "React";
            this.server = "https://localhost:3000"

            // requirement
            document.querySelector('button')
            .addEventListener('click',this.handleClicked.bind(this))

        }
        handleClicked(){
            console.log("Button Clicked!!!!!", typeof this)
            console.log(this)
            console.log("Type of " , typeof this)
        }
    }

const app = new React();

// Let's intercept what bind returns before giving it to a button
const whatBindReturned = app.handleClicked.bind(app);

console.log(typeof whatBindReturned); 
// 🖥️ Outputs: "function"
</script>
</html>

```