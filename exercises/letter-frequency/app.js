// Find the frequency of all the letters in a given word or phrase, and print them to the console.

// Example:

// var phrase = 'slimy smelly solution';  

// Extra Credit
// Also output the original string with all duplicate letters removed. (i.e. slimy eoutn)

// Extra Extra Credit
// Display the list of letters in sorted order by frequency.

// LETTER FREQUENCY

function solution(str){
    for(var i = 1; i < str.length; i++){
      if(obj[str[i]]){
        obj[str[i]]++
      } else {
        obj[str[i]] = 1
      }
    }
    return obj
  }