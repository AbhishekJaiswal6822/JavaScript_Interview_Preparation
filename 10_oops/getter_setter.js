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


class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    set password(value) {
        this._value = value
    }
    get password() {
        return `${this._value}abc `
    }

}

const user1 = new User("abhi@gmail.com", 123)
const user2 = new User("anurag@gmail.com", 1234)

console.log(user1.password)

/*
1. The High-Level Definition (The Hook)
"In JavaScript, Getters and Setters are special methods that allow us to intercept property access and assignment on an object. To the outside world, they look and behave exactly like plain data properties, but under the hood, they execute custom functions. This provides a powerful abstraction layer over our raw application state."

2. The Core Use Cases (The "Why")
Interviewers want to see that you understand real-world application architecture. Give them the three primary reasons we use them:

Data Validation: Setters act as security guards, screening and validating incoming data before it is written to the computer's heap memory.

Encapsulation & Privacy: Getters allow us to mask or format raw internal data before exposing it to the consumer (e.g., masking credit card numbers).

Computed Properties: They allow us to calculate properties on-the-fly dynamically without wasting permanent space in the memory warehouse.

3. The Code Demonstration
Walk them through a concrete example. (Using a username validation or a secure user class is a great go-to):

JavaScript
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; // ⚡ 1. Passes straight into the setter receiving bay
    }

    // 🔒 THE SETTER: Triggers automatically on assignment (=)
    set password(value) {
        if (value.length < 6) {
            console.error("❌ Password too weak! Rejecting allocation.");
            return;
        }
        this._password = value; // 💾 2. Locks it into a hidden backing variable in the heap
    }

    // 🔑 THE GETTER: Triggers automatically when reading the property
    get password() {
        return "********"; // 🎭 3. Masks the raw data before returning it
    }
}
4. The Technical Depth: Explaining the Underscore (_) Loophole
This is the part that proves you are an advanced engineer. Address the infinite loop problem before they even ask about it:

"You'll notice in my example that inside the methods, we store the data in this._password instead of this.password. This is a critical defense mechanism against an Infinite Stack Overflow Loop.

If we tried to write this.password = value inside the setter, that statement would trigger the setter again, which would call itself recursively until the engine crashes with a 'Maximum call stack size exceeded' error. The underscore is a naming convention that creates a distinct backing property in the heap memory to store the raw value safely."

🧠 Anticipating the Interviewer's Follow-Up Questions
If you explain it this way, the interviewer will know you have deep knowledge. They might try to test your boundaries with these follow-ups:

Q: "If properties are public in JS, can someone just bypass your getter and type user1._password?"

Your Answer: "Yes, because standard JavaScript properties are public by default. The underscore is a convention for developers indicating it is a private/internal property. However, if we want iron-clad security that cannot be bypassed, we can upgrade it to modern ECMAScript private fields by using the hash symbol (#password), which makes it completely unreachable from outside the class."

Q: "What is the physical difference between an object with a regular property versus an object with getters/setters in memory?"

Your Answer: "Regular properties hold data directly on the object instance inside the heap memory. Getters and Setters do not store data on the instance itself; instead, their function definitions are stored as 'accessor descriptors' on the Class prototype chain, acting as a functional wrapper around a separate raw data key."

🎯 Pro-Tip Summary for the Interview
When you summarize, wrap it up cleanly:
"Setters give us control over what enters our objects, and Getters give us control over how data leaves our objects."
*/