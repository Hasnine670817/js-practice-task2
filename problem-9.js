/*
Problem 9: Replace All Spaces

Write a program to replace all spaces in a string with a hyphen (-).
Hint: Use .replaceAll(" ", "-").

Sample Input: "I love JS"
Sample Output: "I-love-JS"
*/

// Solution:

let sentence = "I love JS";

const result = sentence.replaceAll(" ", "-");
console.log(result);
// Output: I-love-JS