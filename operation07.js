// let value = 3
// let negvalue = -value
// // console.log(negvalue)

// let newvalue = -4 
// let positiveValue = +newvalue
// // console.log(positiveValue)

//  value = 9
// console.log(value)


// // 1. GLOBAL SCOPE
// const score = 100; 

// if (true) {
//     // 2. LOCAL SCOPE
//     const score = 50; // This is a "Local Secret"
//     console.log("Inside:", score); // Prints: 50
// }

// // 3. BACK TO GLOBAL
// console.log("Outside:", score); // Prints: 100


// console.log(2 + 2)            //4
// console.log("2" + 2)          // 22 
// console.log("1" + 2 + 2)      // 122
// console.log(2 + 2 + "4")      // 44

/* 
    This is the ultimate "JavaScript logic" test! To understand why the second one is 44 and not 224, 
    you have to follow the Left-to-Right rule and the Operator Priority.JavaScript evaluates expressions like a reader: 
    it starts at the left and moves to the right, one step at a time.1. Let's trace 2 + 2 + "4"Here is exactly what the computer does, 
    step-by-step:First Step ($2 + 2$): It sees two numbers. Since both are numbers, it does Arithmetic (Addition).$2 + 2 = 4$Second Step ($4 + "4"$): Now it looks at the result ($4$) and the next item ($"4"$). Because one of them is a String, the + operator switches its "hat" from Math to Concatenation (Glue).$4$ glued to $"4" = "44"$Result: 442. Why was the first one 122?Let's look at "1" + 2 + 2 again using the same logic:First Step ($"1" + 2$): It sees a String immediately. The + operator becomes "Glue" right away.$"1" + 2 = "12"$Second Step ($"12" + 2$): Now it has a string ($"12"$) and a number ($2$). It stays in "Glue" mode.$"12" + 2 = "122"$Result: 1223. The Golden Rule of JS AdditionIf JS sees Number + Number, it calculates.If JS sees String + Anything, it concatenates (glues).Order Matters: Once it turns into a string, it usually stays a string for the rest of that line.4. How to force 224?If you actually wanted the result to be 224, you would have to trick JavaScript by turning the first numbers into strings immediately, or by grouping them:JavaScriptconsole.log("2" + "2" + "4"); // "224"
// OR
console.log("2" + 2 + "4");   // "224"
*/

// console.log(2 + 2 + 2 + "2");

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);

// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
Spot on! You’ve just mastered one of the most famous "logic traps" in programming: Postfix vs. Prefix increment.

Your summary is perfectly correct. Here is how a senior developer would explain those two "phases" to you:

1. Postfix (x++) — "Use then Boost"
As you said, the ++ is later. JavaScript follows this order:

Return/Assign: It takes the current value (3) and gives it to y.

Increment: It then adds 1 to x behind the scenes.

Result: y stays 3 because it got the value before the change.

2. Prefix (++a) — "Boost then Use"
Since the ++ is earlier, JavaScript follows this order:

Increment: It immediately adds 1 to a (making it 4).

Return/Assign: It then takes that new value (4) and gives it to b.

Result: b becomes 4 because it got the value after the change.

3. A Simple Mental Trick
To never forget this, just look at the position of the ++ relative to the variable:

x++: The variable x comes first, so the variable "wins" the assignment. (Assign first).

++a: The ++ comes first, so the math "wins" the assignment. (Increment first).

Why does this matter?
In real coding, you usually see this in Loops.

If you use x++, you are saying "Finish this round of the loop, then increment for the next round."

Let's test your brain one more time:
Look at this code:

JavaScript
let count = 5;
console.log(count++); 
console.log(count);
*/

// let count = 5;
// console.log(count++); 
// // console.log(++count)
// console.log(count);

let ccount = 5;
// console.log(ccount--); // 5
// console.log(--ccount) //3
// console.log(ccount); // 3

/* -----------------------            Important               --------------------------------- */
// Comparisons (> < >= <=)
// Equality (==)
/* Comparision Operator */

console.log(null > 0)
console.log(null === 0)
console.log(null >= 0)

console.log('2'=== 2) // false strict conversion
