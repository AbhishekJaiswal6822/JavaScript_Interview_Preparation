function abc(){
    console.log(abc.xyz)
}

// abc()
abc.xyz = 400
abc.xyz = 200
// abc()

// const arr = [1,2,3,4]
// arr[100]=100
// console.log(arr)

/*
All of these—Number, String, Object, Function, and Array—are native, built-in constructor functions provided by the JavaScript language engine.
 Because they are functions designed to manufacture new data instances, running typeof on them evaluates to "function".
*/
// console.log(typeof Number) 
// console.log(typeof String)
// console.log(typeof Object) 
// console.log(typeof Function)
// console.log(typeof Array)

// typeof typeof will always be string 
/*
"According to the ECMAScript specification, the typeof operator is explicitly designed to evaluate an operand and always return its result as a string primitive literal. No matter what data structure or primitive value is passed into it, the output token is natively wrapped as a string data type in memory. 
This is why chaining two typeof operators together—like typeof typeof X—is guaranteed to evaluate to "string" every single time."
*/
// console.log(typeof typeof 100)
// console.log(typeof typeof 100)           // 🖥️ "string"
// console.log(typeof typeof "Abhishek")    // 🖥️ "string"
// console.log(typeof typeof [1, 2, 3])     // 🖥️ "string"
// console.log(typeof typeof function(){})  // 🖥️ "string"
// console.log(typeof typeof undefined)     // 🖥️ "string"

// const arr = [...'Praveen'] // string destructuring
// const arr = [...['Praveen',"Jay"]]
// console.log(arr)

const user = { name: "Abhishek", server: "localhost:3000" };

// 🟢 The Destructuring way (Extracts by matching key names):
const { name, server } = user;

// console.log(name);   // 🖥️ "Abhishek"
// console.log(server); // 🖥️ "localhost:3000"


const regularRoute = ["Bhayandar", "Thane"];
const fullMarathonRoute = [...regularRoute, "Pune", "Mumbai"];
// console.log(fullMarathonRoute); 
// 🖥️ ["Bhayandar", "Thane", "Pune", "Mumbai"]
// (It unpacked 'regularRoute' perfectly into the new array container)


const registrationIds = [101, 102, 103, 104, 105];

// 🟢 Assigning individual variables, and gathering the remaining elements:
const [firstUser, secondUser, ...remainingUsers] = registrationIds;

// console.log(firstUser);      // 🖥️ 101 (Assigned to an individual variable)
// console.log(secondUser);     // 🖥️ 102 (Assigned to an individual variable)

// console.log(remainingUsers); // 🖥️ [103, 104, 105] (The remaining items packed into an array!)

// so the difference between spreadand rest is spread takes all element rest takes only remaining element which is not asssigned to var
// 1. Destructuring  Assigns elements to respective variables
// 2. Rest Operator  Assigns initial elements to variables, remaining to the rest operator
// 3. Spread Operator  Takes all the unpacked values and pours them into a new array

// console.log(parseInt('10+2')) //10
// console.log(parseInt('7FM'))  //7
// console.log(parseInt('FM7'))  //NaN


// console.log(isNaN("Abhishek")) // true

// console.log([1,2,3,].map((num)=>{
//     if(num>0) return;
//         return num * 2
    
// })) // [ undefined, undefined, undefined ]

function withoutReturn() {
    // No code here
}

function withBlankReturn() {
    return;
}

/*
🔍 The Core Rule of JavaScript FunctionsIn JavaScript, every single function must return something. 
There is no such thing as a function that returns "nothing."If you do not write a 
return statement at all $\rightarrow$ It returns undefined.If you write return but leave the space next to it totally blank $\rightarrow$ It returns undefined.
*/
// console.log(withoutReturn());    // 🖥️ Outputs: undefined
// console.log(withBlankReturn());  // 🖥️ Outputs: undefined


// so use strict checks wheretere the var declared with any kind of keyword
// {
//     function abc(){
//         console.log("Function Executed")
//     }
// }

// abc()

const array = [1,2,3,4,5,6,7,8]
const newArray = array.find((num)=> num > 4)
// console.log(newArray)


// Pure and Impure Function 
/*
A function is considered pure if it satisfies two strict architectural rules:

Deterministic: It must always return the exact same output if you pass it the exact same input arguments.

No Side Effects: It does not read or modify any data outside its own functional block scope (it leaves the rest of your application completely untouched).

Think of a pure function like a basic math calculator: every single time you enter 2 + 2, it will output 4. It won't suddenly output 5 because of the time of day, and it won't change the wallpaper on your phone.
*/

// 🟢 Pure: Clean, isolated, and highly predictable
function calculateTotalScore(baseScore, bonusPoints) {
    return baseScore + bonusPoints;
}

// No matter how many times you run this, the output is permanently 110
// console.log(calculateTotalScore(100, 10)); // 🖥️ 110
// console.log(calculateTotalScore(100, 10)); // 🖥️ 110

/*
2. Impure Functions (The Unpredictable Operators)
A function is considered impure if it violates either of the two rules above. It is impure if it relies on changing global state, interacts with the outside world, or introduces random variables.

An impure function does at least one of the following:

Mutates External State: It modifies variables declared outside its block (like changing a global configuration array).

Performs Side Effects: It interacts with external APIs, reads/writes to localStorage, alters DOM nodes directly, or uses console.log().

Relies on Non-Deterministic Data: It pulls in unpredictable external values like Math.random(), or the current time via new Date().
*/

let totalRegistrationCount = 100;

// ❌ Impure: It reads and modifies a variable outside its own scope!
function addNewRegistration() {
    totalRegistrationCount += 1; 
    return totalRegistrationCount;
}

// console.log(addNewRegistration()); // 🖥️ 101
// console.log(addNewRegistration()); // 🖥️ 102 (Same input/no arguments, but different output!)

// pure fn input same output same 
// impurefn input same output different // increment decrement

var a = 200

{var a=400}

let b = a

 {
    b = 400
}

// console.log(b)

// console.log(false == ![] )
// console.log(false == [])
// console.log(false === ![] )
// console.log(false === [])
// console.log([])

const array1 = [1,2,3]
// const str = "1,2,3"
// console.log(array1==str)

// truthy falsy value 

// 0 -0n, 0n 
// undefined 
// nan
// ""
// null
// false
// BigInt

// Scenario 1
// console.log(Boolean(" "));// true

// Scenario 2
// console.log(!"0");

// // // Scenario 3
// console.log(!![]);


// Scenario 4
// console.log(1 == true); //true

// Scenario 5
// console.log("" == 0); // true

// Scenario 6
// console.log(" \t\r\n" == 0); // (Hint: Strings containing only whitespace) //true
// console.log(" \t\r\n0" == 0); // (Hint: Strings containing only whitespace) //true
// console.log(" \t\r\na" == 0) // false

// Scenario 7
// console.log(NaN == NaN); // false
// console.log(undefined == undefined) // true
// console.log(NaN == undefined) // false

// let abc = "deep"
// abc[2] = "raj"
// console.log(abc)

const arrayyy = [1,2,3,4]
const [y,i] = array

// console.log(y,i)

const destruct = [1,2,3,4,5]

const namee = [i1,i2,i3] = [...destruct]
// console.log(i1)
// console.log(namee)

function f1(){
    return 4
}

function f2(){
    return 44
}

var a = (f1(), f2())
// console.log(a)

const arr = ["one","two","three"]
const str = "Hello"
const res = arr.includes('one')
const anotherVar = arr.includes('onetwo')
const newVar = str.includes('ll')

// console.log(res) 
// console.log(anotherVar)
// console.log(newVar)


const curringFunction = function(a){
        return function(b) {
            return function(c){
                return a * b * c
            }
        }
    }


// console.log(curringFunction(10)(20)(30))

const curringFn = function(earlybirdCoupon){
    return function(festiveCoupon){
        return function(studentCoupon){
            const baseTicket = 5000
            const price = baseTicket - earlybirdCoupon - festiveCoupon - studentCoupon
            return price
        }
    }
}

const userOne = curringFn(100)(200)(300)
// console.log(userOne)
const userTwo = curringFn(100)(200)(0)
// console.log(userTwo)
