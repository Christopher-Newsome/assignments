// Write a function that takes an array of numbers and returns the largest (without using Math.max())

function largest(arr) {
    var largestNumber = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i]
        }
    }
    return largestNumber
}
console.log(largest([3, 5, 2, 8, 1])) // => 8

// Write a function that takes an array of words and a character and return each word that has that letter present.

function lettersWithStrings(arr, str) {
    var words = []
    for(var i = 0; i < arr.length; i++){
        if(arr[i].indexOf("!") !== -1) {
            
            words.push(arr[i])
        }
    }
    return words
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")) // => ["C%4!", "Hey!"]

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2) {
    for(var i = 0; i < largest.length; i++){
        if(num1 % num2 === 0){
            return true
        } else {
            return false
        }
    }
}

console.log(isDivisible(4, 2)) // => true  
console.log(isDivisible(9, 3)) // => true  
console.log(isDivisible(15, 4)) // =>  false