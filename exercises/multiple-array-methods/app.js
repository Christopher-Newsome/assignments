// use only array methods no for loops

// Return a list of everyone older than 18 sorted alphabetically by last name

function sortedOfAge(arr){
    var sorted = arr.sort(function(a, b){
        if(a.name < b.name){
            return -1
        } else if(a.name > b.name){
            return 1
        }
    })
    return sorted
}

sortedOfAge([  
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
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]);  

console.log(sortedOfAge(sortedOfAge))

// Using the same array from the problem above, return a sorted list, oldest to youngest, of People in <li>s

function toDisplayInHTML(arr){

}

toDisplayInHTML(peopleArray);  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]  