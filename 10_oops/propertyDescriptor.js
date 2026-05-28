/*
If an interviewer asks: "Can you overwrite a constant like PI in JavaScript?" Give them this precise, two-part answer:

"It depends on how it is defined:

1. If it's a standard const variable (like const PI = 3.14), the JavaScript engine enforces a strict read-only reference allocation in memory. Any attempt to reassign it throws a TypeError because const locks the variable's binding pointer.

2. If it's a built-in object property (like Math.PI), it uses Property Descriptors. The engine creators hardcoded its hidden descriptor configuration flags to writable: false and configurable: false, which completely blocks the runtime engine from mutating that object property value."

so i should answer in such a way that math.pi we cannot overwrite it becuase in js the object math nd property pi has it owns descriptor where it has sets writable false and enurable false
*/
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

// console.log(Math.PI)
//  Math.PI = 5 
// console.log(Math.PI)

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("code crash")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}