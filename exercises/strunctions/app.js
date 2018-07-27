function firstConcat(){
    var hello = "Hello "
    console.log(hello.concat("World"));
}
firstConcat()

//break//

function secondIndexOf(){
    var hello = "Hello";
    console.log(hello.indexOf("o"))
}
secondIndexOf()

//break//

function thirdLastIndexOf(){
    var hello = "Hello";
    console.log(hello.lastIndexOf("e"))
}
thirdLastIndexOf()

//break//

function fourthMatch(){
    var hello = "Hello there";
    console.log(hello.match(/there/g))
}
    fourthMatch()

//break//

function fifthReplace(){
    var home = "My house is black"
    console.log(home.replace(/black/g, "red"))
}
fifthReplace()

//break//

function sixthSplice(){
    var leroy = ["Runs", "in", "without", "warning"]
    console.log(leroy.splice(2, 4))
}
sixthSplice()

//break//

function seventhSplit(){
    var blah = ("John")
    console.log(blah.split("").reverse())
}
seventhSplit()

//break//

function eighthToLowerCase(){
    var lower = "LEROY"
    console.log(lower.toLocaleLowerCase())
}
eighthToLowerCase()

//break//

function ninethToUpperCase(){
    var upper = "leroy"
    console.log(upper.toLocaleUpperCase())
}
ninethToUpperCase()

//break//

function tenthSubStr(){
    var sub = "I do not know what I am doing"
    console.log(sub.substr(4, 4))
}
tenthSubStr()