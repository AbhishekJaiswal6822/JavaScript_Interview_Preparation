// old methods to use getter and setter
function User(email, password) {
    this._email = email;
    this._password = password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,"password",{
        get: function(){
            return this._password.toUpperCase()
        },
        set(value){
            this._password=value
        }
    })
}

const userOne = new User ("abhi@gmail.com",123)
console.log(userOne.email)