// ++++++++++++++++++++++++++ HIGHER ORDER FUNCTION +++++++++++++++++++++++
// FILTER

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num)=>{
// return (num > 5)
// })

// console.log(newNums)

// const newNums = []

// myNums.forEach((num)=>{
//     if (num > 5){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const book = [
    { tittle: "Book One", genre: "History", publish: 2002, edition: 2018 },
    { tittle: "Book Two", genre: "Science", publish: 2002, edition: 2019 },
    { tittle: "Book Three", genre: "Maths", publish: 2004, edition: 2020 },
    { tittle: "Book Four", genre: "Geography", publish: 2006, edition: 2020 },
    { tittle: "Book Five", genre: "Science Fiction", publish: 2002, edition: 2022 },
    { tittle: "Book Six", genre: "Science Fiction", publish: 2009, edition: 2026 },
]

let userBooks = book.filter((bk) => bk.publish === 2002)
userBooks = book.filter((bk) => bk.genre === "Science Fiction")
// console.log(userBooks)

const newNums = [1, 2, 3, 4, 5, 6]

const incrementedNums = newNums.map((num) => {
    return num + 10
})



// console.log(incrementedNums)


// +++++++++++++++++++ MAPS ++++++++++++++++++++++++++++++++

/* 
Yes, that is correct! The map() method in JavaScript always returns a new array containing the results of calling a function on every element in the original array.

It does not change (mutate) the original array; instead, it transforms and returns the data.

How it Works
Here is a quick example to show how it works:

JavaScript
const numbers = [1, 2, 3, 4, 5];

// Using map() to create a new array with doubled values
const doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled); 
// Output: [2, 4, 6, 8, 10]

console.log(numbers); 
// Output: [1, 2, 3, 4, 5] (Original array remains unchanged)
💡 Key Characteristics of map()
Creates a new array: The length of the new array is exactly the same as the original array.

Callback function required: It takes a function that is executed on each element.

Immutability: It preserves the original array, making it predictable and safe to use.

If you ever need to transform an array (like doubling numbers, extracting specific properties from a list of users, or modifying runner data), map() is the method to use.

Even if you do not assign the result of a map() method to a variable, JavaScript still allocates memory space for the new array in the heap at runtime.

How Memory Works Here
When the map() method finishes executing, it returns a reference to the newly created array. Here is what happens under the hood:

Memory Allocation: The JavaScript engine sets aside space in memory for the new elements.

No Variable Reference: If you do not assign it to a variable, the array is created, but it has no name or reference pointing to it in the current scope.

Garbage Collection: Because the array has no reference, JavaScript's automatic Garbage Collector will eventually identify it as "unused" and clear the memory space in a subsequent cycle to free up resources.

Why this matters
Because memory is allocated even briefly, executing map() on very large arrays without using the result can cause a performance dip and unnecessary memory churn.

Rule of thumb: If you do not need to create a new array, it is more efficient to use a basic loop or a forEach loop rather than map().
*/


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]

const newNums1 = myNumbers
    // Memory space is assigned separately for both .map() methods.
    .map((num) => num * 10)  // 10,20,30,40,50,60,70,80,90,100
    .map((num) => num + 1)   // 11,  21, 31, 41,  51,61,  71, 81, 91, 101, 101, 101
    .filter((num) => num >= 40) // 41,  51,61,  71, 81, 91, 101, 101, 101


// console.log(newNums1)



// +++++++++++++++++++++++++++++++++++++++++++ REDUCE ++++++++++++++++++++++++++++++++++++++++++++++++++
// UseCase : Helps to tally final amount in shopping cart
// Reduce(accumulator,currentvalue),initializeaccumulator 
// The reduce() method in JavaScript is designed to return a single value, not a new array.
// Syntax :---   reduce((acc,curr)=>{
//     retrun acc + curr},0  // the 0 is the value that gets retrun in the reduce as a single value after execution it can be aslo [] {}
// )

const myNums2 = [1, 2, 3]
const myTotal = myNums2.reduce((acc, curval) => {
    // console.log(`acc: ${acc} and currval ${curval}`)
    return acc + curval
}, 0)

// console.log(myTotal)

// const myNums2 = [1,2,3]
// let initialeAccumulatorValue = 0
// const myTotal = myNums2.reduce((acc,curval)=>{
//     console.log(`acc: ${acc} and currval ${curval}`)
//     return acc + curval
// },initialeAccumulatorValue)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course", price: 1000
    },
    {
        itemName: "Mob Dev Course", price: 2000
    },
    {
        itemName: "Py Course", price: 3000
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

// console.log(totalPrice)


// Pratice Challenge

// Challenge 1: Celsius to Fahrenheit (Map)
// Given the following array of temperatures in Celsius, use map() to create a new array where all temperatures are converted to Fahrenheit.
const temperaturesInCelsius = [0, 20, 37, 100];
const temperatueInFahrenheit = temperaturesInCelsius.map((temp) => {
    return ((temp * (9 / 5)) + 32)
})
// console.log(temperatueInFahrenheit)



// Challenge 2: Extract Odd Numbers (Filter)
// Given an array of mixed integers, use filter() to return a new array containing only the odd numbers.
const numbers = [12, 15, 22, 33, 45, 60, 77];
const extractOddNumbers = numbers.filter((num) => (num % 2 !== 0))
// console.log(extractOddNumbers)



// Challenge 3: Product of Elements (Reduce)
// Given an array of numbers, use reduce() to calculate the total product of all the numbers in the array.
const multiplier = [1, 2, 3, 4, 5];
// 1, 3, 6,10,15
// 1,2,6,24,120
const productOfNumbers = multiplier.reduce((acc, num) => {
    return acc * num
}, 1)

// console.log(productOfNumbers)


// 🟡 Medium Challenges
// Challenge 4: Apply Tax (Map)
// Given an array of product items, create a new array using map() 
// where each item's price is updated to include an 18% GST (Goods and Services Tax).

const products = [
    { name: "Running Shoes", price: 4999 },
    { name: "Energy Gel", price: 199 },
    { name: "T-Shirt", price: 999 }
];
// Your code here
// console.log(100/10)

const IncrementGstInProducts = products.map((num) => (num.price * 1.18))


// console.log(IncrementGstInProducts)


//Challenge 5: Marathon Verification (Filter)
// Use filter() to extract the list of participants who are running the Full Marathon category and are 18 years or older.
// const runners = [
//     { name: "Abhishek", category: "Full Marathon", age: 22 },
//     { name: "Anurag", category: "10K", age: 17 },
//     { name: "Vikram", category: "Full Marathon", age: 16 },
//     { name: "Deepak", category: "Full Marathon", age: 25 }
// ];

// const extractRunnersAbove18AndFullMarathon = runners.filter((runnersDemographics)=>{
//     return runnersDemographics.age >= 18 && runnersDemographics.category === "Full Marathon"
// })

// // console.log(extractRunnersAbove18AndFullMarathon)
// extractRunnersAbove18AndFullMarathon.forEach((runner) => {
//     // console.log(`Runner Name is ${runner.name}, category is ${runner.category}, and runner age is ${runner.age}`);
// });


// Challenge 6: Shopping Cart Total (Reduce)
// Use reduce() to calculate the total bill for the cart. Make sure to multiply the price by the quantity for each item.


const cart = [
    { item: "Bib Tag", price: 150, quantity: 2 },
    { item: "Marathon Jersey", price: 799, quantity: 1 },
    { item: "Safety Pins Pack", price: 30, quantity: 3 }
];

const totalPrice1 = cart.reduce((acc, price) => {
    return acc + price
}, 0)

// console.log(totalPrice1)



// Challenge 7: Chaining Data Transformations (Map + Filter)
// Take the runners array from Challenge 5:

// Filter out participants who are younger than 18 or not in the "Full Marathon" category.

// Map the remaining filtered array to create an array of strings that reads: "[Runner Name] is authorized to run."
// Your code here

const runners = [
    { name: "Abhishek", category: "Full Marathon", age: 22 },
    { name: "Anurag", category: "10K", age: 17 },
    { name: "Vikram", category: "Full Marathon", age: 16 },
    { name: "Deepak", category: "Full Marathon", age: 25 }
];

const filterRunners = runners
    .filter((runner) => runner.category === "Full Marathon" && runner.age >= 18)
    .map((runner) => (`${runner.name} is  authorized to run`))

// console.log(filterRunners)

/*
Challenge 8: Advanced Grouping & Accumulation (Reduce)
Use reduce() to group the check-ins of race participants by their respective checkpoints, resulting in an object that lists the participants who visited each checkpoint.

*/
const checkins = [
    { runner: "Abhishek", checkpoint: "CP1" },
    { runner: "Anurag", checkpoint: "CP2" },
    { runner: "Jay", checkpoint: "CP1" },
    { runner: "Vikram", checkpoint: "CP3" },
    { runner: "Suresh", checkpoint: "CP2" },
    { runner: "Pratik", checkpoint: "CP1" }
];
// Expected output:
// {
//   CP1: [ 'Abhishek', 'Jay', 'Pratik' ],
//   CP2: [ 'Anurag', 'Suresh' ],
//   CP3: [ 'Vikram' ]
// }
// Your code here
const trackCheckPoints = checkins.reduce((acc, curr) => {
    if (!acc[curr.checkpoint]) {
        acc[curr.checkpoint] = [];
    }
    acc[curr.checkpoint].push(curr.runner);

    return acc;
}, {})

// console.log(trackCheckPoints)

const numbers1 = [1, 2, 3];

// 1. Initial value is 0 (returns a number)
const sum = numbers1.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// 2. Initial value is an empty array [] (returns an array)
const doubled = numbers1.reduce((acc, curr) => {
    acc.push(curr * 2);
    return acc;
}, [] // this is the actual single value that gets retrun in reduce as single value 
);
console.log(doubled); // [2, 4, 6]