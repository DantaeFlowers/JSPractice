/**
 * Takes in two values and returns their sum
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} - Equal to the sum of a and b
 */
function sum(a, b) {
  return a + b
}

sum(4, 8)
/**
 * Takes in three values and returns their sum
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to add.
 * @returns {number} - Equal to the sum of a, b and c
 */
function sumThree(a, b, c ) {
  return a + b + c
}
  
  sumThree(2, 5, 7)
/**
 * Subtracts two numbers
 * 
 * @param {number} a - the first number
  * @param {number} b - the second number which is subtracted from the first
 * @returns {number} - Equal to a minus b
 */
function subtract(a, b) {
  return a - b
}
  
subtract(32, 12)



module.exports = {
  sum,
  sumThree,
  subtract
};