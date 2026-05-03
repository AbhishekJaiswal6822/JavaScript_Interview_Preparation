/*
Understanding the Difference
Here is the simple distinction between the two:

Loops are control flow statements used to repeat a block of code.

Higher-Order Functions are functions that take other functions as arguments or return them.

1. Loops (Control Flow)
A loop is a set of instructions built into the language syntax. It manually handles the iteration, index increments, and control flow (like break or continue).

Examples: for, for...of, while, and do...while.

Characteristics: * They do not return data by themselves (you must create an external variable to store results).

Best for control flow or when you need to handle asynchronous operations.

JavaScript
// Example: A loop executing control flow
const numbers = [1, 2, 3];
const result = [];

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2); // Manual work & storage
}
2. Higher-Order Functions (Data Transformation)
A higher-order function is a functional programming concept. In JavaScript, array methods like .map(), .filter(), and .reduce() are higher-order functions because they accept a callback function as their argument.

Examples: .map(), .filter(), .reduce(), and .sort().

Characteristics: * They hide the iteration mechanics.

They return a new array or value automatically without modifying the original array (immutability).

JavaScript
// Example: A higher-order function transforming data
const numbers = [1, 2, 3];
const result = numbers.map(num => num * 2); // Returns the result automatically
*/

/* FOR LOOP */
// for loop The technical syntax is (initialize var, condition, increment)

for (let i= 0; i <=10; i++) {
    const element = i;
    // console.log(element)
}

for (i=1; i<=10; i++){
    // console.log(`Outer Loop Value: ${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner Loop Value: ${j} and Innner Loop ${i}`)
        // console.log(i + '*' + j + "= " + i*j)
    }
}

let myArr = ["batman","superman","hulk"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
}

// break ==> stops the complete execution once the break is detected \\ breaks the execution
// continue ==> skip one current execution and then it will perform remaining execution \\ skips one exceution

for (let index = 1; index <= 10; index++) {
    if (index === 5){
        // console.log("5 detected")
        break
    }
    // console.log(`value of i is ${index}`)
}

for (let index = 1; index <= 10; index++) {
    if (index === 5){
        // console.log("5 detected")
        continue
    }
    // console.log(`value of i is ${index}`)
}


/* WHILE LOOP */

let index = 0

while (index <=10) {
    // console.log(`value of index is ${index}`)
    index+=2
}

let myArrr = ["batman","superman","hulk"]
let arrIndex = 0

while(arrIndex<myArrr.length){
    // console.log(`Value is ${myArrr[arrIndex]}`)
    arrIndex++
}

/* DO WHILE */
// DO ==> first perform then while ==> checks condition

let score = 1
// score = 11

do {
    // console.log(`Score is ${score}`)
    score++
} while (score<=10);

/* FOR-OF LOOP iterator of object(things) loop*/

const arr = ["hulk","flash","spiderman"]

for (const element of arr) {
//  console.log(element)   
}

const greetings = "Hello World !!!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

/* MAPS */
// MAPS ==> Maps have unique value and remembers the original insertion order

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('IN','India') // unique value

// console.log(map);


//[] => destructuring in map [key,value]
for (const [key,value] of map) {
//  console.log(`${key}`)  
// console.log(`${key} :- ${value}`) 
}


const myOBJ = {
    'game1': 'gta',
    'game2': 'nfs',
    'game3': 'wwe'
}

// for (const [key,value] of myOBJ) {
//     console.log(`${key} :- ${value}`) 
// }

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ['js','ruby','python','cpp']

for (const key in programming) {
    // console.log(programming[key])
}


for (const key in map) {
    console.log(key)
}


/*
for of loop ==> string , array , map
for in loop ==> object, array
*/


/* FOR-EACH LOOP */

const coding = ["js","python","java","ruby","cpp"]

coding.forEach(function(val){
// console.log(val)
})

coding.forEach((value)=>{
// console.log(value)
})

// function printMe (item){
// console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
// console.log(item,index,arr)
})

const myCoding = [
    {
        languageName: "Javascrpt",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    }
]

myCoding.forEach((item)=>{
// console.log(item.languageName)
})

// Challenge 1: The Countdown Timer

let countdown = 10

while(countdown>=1){
    //  console.log(`${countdown}`)
    if(countdown===1){
        // console.log("Blast Off")
        break
    }
    countdown -=1
}

// Challenge 3: The Filter and Skip Loop


for (let index = 1; index <= 20; index++) {
    if (index % 2 == 0) {
        continue
    }
    else if (index % 2 !=0) {
        if (index == 13){
            break
        }
        // console.log(`Odd Numbers: ${index}`)
    }
    
    
}


// Challenge 2: Uppercase String Iteration
let marathonName = "LokRaja"
for (const num of marathonName){
// console.log(num.toUpperCase())
}


// Challenge 4: Extracting and Formatting User Data
const users = [
    { username: "Abhishek", role: "admin", isLoggedIn: true },
    { username: "Anurag", role: "user", isLoggedIn: true },
    { username: "Jay", role: "moderator", isLoggedIn: false }
];

users.forEach((userName)=>{
// console.log(`"User ${userName.username} has the role of ${userName.role}"`)
})


// Challenge 5: Map Validation and Transformation
const Mapp = new Map()

Mapp.set('CP1', 'Water Station')
Mapp.set('CP2', 'First Aid')
Mapp.set('CP3', 'Finish Line')
console.log(Mapp)

for(const [key,value] of Mapp) {
    if (key == "CP2") {
        console.log(`${key} ${value} (Medical Checkpoint).`)
    }
}

/* 
for loop => index iteration 
while loop => true condition
for-of loop => for array, string, map
for-in loop => Objects
for-each loop have cb fn => Array
*/