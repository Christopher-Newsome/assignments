


// var words = ['dog', 'cat', 'camel', 'unicorn']

// function addS(arr){
//     var newArr = []
//     for(var i = 0; i < arr.length; i++){
//          if(typeof arr[i] === 'number'){
//             return 'no numbers'
//         } else if(arr[i].lastIndexOf('s') !== arr[i].length - 1){
//             newArr.push(`${arr[i]}s`)
//         }  else {
//             newArr.push(`${arr[i]}`)
//         }
//     }
//     return newArr
// }

function addS(arr){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            return 'no numbers'
        } else if(arr[i].endsWith('s')){
            newArr.push(`${arr[i]}`)
        } else {
            newArr.push(`${arr[i]}s`)
        }
    }
    return newArr
}

var a = 1

// goes at the bottom of the page//

module.exports = { addS: addS,
                    a: a, }



















// ASSERT FUNCTION//

// assert(actual, expected)


// function expression is a function in a variable
// var assert = function(actual, expected){
//    try{
//         if(actual !== expected){
//             throw { 
//                 type: "Fail",
//                 details: { actual: actual, expected: expected }
//             }
//         } else {
//             console.log("Success", { type: "Test Passed", details: { actual: actual, expected: expected }
//             })
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// function addTwoNums(num1, num2){
//     return num1 + num2
// }

// assert(true, true)
// assert("abc", "abc")
// assert(addTwoNums(1, 2), 3)