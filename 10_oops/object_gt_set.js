const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this.email.toUppercase()
    },

    set email(value){
        this._email = value
    }
}

const userOne = Object.create(User)
console.log(userOne.email)