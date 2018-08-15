// Return a list of everyone older than 18.
// Have the new list sorted by last name.
// Return each name and age with <li>'s.
// Example:

// function sortedOfAge(arr){  
// // Sort array by age and return list items
// }

// sortedOfAge(peopleArray);  
// //Output: 
// // ["<li>Rick Sanchez is 78</li>", 
// // "<li>Sarah Palin is 47</li>", 
// // "<li>Kyle Mooney is 27</li>", 
// // "<li>Morty Smith is 13</li>", 
// // "<li>Frank Zappa is 12</li>"]
// Provided Array:

var people = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },{
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },{
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
];  

var liFinish = [
"<li>Lev Tolstoy is 82</li>",
"<li>Morty Smith is 29</li>",
"<li>Rick Sanchez is 78</li>",
"<li>Sarah Palin is 47</li>",
"<li>Kyle Mooney is 27</li>",
]

var over18 = [
  {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
  },
  {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
  },
  {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
  },
  {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
  },
  {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
  },
];

function sortedOfAge(arr){
  var sorted = arr.sort(function(a,b){
    return a.lastName < b.lastName
  });
  var olderThan = sorted.map(function(person){
    if(person.age > 18){
      return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    }
  });
    return olderThan;
}
console.log(sortedOfAge(people));
// Extra Credit:

// Create another array of one or more individuals and add it to the original array.
// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// Remove the second individual from the array.
// Return the array in reverse order.

module.exports = { 
  people: people,
  sortedOfAge: sortedOfAge,
  over18:over18,
  liFinish:liFinish
};