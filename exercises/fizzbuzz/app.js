function fizzBuzz(){
    var array = [];
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            array.push("fizzbuzz");
        } else if(i % 3 === 0){ 
            array.push("fizz");
        } else if(i % 5 === 0){
            array.push("buzz");
        } else {
            array.push(i);
        }
    }
    return array
 }
console.log(fizzBuzz())