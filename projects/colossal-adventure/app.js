var ask = require('readline-sync')

// PLAYER OBJECT //

var player = {
    name: 'player',
    health: 100,
    isAlive: true,
    inventory: []
}

var enemy1 = {
    name: 'enemy',
    health: 100,
    isAlive: true,
    drops: ["pizza", "money" , "tears"]
}

var enemy2 = {
    name: 'enemy',
    health: 100,
    isAlive: true,
    drops: ["pizza", "money" , "tears"]
}

var enemy3 = {
    name: 'enemy',
    health: 100,
    isAlive: true,
    drops: ["pizza", "money" , "tears"]
}

// PLAYER OBJECT //

// ------------------------------------------------------------------------

// INTRO TO THE GAME//

var name = ask.question('Welcome traveller, what is your name? ');

console.log(`Well ${name}, get ready to go on an adventure! `);

// INTRO TO THE GAME//

// ------------------------------------------------------------------------

// ACTION FUNCTIONS//

function runChance(){
    var run = Math.floor((Math.random() * 4) + 1);
    if(run < 3){
        console.log("You're a sissy")
        return true
    } else {
        console.log("Haaaa you gonna die")
        return false
    }
}

function walk(){
    console.log('hey youre walking')
    var encounter = Math.floor((Math.random() * 3) + 1);

    if(encounter < 3){
        userChoice
    } else if(encounter === 3){
        attack()
    }

    // while(/*user is walking randomly generate enemies*/){
    // }
}

function attack(){
    console.log('waaaaar')
    

//randomize who goes first player or enemy//

    var enemySelect = Math.floor((Math.random() * 3) + 1);
    var actionOrder = Math.floor((Math.random() * 2) + 1);
    var enemy 

// pick which enemy is attacking//

    if( enemySelect === 1 ){

        enemy = enemy1
        // enemy 1 attacks

    } else if( enemySelect === 2 ){

        enemy = enemy2
        // enemy 2 attacks

    } else if( enemySelect === 3 ){

        enemy = enemy3
        // enemy 3 attacks
    }

// pick which enemy is attacking//



// player or enemy attack order//
    if(actionOrder === 1){
        var options = ['attack', 'run'];
        var userChoice = ask.keyInSelect(options, 'Do we destroy them, or run tail-tucked between our legs?')

// if run is chosen this is your chance//

        if(userChoice === 'run'){
            if(runChance()){
                return
            }
        }

// if run failed attack//

        while(player.health > 0 && enemy.health > 0){

            var damage = Math.floor((Math.random() * 40) + 1);
            console.log(`Player Damage: ${damage}`)
            enemy.health = enemy.health - damage;
            console.log(`Enemy Health: ${enemy.health}`)

            var damage = Math.floor((Math.random() * 25) + 1);
            console.log(`Enemy Damage: ${damage}`)
            player.health = player.health - damage;
            console.log(`Player Health: ${player.health}`)

            if(player.health < 30 && player.health > 0){
                var userChoice = ask.keyInSelect(options, 'Do we destroy them, or run tail-tucked between our legs?')
                if(userChoice === 'attack'){

                } else {
                    if(runChance()){
                        break;
                    } else {
                        
                    }
                }
            }
        }

    } else if(actionOrder === 2){
//enemy attacks
        while(player.health > 0 && enemy.health > 0){

            var damage = Math.floor((Math.random() * 35) + 1);
            console.log(`Enemy Damage: ${damage}`)
            player.health = player.health - damage;
            console.log(`Player Health: ${player.health}`)

            var damage = Math.floor((Math.random() * 30) + 1);
            console.log(`Player Damage: ${damage}`)
            enemy.health = enemy.health - damage;
            console.log(`Enemy Health: ${enemy.health}`)
        }
    }
    if(player.health <= 0){
        console.log("You got jacked up son, game over")
    } else if(enemy.health > 0){
        console.log("you barely got away")
    } else {
        console.log(`Items Received: `)
        for(var i = 0; i < 3; i++){
            console.log(enemy.drops[i])
            player.inventory.push(enemy.drops[i])
        }
    }
}

function charInv(){
    console.log(`Inventory: ${player.inventory}`)
}


//ACTION FUNCTIONS//

// ------------------------------------------------------------------------

//GAME LOOP//

while(player.health > 0){

    var options = ['walk', 'attack', 'character']
    var userChoice = ask.keyInSelect(options, 'What would you like to do?')

    // console.log(userChoice)
    if(userChoice === 0){
        walk()
    } else if(userChoice === 1){
        attack()
    } else if(userChoice === 2){
        charInv()
    } else if(userChoice === -1){
        player.health = 0
        console.log('GAME OVER')
    }
}

//GAME LOOP//