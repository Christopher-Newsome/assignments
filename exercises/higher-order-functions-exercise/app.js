// We will use the given array helpers to transform the given for loops away from being for loops.
var cars = [  
  {
     make: "ford",
     model: "E150",
     year: 2000
  },
  {
     make: "chevy",
     model: "malibu",
     year: 2017
  },
  {
     make: "chevy",
     model: "malibu",
     year: 2003
  },
  {
     make: "ford",
     model: "E150",
     year: 1999
  },
  {
     make: "chevy",
     model: "sedan",
     year: 2009
  },
]
// Use .forEach() to replace the following for loop.
cars.forEach(function(element){
  console.log(`${element.make} goes vroom`)
})

// for (var i = 0; i < cars.length; i++) {  
//   console.log(`${cars[i].make} goes vroom`);
// }

// Use .map() to replace the following for loop.

// var angryCars = [];

// for (var i = 0; i < cars.length; i++) {  
//   angryCars.push(cars[i].make.toUpperCase());
// }

  var blah = cars.map(function(car){
    car.make = car.make.toUpperCase()
    return car.make
  })
  console.log(blah)

// console.log(angryCars)

// Use .filter() to replace the following for loop.

var newCars = cars.filter(function(car){
  return car.year > 2005
})
console.log(newCars)

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }

// console.log(newCars)

// Use .find() to replace the following for loop.

var findCar = cars.find(function(car){
  return car.model === "E150"
})
console.log(findCar)

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "E150"){
//     var coolVan = cars[i];
//     break;
//   }
// }

// Use .some() to replace the following for loop.

var someCar = cars.some(function(car){
  return car.model === "E150"
})
console.log(someCar)

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "E150"){
//     // console.log("It is true that there is one or more E150s");
//     break;
//   }
// }

// Use .every() to replace the following for loop.

var everyCar = cars.every(function(car){
  return car.make === "E150"
})
console.log(everyCar)

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].make != "E150"){
//     // console.log("It is false that every car is an E150");
//     break;
//   }
// }

// Use .reduce() to replace the following for loop and carTotals definition.

 reduceCar = cars.reduce(function(reducer, car){
  if(car.make.toLowerCase() == "ford"){
    console.log("test")
     reducer.numberOfFords++
  } 
  if(car.make.toLowerCase() == "chevy"){
     reducer.numberOfChevys++
  } return reducer
}, {
  numberOfFords: 0,
  numberOfChevys: 0
})
console.log(reduceCar)

// var numberOfFords = 0;  
// var numberOfChevys = 0;

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].model === "chevy"){
//     numberOfchevys ++;
//   }
// }

// var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }