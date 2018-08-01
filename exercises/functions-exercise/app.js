var readline = require("readline-sync")

var add1 = readline.question("First number here: ")
var add2 = readline.question("Second number here: ")


// break--------------------------------------------------------------

function mathFunction(param1, param2){
    return Number(param1) + Number(param2)
}
console.log(mathFunction(add1, add2))


// break--------------------------------------------------------------- 

var add3 = readline.question("Third number here: ")

function returnLargestFunction(param1, param2, param3){
    
    return Math.max(Number(param1) , Number(param2) , Number(param3))
}
console.log(returnLargestFunction(add1, add2, add3))

// break---------------------------------------------------------------

var add4 = readline.question("Is it even or odd: ")

function evenOrOdd(param1){
    if(param1 % 2 === 0){
        return "even"
    } else if(param1 % 2 === 1){
        return "odd"
    }
}
console.log(evenOrOdd(add4))

// break----------------------------------------------------------------

var str1 = readline.question("Watch the weirdness, type anything: ")

function randomString(){
    if(str1.length <= 20){
        return str1 + " " + str1
    } else if(str1.length > 20){
        return str1.slice(0, str1.length / 2)
    }
}
console.log(randomString(str1))