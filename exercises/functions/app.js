function myFun(param1, param2){
    return param1 + param2 
}

console.log(myFun(1, 2))

//break//

function threeNums(param1, param2, param3){
    if(param1 > param2 && param1 > param3){
        return param1
    } else if(param2 > param1 && param2 > param3){
        return param2
    } else if(param3 > param1 && param3 > param2){
        return param3
    } else{
        return "nothing"
    }
}

console.log(threeNums(20, 5 ,30)) //30
console.log(threeNums(201, 5 ,30)) //201
console.log(threeNums(20, 50 ,30)) //50

//second way//

function threeNums(param1, param2, param3){
    return Math.max(param1, param2, param3)
}
console.log(threeNums(20, 5 ,30)) //30

//break//

