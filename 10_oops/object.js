function multipliedBy5(num){
    return num*5
}

multipliedBy5.power = 2

// console.log(multipliedBy5(5))
// console.log(multipliedBy5.power)
// console.log(multipliedBy5.prototype)

function createUser(username,score){
    this.username=username
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()

/*
NEw keyword working 
The Allocation: The new keyword reserves a brand-new empty object ({}) in the heap memory.

The Context Binding: It doesn't link the values to the constructor. Instead, it binds the constructor's this keyword directly to that new empty object. This means whenever the constructor says this.username = "chai", it is injecting that value straight into the empty space.

The Delivery: Once the constructor finishes executing, it automatically delivers the fully populated object as a new instance to your variable.
*/