// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

function fiveAndGreaterOnly(arr) {
    var result = arr.filter(function(number){
        return number >= 5;
    });
    console.log(result);
}

fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8] 

// 2) Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
    var evenNumbs = arr.filter(function(number){
        return number % 2 === 0;
    });
    console.log(evenNumbs);
}

evensOnly([3, 6, 8, 2]); /// [6, 8, 2]  

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
    var fiveOrLess = arr.filter(function(arr){
        return arr.length <= 5;
    });
    console.log(fiveOrLess);
}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    var seeYa = arr.filter(function(arr){
        return arr.member === true;
    });
    console.log(seeYa);
}

peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]);

// 5) Filter out all the people who are not old enough to see The Matrix (younger than 18)

function ofAge(arr){
    var youngerThan = arr.filter(function(arr){
        return arr.age < 18;
    });
    console.log(youngerThan);
}

ofAge([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]);
