var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

var computerCount = 0

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){ 
        computerCount++
        }
} 

console.log(computerCount)

//break//

var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    var isGender
    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        isGender = "him"
    } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        isGender = "her"
    }

    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 ){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max do let " + isGender + " in")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max do NOT let " + isGender + " in")
    }
} 

//Idk how to do the toggle//

var toggle1 = [2, 5, 435, 4, 3]
var toggle2 = [1, 1, 1, 1, 3]
var toggle3 = [9, 3, 4, 2]

for(i = 0; i < arr.length; i++){
  var switch = 0
}