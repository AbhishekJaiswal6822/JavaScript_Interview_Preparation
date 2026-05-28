class user {
    constructor (email,password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}abhishek`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }
}

const abhishek = new user("abhi@gmail.com","abc")
// console.log(abhishek.password)
console.log(abhishek.email)