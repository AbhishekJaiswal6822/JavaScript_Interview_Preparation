// Debouncing 
// "Debouncing is a performance optimization technique used to limit the execution rate of an expensive function. 
// Structurally, it guarantees that a target function will only execute after a specific window of total inactivity has passed. 
// If the user creates any interruption or event fire during that countdown, the existing timer is immediately cleared and reset back to zero."
// So basically decouncing is when a user is not typig for our desired time then only we will call the api or fn,
// if user intrupted in between then we will reset the timer

function debounce(fn,delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId) //cancel the last call
      timerId = setTimeout(()=>{
            fn(...args)
        },delay)
    }
}

const search = (query)=>{
    console.log(`Seraching for ${query}`)
}

const userQuery = debounce(search,1000)

userQuery("ha")
userQuery("har")
userQuery("hard ")
userQuery("hard j")
userQuery("hard js")
