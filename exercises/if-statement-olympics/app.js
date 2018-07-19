if(5 > 3){
    console.log("is greater than");
}else {
        console.log("not sure");
    }

//break//

    if("cat" !== 3){
    console.log("is the length");
}else {
        console.log("who knows");
    }

//break//

if("cat" === "dog"){
    console.log("they are equals");
}else {
        console.log("not the same");
    }

//break//

//BRONZE MEDAL//

var person = {  
    name: "Bobby",
    age: 12
  }

if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie")
}else{
    console.log(person.name + " is not allowed to go to the movie")
}

//break//

if(person.name[0] >= "B"){
    console.log(person.name + " is allowed to go to the movie")
}else{
    console.log(person.name + " is not allowed to go to the movie")
}

//break//

if(person.age >= 18 && person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie")
}else{
    console.log(person.name + " is not allowed to go to the movie")
}

//break//

//SILVER MEDAL//

if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

//break//

if(1 <= 2 && 2 === 4 || 3 * 4 > 10 && 5 + 10 > 10){
    console.log("yes")
} else {
    console.log("no")
}

//break//

//GOLD MEDAL//

if(typeof "dog" === "string"){
    console.log("it is")
} else{
    console.log("it is not")
}

//break//

if(typeof "true" === "boolean"){
    console.log("it is")
} else{
    console.log("it is not")
}

//break//

if(typeof dog !== "undefined"){
    console.log("it is defined")
} else {
    console.log("it is not defined")
}

//break//

if("s" > 12){
    console.log("greater or equal")
}else {
    console.log("no")
}

//break//

if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}
//ternary of above if else//
(1 === "1") ? console.log("strict") : (1 == "1") ? console.log("loose") : console.log("not equal at all")

