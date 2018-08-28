// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.


const balancePar = (str) => {
    let result = 0
    for(var i = 0; i < str.length; i ++) {
        if(str[i] == "("){
            result ++
        } else if(str[i] === ")"){
            result --
        }
        if(result < 0){
            return false
        }
    }
    return result === 0 ? true : false
}



console.log(balancePar("()()")) // -> true
console.log(balancePar("(())")) // -> true
console.log(balancePar("()))")) // -> false
// Also, every closing parentheses needs an opening partner before it.

console.log(balancePar(")()(")) // -> false
console.log(balancePar("())(")) // -> false
