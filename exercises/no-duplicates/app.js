var input = "bookkeeper larry";

// No duplicates: "bokepr lay"// remove duplicated letters
// The Extras: "okeerr"

function noDuplicates(str){
    // declare an empty string to build
    var noDupes = "";
    // Loop through the string to check each letter
    for (var i = 0; i < str.length; i++) {
      // If the noDupes string doesn't have the current letter
      if(noDupes.indexOf(str[i]) === -1){
        // add it to the noDupes string
        noDupes += str[i]
      }
    }
    return noDupes;
  }
  
  console.log(noDuplicates("bookkeeper larry")) // "bokepr lay"