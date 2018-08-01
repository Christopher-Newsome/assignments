var readline = require("readline-sync");

// var add = readline. addFunction(num1, num2){
//     var num1 = 2;
//     var num2 = 3;
//     return num1 + num2
// }

var add1 = readline.question('Please enter first number: ')
var add2 = readline.question('Please enter second number: ')
var operation = readline.question('Please enter the operation to perform "add, sub, mult, or div": ')

if(operation === "add"){
    var add = Number(add1) + Number(add2)
    console.log("The result is: " + add)
}

// break ---------------------------------------------------

if(operation === "mult"){
    var mult = Number(add1) * Number(add2)
    console.log("The result is: " + mult)
}

// break ----------------------------------------------------

if(operation === "sub"){
    var sub = Number(add1) - Number(add2)
    console.log("The result is: " + sub)
}

// break -----------------------------------------------------

if(operation === "div"){
    var div = Number(add1) / Number(add2)
    console.log("The result is: " + div)
}

// break -----------------------------------------------------
