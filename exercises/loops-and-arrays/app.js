function createEvenArray(highestNum){
    var highestNum = [] 
    for(var i = 1; i <= 20; i++){
     if(i % 2 === 0){
        highestNum.push(i)
    }
}
    return highestNum
}


function addOdds(evensOnlyArray){
    for(var i = 1; i <= 20; i++){
        if(i % 2 !== 0){
            evensOnlyArray.push(i)
        }
    }
    return evensOnlyArray
}

    var bob = addOdds(createEvenArray())

    console.log(sortNums(bob))

    function sortNums(numberArray) {  
     return numberArray.sort(function(a, b){return a-b});
}