function randomGen(){
    var passwordLength = 8
    var password = "";
    var char = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 1; i < passwordLength; i++){
       var p = Math.floor(Math.random() * char.length);
       password += char.charAt(p)
    }
    return password;
}

console.log(randomGen())