// promise is an operation that will eventually gets performed in future
// .then() block only receives and has access to whatever value was explicitly returned by the .then() block directly above it.

//Approach 1: Named Assignment (promiseOne)
const promiseOne = new Promise(function(resolve,reject){
    //Do an async task 
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promised Comsumed")
})






//Approach 2: Direct Anonymous Chaining
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ")
    resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Abhishek Jaiswal",email:"abhishek@gmail.com"})
    },1000)
})

promiseThree.then(function(userdata){
    console.log(userdata)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"abhishek",password:123})
        } else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user)=>{
console.log(user)
return user.username
})
.then((username)=>{  // chaning to access one level up data
    console.log(username)
})
.catch((err)=>{
console.log(err)
})
.finally(()=> console.log("the promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:123})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)
})

async function consumeProniseFive(){
    try {
        const response = await promiseFive
    console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// consumeProniseFive()

/*
so suppose we are getting response from promise resolve and reject if rejectpart is coming to async await 
it will not handle directely for that we have to write code in try catch block
*/

async function getAllUsers() {
   try {
     const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    console.log(data)
   } catch (error) {
    console.log("E:",error)
   }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

/*
so fetch works in two parts
first it assigned space in the memory and in second part it gets connected to web browser or node they send network request to fetch if it is resolved it goes in onfulfiled even 404 and all status code goes to onfulfiled if browser doesnt send the requests then it goes to on rejection the onfulfiled send the data to assigned var of fetch that var goes in global memmory 



1. The High-Level Summary
"To explain fetch(), we have to look at it as a two-part asynchronous operation. When we execute a fetch request, JavaScript splits the work: one part happens instantly inside JavaScript's native global memory, and the other part is offloaded to the runtime environment's network threads (either the Browser's Web APIs or Node.js)."

2. The Step-by-Step Architecture (How it Works)
Step 1: The Synchronous Memory Reservation
"The exact millisecond fetch() is called, it runs synchronously to set up a foundation. It immediately allocates space in JavaScript's global memory and returns a Pending Promise Object.

Inside this hidden Promise object, JavaScript silently sets up two empty execution arrays:

onFulfilled[] for success paths.

onRejected[] for failure paths."

Step 2: The Asynchronous Network Hand-off
"Because JavaScript is single-threaded, it cannot physically make network calls. It hands the URL and configuration over to the browser or Node.js runtime threads. The runtime takes care of sending the actual data packets across the internet while our main JavaScript thread keeps running other code without freezing."

Step 3: Populating the Global Memory
"Once the network thread gets a response back from the internet, it pushes that data into the appropriate internal queue. This background data eventually updates our original variable slot in global memory, moving the Promise status from <pending> to either <fulfilled> or <rejected>."

3. The Interview Killer Detail: How Fetch Handles Errors
(This is where you demonstrate senior-level understanding)

"One critical detail about fetch() that trips many developers up is how it assigns data to these queues:

The onFulfilled[] path: Contrary to popular belief, fetch considers any successful communication with a server as a fulfillment. Even if the server responds with an HTTP error status code like a 404 Not Found or a 500 Internal Server Error, the communication was successful. Therefore, 404 and 500 errors go to the onFulfilled queue, meaning they resolve normally.

The onRejected[] path: A fetch promise will only reject and trip the onRejected queue (or land in an async/await catch block) if the browser cannot physically complete the network request at all. This only happens during total network failures, like a dropped Wi-Fi connection, a DNS lookup failure, or a firewall block."

💡 Summary Pro-Tip for the Interview
If the interviewer asks: "So how do you safely catch a 404 error in an async/await block if it doesn't drop into the catch block natively?"

Your answer:
"Since HTTP errors like 404 resolve successfully in the fetch lifecycle, we must manually inspect the boolean response.ok property inside our try block. If response.ok is false, we explicitly throw our own error to force execution down into the catch block."

JavaScript
try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP issue encountered: ${response.status}`); // Forces it to catch block
    }
    const data = await response.json();
} catch (error) {
    console.log(error.message);
}
*/