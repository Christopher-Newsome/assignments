// Log to the console every Wizard in the array using forEach().

// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]  

// wizards.forEach(function(name){
//   console.log(name)
// })

// Using the following array, complete the following tasks in order. Some tasks will change the behavior of later tasks.

var wizards = [  
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]

// Log to the console every wizard's name.

wizards.forEach(function(wizard){
  console.log(wizard.name)
});

// Add an isAlive property to every wizard, setting it to true.

wizards.forEach(function(wizard){
  wizard.isAlive = true
});

// Make a new array of all the Wizards that are "neutral good".

var neutralGood = []

wizards.forEach(function(wizard){
  if(wizard.alignment === "neutral good"){
    neutralGood.push(wizard)
  }
});
console.log(neutralGood)

// Find the index of a wizard that is "lawful good".

const index = wizards.map(e => e.alignment).indexOf('lawful good');
console.log(index)

// Return a Boolean that states whether or not all the wizards are alive.
var areAlive = true

wizards.forEach(function(wizard){
  if(wizard.isAlive === true){
  } else {
    areAlive = false
  }
})

console.log(areAlive)

// Return a Boolean that states whether or not at least one wizard is "neutral good".

var isAlignment = false

wizards.forEach(function(wizard){
  if(wizard.alignment === "neutral good"){
    isAlignment = true
  } 
})

console.log(isAlignment)

// Check every "alignment" for every wizard. Kill every "neutral good" wizard. (Modify every "neutral good" wizard's isAlive property to false.)

wizards.forEach(function(wizard){
  if(wizard.alignment === "neutral good"){
    wizard.isAlive = false
  } 
})

console.log(areAlive)

// Return a Boolean that states whether or not all the wizards are alive.

areAlive = true

wizards.forEach(function(wizard){
  if(wizard.isAlive === true){
  } else {
    areAlive = false
  }
})

console.log(areAlive)

// Return a Boolean that states whether or not some of the wizards are alive.

areAlive = false

wizards.forEach(function(wizard){
  if(wizard.isAlive === true){
    areAlive = true
  } 
})

console.log(areAlive)