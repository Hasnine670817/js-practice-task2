/*
Problem 6: Check Palindrome

Write a program to check whether a string is a palindrome (same forward and backward).
Hint: Compare the string with its reversed version.

Sample Input: "madam"
Sample Output: "Palindrome"
*/

// Solution:

let text = "madam";
let reverseText = "";

for (let i = text.length -1; i >= 0; i--) {
    reverseText += text[i];
}

if (reverseText === text) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}