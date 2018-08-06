// Requirements:

// Create a function that:

// Allows the user to enter new words and saves them into the original object (be sure to pass the object in as a parameter). The function should not allow duplicate words to be stored in the dictionary (This includes case-sensitivity).

// Allows the user to look up words in the dictionary and see the definition of that word.

// Extra-extra-credit:

// Do not allow any variation of the word to be saved as a duplicate. For example, if "brick" was entered your dictionary would reject "bricks" as a new word.

var ask = require('readline-sync')

var book = {
}

function pushWord(book, word, definition){
    book[word] = definition;
}

function addWord(){
    console.log(`Hello ${name}. Add a word to the book! \n`);
    var word = ask.question('What is your word? ');
    var definition = ask.question('What is your definition of the word? ');
    pushWord(book, word, definition);
}

function filterWord(word){
    if(book[word]){
        console.log(book[word])
    } else {
        book[word];
        var definition = ask.question('What is your definition of the word? ');
        pushWord(book, word, definition)
    }
}

var name = ask.question('Welcome to the dictonary, what is your name? ');
isNotDone = true;
while (isNotDone) {


    addWord()
    var ans = ask.question("You wanna keep going? (y/n)")
    if (ans == 'n') {
        isNotDone = false;
    }

}
for (var i = 0; i < 3; i++) {
    var searchWord = ask.question(`What word would you like to know? `);



    filterWord(searchWord)
}