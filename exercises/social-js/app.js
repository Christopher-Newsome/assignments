var choirSingers = {
    name: "John",
    age: 17,
    favoriteSongs: ["I dont know any", "So I make them up", "This is hard", "I cry when I code"],
    favoritePeople: [{
        name: "Leroy",
        age: 18,
        favoriteSongs: ["ipsum randomness", "ipsum randomness", "ipsum randomness"],
        favoritePeople: [{
            name: "Lucy",
            age: 25,
            favoriteSongs: ["ipsum randomness", "ipsum randomness", "ipsum randomness", "ipsum randomness"],
            favoritePeople: [{
                name: "Jan",
                age: 20,
                favoriteSongs: [],
                favoritePeople: [{
                    name: "Amy",
                    age: 32,
                    favoriteSongs: [],
                    favoritePeople: [{
                        name: "Hector",
                        age: 19,
                        favoriteSongs: [],
                        favoritePeople: [{}]
                                    }]
                                }]
                            }]
                        }, {
            name: "Joe",
            age: 22,
            favoriteSongs: ["ipsum randomness"],
            favoritePeople: {}
        }, {
            name: "Jake",
            age: 23,
            favoriteSongs: [],
            favoritePeople: {}
        }, {
        name: "bob",
        age: 15,
        favoriteSongs: ["ipsum randomness", "ipsum randomness"],
        favoritePeople: {}
        }, {
        name: "Jesus",
        age: 1000000,
        favoriteSongs: ["Return"],
        favoritePeople: [
            {
            name: "everyone",
            age: "95",
            say: "you found jesus",
            saying: function() {
                return this.say + " to bad you are " + this.age + " years old, it is to late for you!";
                            }
                         }
                    ]
                }
            ]
         }
    ]       
}

console.log(choirSingers.favoritePeople[0].favoritePeople[4].favoritePeople[0].saying())