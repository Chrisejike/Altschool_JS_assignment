// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
*/
 // * @param {Array} arrayOfNumbers
 // * @returns

function sumOfNumbers(arrayOfNumbers) {
}

const arrayOfNumbers =[1,2,3,4,5,6,7,8,9,10]
function sumOfNumbers(arrayOfNumbers){
    let sum = 0;
    for( i = 0; i < arrayOfNumbers.length; i+= 1){
        sum += arrayOfNumbers[i]
    }
    return sum;
}

assignment.sumOfNumbers = sumOfNumbers;


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * /
  @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */


function countEvenNumbers(arrayOfNumbers) {
    let count = 0
    for (i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] % 2 === 0){
            count++;
        }
    }
    return count;
}
    
 assignment.countEvenNumbers = countEvenNumbers;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

