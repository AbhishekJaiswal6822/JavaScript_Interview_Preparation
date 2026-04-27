// Arrays
// Shallow Copy Same Refrence Point deep copy do not share same refrence 

const myArr = [0,1,2,3,4,5]

// console.log(myArr)
// Arrays Mwthod

// myArr.push(6)
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)  ==> String Type

// console.log(myArr.slice(0,2))

const newArray = [1,2,3,4,5,6,7,8,9,10]

// SLICE: Takes elements from index 0 up to (but not including) 4.
const newArray2 = newArray.slice(0,4) 
// newArray2 is [1, 2, 3, 4]
// newArray is still [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (Original safe!)

// SPLICE: Removes 4 elements starting from index 0.
const newArray3 = newArray.splice(0,4)
// newArray3 is [1, 2, 3, 4]
// newArray is now [5, 6, 7, 8, 9, 10] (Original changed!)

/*
When you use splice(), you are essentially "cutting" into the actual data structure in the Heap memory. 
It doesn't just show you a part of the array; it physically removes those elements from the original source.
*/

// ++++++++++++++++++++++++++++ ARRAY ADVANCED +++++++++++++++++++++++++++++
// Array ==> concat returns new array,push : elements gets added in the sane array
// flat ==> works on nested array also for spreading the element

const marvel_heros = ['hulk','spiderman','thor','ironman']
const dc_heros = ['batman','flash','superman']

// marvel_heros.push(dc_heros)
// const allHeros = marvel_heros.concat(dc_heros)
const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros)
// console.log(marvel_heros)
// console.log(allHeros)
// console.log(marvel_heros[4][1])

const another_array = [1,2,3,4,[5,6,7,],9,0,8,["dc_heros","villan"],99,[12,3,4,[444,[11]]]]  
const segregated_array = another_array.flat(Infinity)            // flat works on nested array

// console.log(segregated_array)

// console.log(Array.isArray('Abhis'))
// console.log(Array.from('Abhis'))
// console.log(Array.from({name:"Abhishek"}))

// const arrayLike = {
//     0:'Abhishek',
//     1: 11,
//     length: 2
// }

// const realArray = (Array.from(arrayLike))

// console.log(Array.from({name:'Abhishek'})) // intresting case 

const  arrayLike = {
    name: 'Abhishek',
    age: 23,
    city: "Bhayandar",
    length: 3
}

const realArray = Array.from(arrayLike,(v,i)=>{
    return i === 0
})

// console.log(realArray)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

/*
Array.from() is the "Converter": It takes something
that already has a list-like structure (an iterable or something with a length) 
and transforms 
it into a real Array.

Array.of() is the "Creator": It takes whatever arguments you throw at it and packs them into a new Array from scratch.
*/