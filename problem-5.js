/*
Problem 5: Find a Character Occurrence

Write a program to count how many times a given character appears in a string.
Hint: Use a loop and compare each character with the given one.

Sample Input:
String: "banana"
Character: "a"
Sample Output: "a appears 3 times"
*/

// Solution:

let charString = "banana";
let character = "a";
let count = 0;

for (let i = 0; i < charString.length; i++) {
    if (charString[i] === character) {
        count++
    }
}

console.log(`${character} appears ${count} times`);

// Output: a appears 3 times