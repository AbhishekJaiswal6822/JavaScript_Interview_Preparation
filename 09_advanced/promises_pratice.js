// fetch("https://official-joke-api.appspot.com/random_joke")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>console.log("error occured"))

// async function fetchGitHubUser() {
//     const invalidUrl = "https://api.github.com/users/invalid-username-123456789";
//     try {
//         const response = await fetch(invalidUrl)

//         if(!response.ok){
//             throw new Error(`HTTP Error Status: ${response.status}`);
//         }

//         const data = await response.json()
//         console.log("User Data:", data)
//     } catch (error) {
//        console.log(" Catch block triggered successfully!");
//         console.log(`Reason for failure: ${error.message}`);
//     }
// }

// fetchGitHubUser()

// // 1. Rename variable to 'requestUrl' so it doesn't conflict with the network 'response'
// // const requestUrl = "https://jsonplaceholder.typicode.com/posts/1";

// // 2. Wrap everything in an async function container
// async function getPostData() {
//     try {
//         // 3. 🔥 FIX 1: Add await here to wait for the fetch Promise to resolve
//         const response = await fetch(requestUrl); 

//         // 4. FIX 2: Await the parsing promise completely
//         const data1 = await response.json(); 

//         console.log(data1); // Effectively logs the post object!

//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// // 5. Execute the function
// getPostData();

// async function name() {
//     const url = "https://api.zippopotam.us/in/401103"

//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
//     console.log(data.places[0].state); // Output: Maharashtra
// }
// name()

// async function  destructuring () {

//     const url = ("https://api.coindesk.com/v1/bpi/currentprice.json")

//     try {
//         const response = await fetch(url)

//     const data = await response.json()

//     console.log(data)
//     } catch (error) {
//         console.log(error)
//     }

// }

// destructuring()


// Step 1: Wrap in a function that returns the Promise
// function validatePassword(password) {
//     return new Promise(function (resolve, reject) {

//         // Step 2: Use a clean function callback inside setTimeout
//         setTimeout(function () {

//             // Step 3: Check string length (> 6 characters)
//             if (password.length > 6) {
//                 // Step 4: 🔥 Pass data up to global memory via resolve()
//                 resolve("Access Granted"); 
//             } else {
//                 // Step 5: 🔥 Trip the catch block using reject() with an Error object
//                 reject(new Error("Password too short!")); 
//             }

//         }, 1200); // 1.2 seconds delay
//     });
// }

// // Step 6: Consume the promise using async/await and try...catch
// async function runAuthentication() {
//     try {
//         // Test Case A: This will resolve successfully
//         const status1 = await validatePassword("abhishek_jaiswal");
//         console.log("Success Path:", status1);

//         // Test Case B: This will fail and instantly drop execution to the catch block
//         const status2 = await validatePassword("123");
//         console.log(status2); // This line will never execute

//     } catch (error) {
//         console.log("Failure Path Caught:", error.message);
//     }
// }

// // Execute the check
// // runAuthentication();


// const promises = new Promise(function(resolve,reject){
//     resolve(10)
// })
// .then((nums)=>{
//     console.log(nums)
//     return nums*2
// })
// .then((multipliedNum)=>{
// console.log(multipliedNum)
// return multipliedNum+50
// })
// .then((finalResult)=>{
//     console.log(finalResult)
// })
// .catch((error) => {
//         console.log("An error occurred during pipeline execution:", error.message);
//     });

/*
🔴 Challenge 3: Hard (The Race Against Time)
The Concept: Simulating an operational timeout. This is exactly how production systems prevent processes from hanging forever if a heavy operation gets stuck.

The Task: Create a mechanism where a slow local calculation is canceled if it takes too long.

Requirements:

Create Promise A (The Process): Uses a setTimeout set to 3 seconds to simulate a heavy file read, then resolves with "File processing complete!".

Create Promise B (The Watchdog): Uses a setTimeout set to 2 seconds, then rejects with a message: "Operation timed out!".

Use Promise.race([PromiseA, PromiseB]) to execute both simultaneously.

Log the result. Since the watchdog is faster (2 seconds) than the processing task (3 seconds), your terminal should hit your failure block instead of letting the application finish execution.
*/

// Step 1: Promise A (The slow asynchronous process)
const processPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("File processing complete!");
    }, 3000); // Takes 3 seconds to complete
});

// Step 2: Promise B (The watchdog safety timer)
const watchdogPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Operation timed out!"));
    }, 2000); // Trips after exactly 2 seconds
});

// Step 3: Launch the race condition
Promise.race([processPromise, watchdogPromise])
    .then((result) => {
        // This line would execute if the process finished under 2 seconds
        console.log("🏆 Race Winner Result:", result);
    })
    .catch((error) => {
        // This block intercepts the faster failure condition
        // console.log(" Race Ended via Rejection!");
        // console.log(`Reason for failure: ${error.message}`);
    });


function fetchDatabaseRecord() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 101, race: "Pune Half Marathon" })
        }, 2000)
    })
}

async function displayRaceDetails() {
    try {
        const record = await fetchDatabaseRecord()
        console.log("Database Record Received successfully! 🟢");
        console.log(`Race ID: ${record.id}`);
        console.log(`Event Name: ${record.race}`);
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

// displayRaceDetails()


function verifyRunnerBIB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Abhishek", status: "Checked In" })
            reject("Access Denied: Invalid BIB Number! ❌")
        }, 2000)
    })
}

async function runGatekeeper() {
    try {
        const record = await verifyRunnerBIB()
        console.log(record)
    } catch (error) {
        console.log(error)
    }
}

// runGatekeeper()


function verifyRunnerBIB(bibNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bibNumber === 11){
                resolve({ name: "Abhishek", status: "Checked In" })
            }else {
                reject("Access Denied: Invalid BIB Number! ❌")
            }
        }, 2000)
    })
}

async function runGatekeeper() {
    try {

        const record = await verifyRunnerBIB(77)
       console.log("Success Layer:", record);

    } catch (error) {
        console.log("Gatekeeper Intercepted an Error 🚨 ->", error);
    }
}

// runGatekeeper()


// Promise task 2 
function getUserId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(101)
        },1000)
    })
}

function getDiscountTier(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve ("Premium Runner Tier for User " + userId)
        },1000)
    })
}

async function processBilling() {
   try {
    const price =  await getUserId()

   const result = await getDiscountTier(price)

   console.log(result)
   } catch (error) {
    console.log("Error found")
   }
}

// processBilling()

// ==========================================
// 📦 PRODUCER LAYER: Three completely independent data requests
// ==========================================
function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sunny ☀️"), 1000); // Takes 1.0 second
    });
}

function fetchTrackStatus() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dry and Clear 🛣️"), 1500); // Takes 1.5 seconds
    });
}

function fetchSponsors() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Brand A", "Brand B"]), 500); // Takes 0.5 seconds
    });
}

// ==========================================
// 🏎️ CONSUMER LAYER: Concurrent Parallel Execution
// ==========================================
async function prepareRaceDay() {
    try {
        console.log("⏱️ Total Time Elapsed tracking started...");
        const startTime = Date.now();

        console.log("🔄 Fetching dashboard components simultaneously...");

        // Promise.all kicks off all three functions at the EXACT SAME MILLISECOND.
        // We use array destructuring to grab the clean results directly.
        const [weather, track, sponsors] = await Promise.all([
            fetchWeather(),
            fetchTrackStatus(),
            fetchSponsors()
        ]);

        console.log("\n📊 --- MARATHON DASHBOARD READY ---");
        console.log(`Current Weather: ${weather}`);
        console.log(`Track Condition: ${track}`);
        console.log(`Official Sponsors: ${sponsors.join(", ")}`);

        const totalTime = (Date.now() - startTime) / 1000;
        console.log(`\n⚡ Performance Metric: Operation finished in ${totalTime} seconds!`);

    } catch (error) {
        console.log("Dashboard aggregation failed:", error);
    }
}

// Execute the parallel dashboard configuration
// prepareRaceDay();


function fetchWeather() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sunny ☀️"), 1000); // Takes 1.0 second
    });
}

function fetchTrackStatus() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dry and Clear 🛣️"), 1500); // Takes 1.5 seconds
    });
}

function fetchSponsors() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Brand A", "Brand B"]), 500); // Takes 0.5 seconds
    });
}

async function prepareRaceDay() {
    try {
        const records = await Promise.all([fetchWeather(),fetchTrackStatus(),fetchSponsors()])
        console.log(records)
        // console.log(weather)
        // console.log(track)
        // console.log(sponsor)
    } catch (error) {
        console.log(error)
    }
}

prepareRaceDay()

const taskA = new Promise(res => setTimeout(() => res("Data A"), 1000));
const taskB = new Promise((res, reject) => setTimeout(() => reject("Network Failed! ❌"), 500));
const taskC = new Promise(res => setTimeout(() => res("Data C"), 2000));

async function runDashboard() {
    try {
        // Firing all three concurrently...
        const results = await Promise.all([taskA, taskB, taskC]);
        console.log(results);
    } catch (error) {
        // At exactly 0.5 seconds, taskB rejects. 
        // JavaScript instantly breaks the pipeline and drops down here!
        console.log("Promise.all aborted because of:", error);
    }
}
runDashboard();

async function runSafeDashboard() {
    // This will NOT crash if taskB fails!
    const statuses = await Promise.allSettled([taskA, taskB, taskC]);
    console.log(statuses);
}
// runSafeDashboard();


function mockFetchProfile(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                userId: id, 
                username: "Runner_" + id, 
                status: "Active"
            },1000)
        })
    })
}

async function hydrateProfiles(params) {
    try {
        const userIds = [1,2,3,4,5]

        const profilePromises = userIds.map((id)=>{
            return mockFetchProfile(id)
             console.log(profilePromises)
        })

        const completedProfiles = await Promise.all(profilePromises);
       
    } catch (error) {
        console.log("Hydration failed:", error);
    }
}
hydrateProfiles()