const user = {
    username:"abhishek",
    loginCount:10,
    signedIn: true,
    
    getUserDetails: function(){
        // console.log("Got user deatils from database")
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// const promiseOne = new Promise() // so here new keyword is operator and Promise() is constructor fn
// const date = new Date()

/*
const userSession = {
    username: "default",
    loginCount: 0
};

// Player 1 logs in
const player1 = userSession;
player1.username = "abhishek";

// Player 2 logs in right after
const player2 = userSession;
player2.username = "hitesh";

// 💥 Oh no! Player 1's data got completely overwritten!
console.log(player1.username); // Output: hitesh
*/

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    // return this
}

const userOne = new User("Abhishek",12,true)
const userTwo = new User("Jay",11,false)
console.log(userOne)


/*
PROTOTYPE ==>
In JavaScript, a prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects. 
It is JavaScript's way of sharing code and managing inheritance between objects without duplicating them in memory.
so prototype tries to inherit properties from bottom to top level till it finds nulls

Yes, exactly! That is the absolute perfect way to visualize the direction of the lookup. You have described the Prototype Chain flawlessly.

It is a strict, bottom-to-top search operation. The JavaScript engine always starts at the very bottom (the local instance object) and climbs upward through the prototype links until it either finds what it's looking for or hits null at the absolute top of the architecture.

🧗 The Bottom-to-Top Highway Visualized
Think of it like an ascending ladder inside the computer's memory heap:

Step 1: The Base (Local Instance)
You call runner.toString(). The engine checks the local object variables first. If it's not there, it climbs up using the instance's __proto__ link.

Step 2: The Mid-Level (Constructor Prototype)
It checks Runner.prototype. If it only finds marathon-specific methods there but not toString(), it climbs higher using Runner.prototype.__proto__.

Step 3: The Root (Object Prototype)
It hits Object.prototype, which is the universal master blueprint for almost everything in JavaScript. It finds the native toString() method right here and executes it!

Step 4: The Edge of the Universe (null)
If you had looked up a completely fake property (like runner.fakeProperty), the engine would climb past Object.prototype and hit null. null means "end of the chain." The engine stops searching immediately and returns undefined.
*/