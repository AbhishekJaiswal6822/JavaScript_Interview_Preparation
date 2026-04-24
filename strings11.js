// `` => string interpolation

let name = "abhishek"
let age = 24

// console.log(name +  + age)
// console.log(`my name is ${name} and my age is ${age}`)

// console.log(name.__proto__.toUpperCase());
// console.log(name.toUpperCase());
// console.log(name.length)

const gameName = new String ("valorant")
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('v'))/

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-3, 8) // only left to right 
// console.log(anotherString)

const trimOne = "       Abhi        "
const trimTwo = "       Abhi        "
const trimThree = "       Abhi        "
// console.log(trimOne.trim())
// console.log(trimOne.trimStart())
// console.log(trimOne.trimEnd())

const url = "https://google%20.com"

// console.log(url.replace('%20','-'))
// console.log(url.includes('google'))
// console.log(url.includes('abhi'))

const str = "The quick brown fox jumps over the lazy-dog.";

const words = str.split(" ")
console.log(words[3])

const char = str.split("")
console.log(char[8])

const strCopy = str.split(" ")
console.log(strCopy)