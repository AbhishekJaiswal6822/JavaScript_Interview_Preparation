class User {
    constructor(username,email,password){
        this.username = username
        this.password = password
        this.email = email
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("Abhishek","abhi@gmail.com",123)
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())