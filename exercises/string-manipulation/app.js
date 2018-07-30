var ask = require("readline-sync");

var name = ask.question("What is your name?")
console.log("My name is: " + name.toUpperCase())

var age = ask.question("What is your age?")
console.log("My age is: " + age)

var favoriteColor = ask.question("What is your favorite color?")
console.log("My favorite color is: " + favoriteColor)

var fName = ask.question("What is your first name?")
var lName = ask.question("What is your last name?")
console.log("My name is " + fName + " " + lName)


var arr = []
var str = ask.question("Please input 20+ characters and be returned the last half")
console.log(`last half: ${str.slice(str.length / 2)}`)
var num = ask.question(`Please enter a number between 1 and ${str.length}`)
console.log(str.slice(num))


console.log(str.indexOf(str))


