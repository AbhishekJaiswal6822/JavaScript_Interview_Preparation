function greeting() {
    setTimeout((() => {
        console.log("Hello, Abhishek!")
    }), 3000)
}

// greeting()

function infiniteTicker() {
    setInterval((() => {
        console.log(Date.now())
    }), 1000)
}

// infiniteTicker()

function cleanExit() {
    const intervalId = setInterval((() => {
        console.log("Running")
    }), 1000)

    setTimeout((()=>{
        clearInterval(intervalId)
        console.log(" Interval stopped cleanly after 5 seconds!");
    }),5000)
}

cleanExit()