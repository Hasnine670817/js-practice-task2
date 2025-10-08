/*
Problem 8: Word Counter

Write a program to count how many words are in a sentence.
Hint: Use .split(" ") to separate words.

Sample Input: "I love JavaScript"
Sample Output: Words: 3
*/

// Solution:

let sentence = "I love JavaScript";

const result = sentence.split(" ").length;
console.log(result);
// Output: 3