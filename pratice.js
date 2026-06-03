// const str = "Abhishek"
// const newString = "     Abhishek     "
// console.log(str)
// console.log(str[2])

// console.log(newString.trim())
// console.log(newString.trimStart())
// console.log(newString.trimEnd())

// const str1 = "Abhishek"
// const str2 = "Jaiswal"
// const str3 = "22"

// console.log(str1 + str2 + str3)
// console.log(str1.concat(str2.concat(str3)))

// console.log(`This is string Interpolatiobn ${str}`)

const arr = [1,2,3,4,5,6,7]

// console.log(arr)

// console.log(arr[2])

for (i=0;i<arr.length;i++){
    // console.log(arr[i])
}

const newArr = [1,2,3,4,[5,6]]

for (i=0;i<newArr.length;i++){
    // console.log(newArr[i])
}

const obj = {
    name: "Abhishek",
    age: 22,
    method: function(){
        return `Hello ${this.name}`
    }
}
// console.log(obj)
// console.log(obj.name)
// // console.log(obj[name])
// console.log(obj.method())

const objectt ={
    name:"Abhishek",
    age: 22,
    email:"abhishekjaiswal68774@gmail.com"
}

for (const [key,element] of Object.entries(objectt)){
    // console.log(`This is key ${key} and this is the value ${element}`)
}

for (const key in objectt){
    // console.log("So the key is",key ,"and the value is", object[key])
    // console.log(`${key} shortcut is for ${objectt[key]}`)
}

const array = ["hulk","spiderman","thanos"]

for (const element of array){
    // console.log(element)
}

array.forEach((element,index,arr)=>{
// console.log(`this is the ${index} this is the element ${element} this is the array `, arr)
})

const map = new Map()

map.set("IN" , "India")
map.set("ENG" , "England")
map.set("AUS" , "Australia")
map.set('IN', 'India') // unique value

// console.log(map)
// console.log()

// map.forEach((element,index)=>{
// console.log(`this is the ${index} this is the ${element}`)
// // })

// for (const [key,value] of map){
//     console.log(`${key} :- ${value}`) 
// }

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
console.log(userBooks)

// console.log(userBooks)

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

const total = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
    
},0)

console.log(total)



// class Student{
//     constructor(name,email){
//         this.name = name
//         this.email = email
//     }
// }

// const studentOne = new Student("Abhishek","abhi@gmail.com")
// console.log(studentOne)
// console.log(studentOne.name)

