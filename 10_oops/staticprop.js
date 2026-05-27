class User{
    constructor(username){
        this.username = username
    }

    loggedMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const userOne = new User("Abhishek")
// console.log(userOne.createId())

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email
    }
}

const userTwo = new Teacher("jay","jay@gmail.com")
userTwo.loggedMe()
// console.log(userTwo.createId())