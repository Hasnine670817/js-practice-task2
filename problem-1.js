/*
Problem 1: Count Characters in a String

Write a program to count how many characters are in a given string (without using .length directly inside the loop).
Hint: Use a loop to go through each character and count them manually.

Sample Input: "Hello"
Sample Output: Total characters: 5
*/

// Solution:

let text = "Hello";
let count = 0;

for (let char of text) {
    count++;
}
console.log("Total characters:", count);

// Output: Total characters 5