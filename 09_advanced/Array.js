const myArr = []
// DebugPrint(myArr)

// continous , Holey

// Elements
// SMI (small integer)
// Double (floats, NaN , Infinity)
// Packed Elements (String, Fn)


// Holey array ==> is an array that has missing or empty elements 
// Continius array ==> it is an array that dont have an missing or empty elements

const arr = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arr.push(6.0)
// PACKED_DOUBLED_ELEMENTS

arr.push('7')
// PACKED_ELEMENTS

arr[10] = 11
// HOLEY_ELEMENTS

console.log(arr)
console.log(arr.length)
console.log(arr[9])

// bound check (checks in the array range)
// hasOwnProperty(arr,9)
// hasOwnProperty(arr.prototype,10)
// hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arrThree = [1,2,3,4,5]
console.log(arrThree[2])

// SMI >  DOUBLE > PACKED
// HOLEY_SMI > H_DOUBLE > PACKED

// IF downgrade then upgrade is nearly impossible

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0]='1'  //HOLEY_PACKED_ELEMENTS
arrFour[1]='2'  //HOLEY_PACKED_ELEMENTS
arrFour[2]='3'  //HOLEY_PACKED_ELEMENTS

const arrFive = []
// contionous smi

arrFive.push('1') //Packed_elements
arrFive.push('2') //Packed_elements
arrFive.push('3') //Packed_elements


const arrSix = [1,2,3,4,5]
// smi elements
arrSix(Infinity) // double
arrSix(NaN) // double
