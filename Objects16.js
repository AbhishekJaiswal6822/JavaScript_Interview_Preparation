// OBJECTS 
// IMportant     In JavaScript, object keys are always converted to strings (or Symbols) under the hood.
// singleton objects made by the constructor
// Objects.create
// objects literals
// const obj1 = {
//    "full name" : "abhishek", // obj always define key in string bts
//     age: 24,
//     city: "Bhaynadar",
//     "email": "abhi@gmail.com"
// }

// console.log(obj1)
// console.log(typeof obj1.age)
// console.log(obj1["full name"]) // efficient method to access value in obj 
// console.log(obj1.email)
// console.log(obj1["email"])


// IMPORTANT ==>>>> initializing symbol in objects

const mySymbol = Symbol("This is Symbol")

const objects = {
    [mySymbol]: "myKey1",
    name: "Abhishek",
    surname: "Jaiswal",
    age :25,
    city: "Bhaynadar"
}

// console.log(objects[mySymbol])
// console.log(objects)

objects.name = "Anurag"
Object.freeze(objects)
objects.name = "raj"
// console.log(objects)

const jsUser =  {
    "Full name": "Abhishek",
    age : 24
}

jsUser.greeting = function(){
    console.log("Hello User!!!")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user ${this["Full name"]}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())

const tinderUser = new Object ()   // singleton object

// const tinderUser = {}   // non singleton or object literal

tinderUser.id = "abc123"
tinderUser.name = "Abhishek"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: {
        fullname:{
            firstName:"Abhishek",
            lastname:"Jaiswal"
        }
    }
}

// console.log(regularUser.email.fullname.firstName)


const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {
    5: "e",
    6: "f"
}
// const obj4 = Object.assign(obj1,obj2,obj3)  // everything will be assign in obj1 also
// const obj4 = Object.assign({},obj1,obj2,obj3) // efficient return new object

const obj4 = {...obj1,...obj2,...obj3}

// console.log(obj4)
// console.log(obj1)

const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {

    },
    {}
]

// console.log(users[0].email)
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(typeof Object.keys(tinderUser))
console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // returns in key value in array
// console.log(tinderUser.hasOwnProperty("isLoggedIn"))  // retrun true if exits or else  false


// destructring

const course = {
    coursename: "dsa",
    price: 999,
    language: "english"
}

// course.coursename
/*
When you write const {coursename: name} = course, you are telling JavaScript two things:

Go into the course object and find the property coursename.

Rename it to name and store it in a new variable.

Once you provide that alias (: name), the original variable coursename is no longer available. You must use the new name.
*/
const {coursename: name} = course

// console.log(coursename)
console.log(name)