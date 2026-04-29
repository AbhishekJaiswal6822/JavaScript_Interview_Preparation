// SCOPE 

// let a =  30
// const b = 40
// var c = 50

if (true){
    let a = 300
    const b = 400
     var c = 500

}

// console.log(a)
// console.log(b)
// console.log(c)

// closure ===> a Closure is when an inner function (the "child") has access to the variables 
// of its outer function (the "parent"), even after the outer function has finished executing.
function one(){
    const username = "Abhishek"

    function two (){
        const website = "youtube"
        // console.log(username)
    } 

    // console.log(website)

    two()
}

one()


// ++++++++++++++++++++++++++  Expression Function   ++++++++++++++++++++++++++
// Expression Function ==> Expression Fn cannot be called before Fn declaration
// expressionFunction() //ReferenceError: Cannot access 'expressionFunction' before initialization
const expressionFunction = function(){
    console.log("function is executed")
}

expressionFunction()


if (true) {
    const username = "Abhishek Jaiswal"

    if (username === "Abhishek Jaiswal") {
        const website = " Youtube"
        // console.log(username + website)
    }

    // console.log(website)
}
// console.log(username)

