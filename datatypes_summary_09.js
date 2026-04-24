/* 

Data Types ==> Primitives Non-Primitive (Refrence Type) difference call by value or call by refrence

how data are getting stored in the memory and how it is getting accessed on the basics of that data are categorised into two part Primitives Non-Primitive

Primitives Call by value 
Primitives types are called by value when we copy that data we didnt gets refrence from the memory instaed we get copry so whatever we do changes it gets changed their and not in the actual original data


In primitive data types, the original value in memory cannot be changed by a copy.

When you "change" a primitive variable, you aren't actually modifying the data inside the old box; you are throwing away the old value and putting a brand new one into the variable.

Why this happens:
Immutability: Primitives are immutable (unchangeable). You can't "edit" the number 5 to become 6. You simply replace the 5 with a 6.

The "Stack" Memory: Because they are stored in the Stack, every time you assign a primitive to a new variable, it gets its own independent space.


// 7 types: string number boolean null empty symbol undefined BigInt

*/

let og = 20
let copy = og
copy = 30

// console.log(og)
// console.log(copy)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)


const bigNumber = 3333333333333333333333333333n // bigInt


/* 
Non-Primitive Refrence Types data types
Non Primitive DataTypes typeOf are always Object
// Arrays Objects Functions

*/

let heros = ['hulk','spiderman','superman']

let myObj = {
    name : 'abhi',
    age : 22
}

let myFunction = function () {
    console.log("Hello World")
}
console.log(typeof id)

// https://262.ecma-international.org/5.1/#sec-11.4.3