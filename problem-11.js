/*
Problem 11: Remove Extra Spaces

Write a program to remove extra spaces from a sentence.
Hint: Use .trim() and .replaceAll("  ", " ").

Sample Input: "   Hello   JS  "
Sample Output: "Hello JS"
*/

// Solution:

let input = "   Hello   JS  ";

let removeFirstLastSpace = input.trim();
let removeCenterSpace = removeFirstLastSpace.replaceAll("  ", "");
console.log(removeCenterSpace);

// Output: Hello JS