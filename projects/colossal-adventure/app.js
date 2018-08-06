var ask = require('readline-sync')

var player = {
    name: 'me',
    health: 100
}

function walk(){
    console.log("hey youre walking")
}

function attack(){
   while(/*user or enemy is alive*/){
        ask.keyInSelect
    }
}

var options = ['walk', 'attack']

while(player.health > 0){
    var userChoice = ask.keyInSelect(options, 'What would you like to do?')
    //if(userChoice === walk)
        walk()
        attack()
}