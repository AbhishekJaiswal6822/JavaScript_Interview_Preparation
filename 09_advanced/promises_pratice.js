fetch("https://official-joke-api.appspot.com/random_joke")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>console.log("error occured"))

async function fetchGitHubUser() {
    const invalidUrl = "https://api.github.com/users/invalid-username-123456789";
    try {
        const response = await fetch(invalidUrl)

        if(!response.ok){
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const data = await response.json()
        console.log("User Data:", data)
    } catch (error) {
       console.log(" Catch block triggered successfully!");
        console.log(`Reason for failure: ${error.message}`);
    }
}

fetchGitHubUser()

// 1. Rename variable to 'requestUrl' so it doesn't conflict with the network 'response'
// const requestUrl = "https://jsonplaceholder.typicode.com/posts/1";

// 2. Wrap everything in an async function container
async function getPostData() {
    try {
        // 3. 🔥 FIX 1: Add await here to wait for the fetch Promise to resolve
        const response = await fetch(requestUrl); 
        
        // 4. FIX 2: Await the parsing promise completely
        const data1 = await response.json(); 
        
        console.log(data1); // Effectively logs the post object!
        
    } catch (error) {
        console.log("Error:", error);
    }
}

// 5. Execute the function
getPostData();

async function name() {
    const url = "https://api.zippopotam.us/in/401103"

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.places[0].state); // Output: Maharashtra
}
name()

async function  destructuring () {
    
    const url = ("https://api.coindesk.com/v1/bpi/currentprice.json")

    try {
        const response = await fetch(url)

    const data = await response.json()

    console.log(data)
    } catch (error) {
        console.log(error)
    }

}

destructuring()

