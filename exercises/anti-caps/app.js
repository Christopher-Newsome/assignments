// example
// function isCaps(letter) {  
//     return letter === letter.toUpperCase();
//   }



function antiCaps(str){
    var  newStr = ""
    for(var i = 0; i < str.length; i++){   
        if(str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        }   else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr
}




  
  console.log(antiCaps('Hello')) // hELLO  
  console.log(antiCaps('racEcar')) // RACeCAR  
  console.log(antiCaps('bAnAnA')) // BaNaNa  