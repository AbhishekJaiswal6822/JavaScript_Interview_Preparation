// so i should explained to interviewer like let is blocked scope and var is fn scope 
// so let cant goes outside curly braces but var can goes outside curly braces but not outside fn is this answer right

/* 
prefer not to use var 
because of issue in blocked scope and fn scope
*/

// const
// var scope problem
// let fix scope problem
// const name = "Abhishek"
// age = 3
// city = "Bhayndar"
// state = "Maharashtra"

// console.table([name,age,city,state])

// SCENARIO: Checking a condition
// if (true) {
//     var greeting = "Hello!"; 
//     let secret = "I'm a secret";
// }

// console.log(greeting); // Result: "Hello!" (var leaked out!)
// console.log(secret);   // Result: ReferenceError (let stayed inside!)

if (true) {
    var one  = "can goes outside";
    let two = "will show refrence error"
    console.log(two)
}

console.table([one])