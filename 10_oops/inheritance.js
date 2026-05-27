class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username) // earlier it was done by call(this)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const userOne = new Teacher("abhi","abhi@gmail.com",123)
userOne.addCourse()
userOne.logMe()
const userTwo = new User("Jay")
userTwo.logMe()

console.log(userTwo === User)
console.log(userTwo instanceof User)