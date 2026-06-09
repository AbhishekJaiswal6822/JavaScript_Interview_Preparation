// TRUTHY FALSY VALUE


// FALSY VALUE ==> false, 0, -0, BigInt 0n, "", undefined, NaN, null

// Truthy Value ==> "0", "false", " ", [],{}, function(){}


const userEmail = []

if (userEmail.length === 0){
    console.log("Array is Empty")
    console.log(userEmail.length)
}else{
    console.log("Array is not empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0)  {
    console.log("Object is Empty")
}

// Nullish Coalescing Operator (??) : null undefined

/*
"The Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is either null or undefined. Unlike the Logical OR (||) operator, it treats other falsy values such as empty strings "", the number 0, or false as completely valid data, making it ideal for assigning fallback configurations without accidentally wiping out legitimate user inputs."
*/

// let val1 = 10;
// val1 = 5 ?? 10    // 5
// val1 = undefined ?? 15 //15
// val1 = null ?? 55 //55
val1 = null ?? 111 ?? 1111 //111


console.log(val1)

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 15

 iceTeaPrice == 15 ? console.log("Tea is ₹15") : console.log("Tea is not ₹15")