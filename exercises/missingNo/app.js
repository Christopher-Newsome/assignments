// Warm up
// Write a function that returns the missing number from an unsorted array of numbers.

// Create a function that identifies the range of numbers within a given array.
// Have the function return all numbers missing within the range.
// Example:

// function findMissingNo([3,5,4,8,1,2,7]){
//Find and return the missing number(s)
// }

//Output: 6
// Conditions:

// The array has at least 3 elements.
// There are no repeated numbers.
// Test cases:

const missingNum = (nums) => {
    const numberArray = nums.sort((num1, num2) => {
      return num1 - num2;
   });
   for (let i = 0; i < numberArray.length; i++){
      if(numberArray[i + 1] !== numberArray[i] + 1){
        return numberArray[i] + 1;
      }
   }
 }

console.log(missingNum([2,1,3,5]))
//Output: 4
console.log(missingNum([12,10, 9]))
//Output: 11
console.log(missingNum([-3,0,-2,3,2,-1]))
//Output: 1
// console.log(missingNum())
// Optional Conditions:

// The array has any number of elements.
// The array has repeated numbers.
// The function returns the mean, median, and mode.
