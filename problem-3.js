/*
Problem 3: Count Vowels in a String

Write a program to count how many vowels (a, e, i, o, u) are in a given string.
Hint: Use a loop and if condition to check each character.

Sample Input: "Programming"
Sample Output: Vowels: 3
*/

const vowels = ["a", "e", "i", "o", "u"];
let word = "Programming";
let count = 0;


/*
for (let value of word) {
    if (vowels.includes(value)) {
        count++;
    }
}
console.log(count);
*/


for (let i = 0; i < word.length; i++) {
    let char = word[i].toLowerCase();
    
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("Vowels:", count);

// Output: Vowels: 3