/*
1. The "Exit Door" Rule (Unreachable Code)
The return keyword acts as a hard stop for the function. Once JavaScript encounters a return statement, it immediately exits the function and ignores everything else inside that block.

Logic: Think of it as the "Finish Line." Once the runner crosses it, the race is over.

The "Dead Code" Effect: Any code written after the return is called Unreachable Code. Most modern code editors (like VS Code) will gray this code out to warn you.

JavaScript
function calculateDiscount(price) {
    return price * 0.9; // Function exits here
    console.log("This will never run!"); // Unreachable
}
2. The "Storage" Rule (Persistent Values)
To "capture" the work a function has done and save it for later use (in a variable, a database, or a React state), you must return the value.

The undefined Default: If a function performs a task but has no return statement, it automatically hands back undefined.

Side Effect vs. Result:

Side Effect: Using console.log() inside a function. It shows you the value but doesn't "give" it to the rest of the program.

Result: Using return. It passes the value out so it can be stored in a variable.

JavaScript
function getUsername() {
    return "Abhishek"; 
}

const user = getUsername(); // The value "Abhishek" is now stored in 'user'
console.log(`Welcome, ${user}`);
*/
// const myFn = function(){
//     console.log("Hello")
// }
// myFn()

// ()=>{
//     console.log("hello world")
// }

// function greetings(){}

function addTwoNumbers(num1, num2) {
    // console.log(num1+num2)
    return num1 + num2 // return to store in variable 
}

addTwoNumbers(1, 2)

function loginUsername(username = "Anonymus") {
    if (!username) {
        console.log(`Please enter a username`)
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsername())


// rest operator (...) usefull in cart management

/* 
You've hit the nail on the head! The Rest Operator (...) is the perfect tool for cart management because it says: "I don't know how many items the user will add, so just grab everything that's left and put it in a list."

1. How it works
The rest operator takes a comma-separated list of arguments and "bundles" them into a single Array.

Logic: It "rests" all remaining values into one variable.

Return Type: It always returns an Array, which is why you can immediately use powerful methods like .map(), .filter(), or .reduce() (to calculate the total price).

2. The "Cart Management" Scenario
In your marathon project or a MERN e-commerce app, you might have some "fixed" items and then a bunch of optional add-ons. You can combine regular parameters with the rest operator:

JavaScript
function calculateCart(val1, val2, ...remainingPrices) {
    console.log(`Initial items: ${val1}, ${val2}`)
    console.log(`Add-on items array:`, remainingPrices)
    
    // You can use .reduce to sum up the remainingPrices
    return remainingPrices
}

calculateCart(100, 200, 300, 400, 500)
// val1 = 100
// val2 = 200
// remainingPrices = [300, 400, 500]
Crucial Rule: The rest operator must always be the last parameter in the function. You can't do (...num, val1).
*/

function calculatecartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculatecartPrice(200, 300, 400, 500))


// Important Handling Objects in Function 

// const user = {
//     username: "Abhishek",
//     age: 20
// }

function handleObject(anyObj) {
    // console.log(`Username is ${anyObj.username}`)
    // console.log(`age is ${anyObj.age}`)
}

// handleObject(user)  // mandatory to pass object while fn call

handleObject({
    username: "Sam",
    age: 222
})


const myArr = [200,300,400,500]

function returnArrvalue(getArray){
    return getArray[1]
}

// console.log(returnArrvalue(myArr))
// console.log(returnArrvalue([100,200,300,400,500]))


// Pratice 

const runnerAge = {
    name: "Abhishek",
    age: 18
}

function validateRunner(rAge){
    if (rAge.age >= 18) {
        return (`Runner ${rAge.name} his age ${rAge.age} has registered for adult category`)
    } 
    else{
        return (`Runner ${rAge.name} his age ${rAge.age} has registered for minor category under parental guidance`)
    }
}
    

// console.log(validateRunner(runnerAge))
// console.log(validateRunner({name:"Anurag",age:22}))
// console.log(validateRunner({name:"Jay",age:7}))

// Task 2

// function calculateEventExpenses(waterBottles, medals, ...miscellaneousItems){ 
//     const fixedTotal = waterBottles + medals
    
//     return {
//         fixedCosts: fixedTotal,
//         extraItems: miscellaneousItems
    
//     }
// }

// console.log(calculateEventExpenses(500, 1000, 50, 20, 100, 200))

function calculateEventExpenses(waterBottles, medals, ...miscellaneousItems) { 
    const fixedTotal = waterBottles + medals;
    
    // Summing the array: 'acc' is the accumulator (running total), 'curr' is the current item
    const extraSum = miscellaneousItems.reduce((acc, curr) => acc + curr, 0);
    
    return {
        fixedCosts: fixedTotal,
        extraItems: miscellaneousItems,
        totalExtraCost: extraSum, // The sum you wanted
        grandTotal: fixedTotal + extraSum // Bonus: the actual total budget
    };
}

// console.log(calculateEventExpenses(500, 1000, 50, 20, 100, 200));

// Challenge 4: The "Admin Access" Guard

const user = {
    username: "Abhishek",
    role: "admin",
    isLoggedIn: true
}

function checkAccess(userAccess) {
    if (userAccess.isLoggedIn === false  ) {
        return ("Please log in first")
    }
    if (userAccess.role != "admin") {
        return ("Access Denied: Admin rights required")
    }
    if (userAccess.isLoggedIn === true && userAccess.role === "admin" ) {
        return (`"Welcome, ${userAccess.username} Loading Dashboard...".`)
    }
}


// --- Testing All Scenarios ---
console.log(checkAccess(user));                         // Success
console.log(checkAccess({ isLoggedIn: false }));        // Not logged in
console.log(checkAccess({ isLoggedIn: true, role: "user" })); // Not admin
console.log(checkAccess({}));                           // Empty object safety