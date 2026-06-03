// // A Promise that takes 3 seconds to get data from a server
// const fetchRunnerData = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve({ name: "Abhishek" });
//     }, 3000); 
// });

// async function handleRaceRegistration() {
//     console.log("1. Fetching runner profile details... (NOW)");
    
//     const runner = await fetchRunnerData; // ⏳ Pauses here for 3 seconds!
    
//     console.log(`3. Success! Welcome runner: ${runner.name} (FUTURE)`);
// }

// // --- EXECUTION START ---
// handleRaceRegistration();

// console.log("2. Look at me! I print IMMEDIATELY without waiting! (NOW)");

// const promises = new Promise((resolve,reject)=>{
//     resolve(11)
// })

// promises
// .then((data)=>{
//     console.log("Stage 1 received",data)

//     const modifiedData = "Bib number :" + data

//     return modifiedData
// })
// .then((data)=>{
//     console.log("Stage 2 received formatted string:",data)
// })


// const promises = new Promise((resolve,reject)=>{
//     reject("Error: Server is offline! 🔴")
// })

// promises
// .then((data)=>{
//     console.log("Stage 1 received",data)

//     const modifiedData = "Bib number :" + data

//     return modifiedData
// })
// .then((data)=>{
//     console.log("Stage 2 received formatted string:",data)
// })
// .catch((data)=>{
//     console.log(data)
// })
// .finally((daa)=>{
//     console.log("Finally is executed")
// })

// const promise = new Promise(function(resolve,reject){
//     reject("Error: Server Connection Refused!")
// })
// promise.then((data)=>{
//     console.log("Resolve is triggered",data)
// })
// .catch((data)=>{
//     console.log(data)
// })

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
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

consumeProniseFive()

function waitOneSecond (){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, 1000);
    });

}

async function startCountDown() {
    console.log("3")
    await waitOneSecond()

    console.log("2")
    await waitOneSecond()

    console.log("1")
    await waitOneSecond()

    console.log("Go")
    await waitOneSecond()
}

startCountDown()