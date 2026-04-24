let score = "33abc"
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
// console.log(parseInt(valueInNumber)) NaN

let step2 = parseInt(score)
console.log(step2)

// conversion
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = " "

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

// boolean conversion

// 1 => true ;  0 => false
// "" => false
// "abhi" => true
// " " => true // space equals to true

/* String Conversion */

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber) // => 33

console.log(typeof (stringNumber)) // => string
