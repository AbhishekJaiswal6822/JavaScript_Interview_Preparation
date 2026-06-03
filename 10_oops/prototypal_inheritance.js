function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

/*
This topic is called Prototypes and Prototype-based Inheritance in JavaScript.

If an interviewer asks you about this code or asks "How do prototypes work in JavaScript?", you can explain it in simple, clear, and structured stages.

1. The Core Concept in 1 Sentence
"In JavaScript, every function is actually an object under the hood, and it automatically gets a hidden property called a prototype. This prototype is simply a shared container where we store methods so that every new object instance can access them without duplicating code in memory."

2. The 3-Step Code Breakdown (Explain your example)
Walk the interviewer through the exact code you wrote using these clear bullet points:

The Constructor: createUser is a constructor function. When called with the new keyword, it creates a unique object instance with its own local data properties (username and score).

The Shared Methods: By attaching .increment and .printMe to createUser.prototype, we ensure these functions are created only once in memory, rather than being recreated for every single user.

The Lookup Chain: When we call chai.printMe(), JavaScript first checks if printMe exists directly inside the chai object. Since it isn't there, it automatically looks up the Prototype Chain to the master createUser.prototype container, finds it, and runs it using chai as the context for the this keyword.

3. The "Why It Matters" (The Senior Answer 🧠)
Interviewers love when you explain the architectural value of a concept. Tell them this:

"The main reason we use prototypes is Memory Optimization. If I have an application tracking 10,000 marathon runners, writing methods inside the constructor function copies those methods 10,000 times into the system's memory. By using the prototype object, the methods are stored exactly once, and all 10,000 instances simply reference that same memory slot."

4. The Modern Link (Bonus Points)
To seal your answer and show you understand modern development, add this final sentence:

"Even though we use modern ES6 class syntax in production today (like writing class User { ... }), under the hood it is just syntactic sugar over this exact same prototype delegation system."
*/


function InefficientRunner(name, score) {
    this.name = name;
    this.score = score;

    // BAD PRACTICE: Injecting the function directly inside the constructor
    this.printDetails = function() {
        console.log(`Runner ${this.name} has a score of ${this.score}`);
    };
}

// Creating 5,000 runners inside an array loop
const massiveRunnerArray = [];
for (let i = 1; i <= 5000; i++) {
    massiveRunnerArray.push(new InefficientRunner(`Runner_${i}`, i * 10));
}

function OptimizedRunner(name, score) {
    this.name = name;
    this.score = score;
}

// GOOD PRACTICE: Injecting the function EXACTLY ONCE into the prototype object
OptimizedRunner.prototype.printDetails = function() {
    console.log(`Runner ${this.name} has a score of ${this.score}`);
};

// Creating 5,000 runners inside an array loop
const smartRunnerArray = [];
for (let i = 1; i <= 5000; i++) {
    smartRunnerArray.push(new OptimizedRunner(`Runner_${i}`, i * 10));
}