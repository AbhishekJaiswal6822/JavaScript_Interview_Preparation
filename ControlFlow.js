if (true) {
    // console.log(`User has logged in `)
}

// <, >, <=, >=, ==, !=, === (strict equality checks datatypes also), !==

const temperature = 41
if (temperature < 50) {
    // console.log("less than 50")
} else {
    // console.log("temperature is greater than 50")
}

const balance = 500
// if (balance >200) console.log("test"); // implicit scope

const userLoggedIn = true
const userEmail = true

// if (userLoggedIn && userEmail){
//     console.log("User Logged in Successfully")
// }

const userLoggedFromYT = true
const userEmailFromYT = false

if (userLoggedFromYT || userEmailFromYT) {
    // console.log("User Logged in Successfully!!!!")
}


// SWITCH always add break oe else it will match remainig value once it is true
let month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("Default Case")
        break;
}

let MONTHS = "march"

switch (MONTHS) {
    case "jan":
        console.log("months is: January")
        break;
    case "feb":
        console.log("months is:  Feb")
        // break;
    case "march":
        console.log("months is:  march")
        // break;
    case "april":
        console.log("months is: april")
        // break;

    default:
        console.log("months is: default")
        // break;
}


