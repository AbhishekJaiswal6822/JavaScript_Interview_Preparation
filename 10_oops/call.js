// call ==> so call pass the current execution context to other function
//call ==> to hold the refrence
/*
so the usecase is if child fn is getting executed once it fully executed it gets removed from the call stack and 
it looses all the data or current context so the parent fn cant accessed it

to solve this problem we use call we explicitily call the fn and pass first parameter as this to hold the current context

interview answer
".call() is a built-in method in JavaScript that immediately invokes a function and takes an object as its first parameter to explicitly set the this keyword. Any additional arguments are passed directly to the function, separated by commas.

A major use case for .call() is preventing context loss on the Call Stack when a parent function executes a child function. Normally, if a child function runs standalone inside a parent, it defaults to the global context and its frame pops off the stack when it finishes, leaving the parent with no data.

To solve this, we use .call() on the child function and pass the parent's this context as the first parameter. This explicitly forces the child function's stack frame to execute directly inside the parent's memory boundary, allowing it to modify the parent's properties perfectly before it finishes."
*/

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
// console.log("Instane is",instance1)

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
// console.log(runnerOne)
// console.log(`Runner name is ${runnerOne.fullName} bib number is ${runnerOne.assignedBib} distance is ${runnerOne.distance}`)

const routeA = {
    location: "Bhayandar West",
    elevationGain: 120,
    getOverview: function(difficulty) {
        return `Route at ${this.location} has ${this.elevationGain}m elevation. Difficulty: ${difficulty}`;
    }
};

const routeB = {
    location: "Thane",
    elevationGain: 340
};