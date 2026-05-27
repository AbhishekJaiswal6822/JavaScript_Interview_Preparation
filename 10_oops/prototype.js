// let myName = "Abhishek"

// console.log(myName.length)

let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.abhishek = function(){
    console.log(`abhishek is present in all objects`)
}

Array.prototype.heyAbhishek = function(){
    console.log("Abhihek says hello")
}

// // heroPower.abhishek()
// myHeros.abhishek()
// myHeros.heyAbhishek()
// heroPower.heyAbhishek()

// inheritance 

const user = {
    name:"Abhishek Jaiswa",
    email: "abhi@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport= {
    makeAssignment: "JS Assingment",
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__= User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "Abhi          "

String.prototype.truelenght= function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`true lenght is ${this.trim().length}`)
}

anotherUsername.truelenght()
"tea".truelenght()

/*
"all the datatypes has it own prototype"

🎯 100% Correct. Arrays have Array.prototype, Functions have Function.prototype, and Strings have String.prototype.

"so Object is top level prottype... means that all the datatypes can access value of obj"

🎯 100% Correct. Because Array.prototype.__proto__ points to Object.prototype, the highway leads all data types to the top mountain.

"so prototypes is a mechanism where one obj or other data types can access props or mehods from other obj"

🎯 100% Correct. This is the exact definition of Prototypical Inheritance & Delegation.

"they can access from low to top"

🎯 100% Correct. It is a strict, directional, bottom-to-top lookup chain that terminates only when it hits null.

"new keyword is used to assigned empty obj to the curr instance or var then it linked the constructor fn with this keyword then it return the curr value to the var"

🎯 100% Correct. You nailed the 3-step memory timeline: Allocation ({}) ──> Context Binding (this) ──> Delivery (Instance assignment).
*/