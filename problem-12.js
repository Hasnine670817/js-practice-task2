/*
Problem 12: Find Longest Word

Write a program to find the longest word in a sentence.
Hint: Use .split(" ") and compare lengths using a loop.

Sample Input: "I love programming"
Sample Output: "programming"
*/

// Solution:

let sentence = "I love programming";

let splitSentence = sentence.split(" ");

let maxWord = "";

for (let word of splitSentence) {
    if(word.length > maxWord.length) {
        maxWord = word;
    }
}

console.log(maxWord);
// Output: programming