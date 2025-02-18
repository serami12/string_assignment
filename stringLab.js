// #
// String Exercises

// 1. `console.log` the first character of a string.ls
let str = "Hello Stephanie"
console.log(str.slice(0, 1));

// 2. `console.log` the length of a string.
console.log(str.length);

// 3. `console.log` the last character of any string.
console.log(str.slice(str.length - 1));

// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized.For example:

//     ``
// `js
// 'jimmy'
// // => 'jimmY'
// `
// ``
let strFour = "javascript"

strFour = strFour.slice(0, strFour.length - 1) + strFour[strFour.length - 1].toUpperCase();
// cutting length not inclusive of the last word then adding and capitalizing the last letter only
console.log(strFour);

// another way
// console.log(strFour.slice(0, strFour.length - 1) +
//     strFour[strFour.length - 1].toUpperCase())


// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
//     your code block should add '(pinky)'
// at the end of the amount
// if it 's 1 million. For example:

// ``
// `js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)

let numAmount = 200;

if (numAmount >= 1000000000) { // add "(pinky) only if anything its greater than a million"
    console.log(numAmount + " dollars " + " (pinky) ");
} else {
    console.log(numAmount + " dollars "); // anything below add "dollars"
}

// `
// ``


// 6. Create a `verbing` code block.It should take a single string variable.
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', 
//in which case it should add 'ly' instead.
//If the string length is less than 3, it should leave it unchanged.
// For example:

//     ``
// `js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// `
// ``

let strSix = "box"

if (strSix.slice(strSix.length - 3) === "ing" && strSix.length >= 3) {
    console.log(strSix + "ly"); // include "ing" then add "ly"
} else if (strSix.length >= 3) {
    console.log(strSix + "ing"); // if not ending with "ing" then add "ing"
} else {
    console.log("unchanged "); // "if doesn't meet any of the above statement, leave unchanged"
}

// 7. Create a `withoutLast`
// code block that takes a single string variable, and returns a copy of the string without the last word.

// let strSeven = " Hello, Stephanie"
// let withoutFirst = strSeven.slice(0, 7)
// let withoutLast = strSeven.slice(7, strSeven.length)
// console.log(withoutLast)

let strSeven = "Stephanie can code in javascript language"
let newStrSeven = strSeven.split(" "); // important to leave a space in _.split(" ")b/c it will split it by letters ex s,t,e ect. if its left _.split(""))
newStrSeven.pop(); // pop removes the last element 
console.log(newStrSeven);



// ## Bonus Questions

// 1. Write a code block that adds a "#" to a string
// if the string has an odd number of characters, otherwise leave it as is.
// print / log the result

// Examples:

//     ``
// `js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   `
// ``
// ___


let strBonusOne = "two"

if (strBonusOne.length % 2 !== 0) { // add "#" only if the length of the string is odd/even 
    console.log(strBonusOne + "#");
} else {
    console.log(strBonusOne);
}

// 2. Write a code block that prints / logs the 3 rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message. <
//     details >
//     <
//     summary >
//     Hint <
//     /summary>
// It should work
// for strings of any length. <
//     /details>

// Examples,
// for variables:
//     ``
// `js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// `
// ``
// ___
let strBonusTwo = "don't forget split, slice, and splice"
let lastElem = strBonusTwo.split(" ")

if (lastElem.length >= 3) {
    console.log(lastElem.slice(2, strBonusTwo.length).join(" "))
} else {
    console.log("error")
}


// 3. Write a code block that prints / logs whether a string `x`
// starts with a vowel. <
//     details >
//     <
//     summary >
//     Extra <
//     /summary>

// Make it[
//         case insensitive](https: //en.wikipedia.org/wiki/Case_sensitivity)

//         <
//         /details>

//         ___

//         4. Write a code block that given two strings, `str1`
//         and `str2`, prints / logs a new string with `str2`
//         mashed into the middle of `str1`

//         Examples:

//         -For `str1` = 'help'
//         and `str2` = 'me'.Your program should log `'hemelp'`

//         -
//         For `str1` = 'hello'
//         and `str2` = 'world'.Your program should log `'helworldlo'`

//         ___

//         5. Write a code block that prints / logs whether a string `x`
//         has at least one vowel in it.

//         Examples:
//         -For `x` = 'taq'.Your program should log `'taq' has a vowel'` -
//         For `x` = 'dfghjkl'.Your program should log `'dfghjkl' does not have a vowel'` -
//         For `x` = ''
//         Your program should log `'' does not have a vowel'`

//         <
//         details >
//         <
//         summary >
//         Extra & Hint:
//         <
//         /summary>

//         -
//         ** Hint **: Abstain from using loops.Explore string methods.

//         -
//         ** Extra **: Make it[
//             case insensitive](https: //en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log 
//             `'TAQ' has a vowel` <
//             /details>

//             ___

//             ### Practice Makes Perfect.Find at[CodingBat](https: //codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.

//                 >
//                 ** Remember **: This are bonuses and extra points.You don 't have to do them but if you do, you will just get better.