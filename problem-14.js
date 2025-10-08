/*
Problem 14: String Without Vowels

Write a program to remove all vowels from a string.
Hint: Use .replaceAll() or a loop to skip vowels.

Sample Input: "Hello"
Sample Output: "Hll"
*/

// Solution:

let vowels = ["a", "e", "i", "o", "u"];

let word = "Hello";
let result = "";

for (let char of word) {
    if (!vowels.includes(char)) {
        result += char;
    }
}

console.log(result);

// Output: Hll