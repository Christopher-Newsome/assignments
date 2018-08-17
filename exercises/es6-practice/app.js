// ES6 Practice - Let, Const, Fat Arrow Functions, Default Arguments, Template Literals
// 03 JANUARY 2018
// Let and Var
// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John").

// John is the pet owner, and his name should be stored differently than the other names.

const name = 'John';
let age = 101;
let pets = ["cat", "dog"];

let petObjects = [];

for (let i = 0; i < pets.length; i++){
  let pet = {type: pets[i]}
  let name
  if (pets[i] === "cat"){
    name = "fluffy"
  } else {
    name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

console.log(petObjects)

// ES6 Arrow Functions
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

const vegetables = carrots.map((carrot) => {
    return {type: "carrot", name: carrot}
})
console.log(vegetables)
// Re-write this .filter() using a fat arrow function:

const people = [
    {
        name: 'Princess Peach',
        friendly: false
    },
    {
        name: 'Luigi',
        friendly: true
    },
    {
        name: 'Mario',
        friendly: true
    },
    {
        name: 'Bowser',
        friendly: false
    }
]

friends = people.filter((person) => {
    return !!person.friendly
})
console.log(friends)

// re-write the following functions to be fat arrow functions:

const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}

// write a functions that takes a firstName, a lastName, an age and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Use the shorthand syntax to make the following code block take up one line.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }];

const dogs = animals.filter( animal => animal.type === "dog" )
console.log(dogs)
// Template Literals

// Write a function that will take `location` and `name` and output this if `location="Hawaii"` and `name="Janice"`: ``` Hi Janice!
// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.


// If you didn't do that with Template Literals, do it now with Template Literals. 
