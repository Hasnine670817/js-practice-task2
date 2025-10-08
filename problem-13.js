/*
Problem 13: Count Digits in a String

Write a program to count how many digits (0–9) are in a given string.
Hint: Use a loop and if to check if a character is between '0' and '9'.

Sample Input: "abc123xyz45"
Sample Output: Digits: 5
*/

// Solution:

let numbers = "0123456789";
let input = "abc123xyz45";
let digits = 0;

for (let num of numbers) {
    if (input.includes(num)) {
        digits++;
    }
}
console.log(digits);
// Output: 5
