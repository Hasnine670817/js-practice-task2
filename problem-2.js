/*
Problem 2: Reverse a String

Write a program that reverses a given string.
Hint: Use a loop to add each character to a new string in reverse order.

Sample Input: "World"
Sample Output: "dlroW"
*/

// Solution:

let word = "World";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
}

console.log(reverseWord);
// Output: dlroW
