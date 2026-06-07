// Throthle UseCase: Youtube chat slowmode

// So throthle is a structural design mechanism where user can only calls the fn or api, after the desired time set by the system.
// so suppose we have set delay of 2 sec user have send message on 0th min after this user can only send messsage after 2 sec in between this any message send by the system will be ignore by the throttle fn

// Real use case will be youtube slow mode message feature
// where user can only send message after the particular time set by the youtuber , this protects from spammming the message

function throttle (fn,delay){
    let lastCall = 0

    return function(...args){
        let now = Date.now()

    if (now - lastCall < delay){
        return 
    }
    lastCall = now;
    return fn(...args)
    }
    
}

function chatMessage(message){
    console.log(`Sending Message ${message}`)
}

const sendingChatWithSlowMode =  throttle(chatMessage,1000)

sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")
sendingChatWithSlowMode("Helloo")

