// call ==> so call pass the current execution context to other function
//call ==> to hold the refrence
/*
so the usecase is if child fn is getting executed once it fully executed it gets removed from the call stack and 
it looses all the data or current context so the parent fn cant accessed it

to solve this problem we use call we explicitily call the fn and pass first parameter as this to hold the current context
*/

function setUserName(username){
    this.username=username
    console.log("called")
}

function createUser(username,email,password){
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const userDetails = new createUser("abhishek","abhi@gmail.com",123)
console.log(userDetails)