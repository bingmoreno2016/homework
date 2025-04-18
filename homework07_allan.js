console.log('\n--- Homework07.01---');
/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and return true if there is 
an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript") -> false
hasUpperCase("John") -> true
hasUpperCase("$125.0") -> false
hasUpperCase("") -> false
*/

const hasUpperCase = string => /[A-Z]/.test(string);

const strings = ["javascript", "John", "$125.0", ""];
strings.forEach(e => console.log(`hasUpperCase("${e}") -> ${hasUpperCase(e)}`));


console.log('\n--- Homework07.02---');
/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all 
digits removed from the original string .
Examples:
noDigit("") -> ""
noDigit("Javascript") -> "Javascript"
noDigit("123Hello") -> "Hello"
noDigit("123Hello World149") -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"
*/

const noDigit = string => string.trim().split("").filter(e => !(/[0-9]/.test(e))).join("");

const strings1 = ["", "Javascript", "123Hello", "123Hello World149", "123Tech456Global149"];
strings1.forEach(e => console.log(`noDigit("${e}") -> "${noDigit(e)}"`));

console.log('\n--- Homework07.03---');
/*
Requirement:
Write a function named noVowel() which takes a string argument and returns a new string with all 
vowels removed from the original string .
Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$
*/

const noVowel = string => string.trim().split("").filter(e => !(/[aeiouAEIOU]/.test(e))).join("");

const strings2 = ["TechGlobal", "AEOxyz", "Javascript", "", "125$"];
strings2.forEach(e => console.log(`noVowel("${e}") -> "${noVowel(e)}"`));


console.log('\n--- Homework07.04---');
/*
Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new 
array with all 13s replaced with 0s. 
Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4] 
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []
*/
const no13 = numbers => numbers.map(e => e === 13 ? 0 : e);

const numbers = [[1, 2, 3 ,4], [13, 2, 3], [13, 13, 13 , 13, 13], []];
numbers.forEach(e => console.log(`no13([${e}]) -> [${no13(e)}]`));

console.log('\n--- Homework07.05---');
/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle 
number. 
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10
*/

const middleInt = (n1, n2, n3) => [n1, n2, n3].sort((a, b) => a - b)[1];

console.log(`middleInt(1, 2, 2) -> ${middleInt(1, 2, 2)}`);
console.log(`middleInt(5, 5, 8) -> ${middleInt(5, 5, 8)}`);
console.log(`middleInt(5, 3, 5) -> ${middleInt(5, 3, 5)}`);
console.log(`middleInt(1, 1, 1) -> ${middleInt(1, 1, 1)}`);
console.log(`middleInt(-1, 25, 10) -> ${middleInt(-1, 25, 10)}`);

console.log('\n--- Homework07.06---');
/*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits 
from the original string. 
Examples:
sumOfDigits("Javascript") -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0") -> 8
sumOfDigits("") -> 0
*/

const sumOfDigits = string => {
    let filtered = string.trim().split("").filter(e => /[0-9]/.test(e)).map(e => parseInt(e));
    return filtered.reduce((acc, curr) => curr === "" ? 0 : acc + curr, 0);
}

const strings3 = ["Javascript", "John’s age is 29", "$125.0", ""];
strings3.forEach(e => console.log(`sumOfDigits("${e}") -> ${sumOfDigits(e)}`));

console.log('\n--- Homework07.07---');
/*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument and return the 
array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []
*/
function arrFactorial(numbers) {
    const factorials = [];
    for(const number of numbers) {
        let result = 1;
        for(i = 1; i <= number; i++) {
            result *= i;
        }
        factorials.push(result);
    }
    return factorials;
}
const numArray = [[1, 2, 3 ,4], [0, 5], [5 , 0, 6], []];
numArray.forEach(e => console.log(`arrFactorial([${e}]) -> [${arrFactorial(e)}]`));

console.log('\n--- Homework07.08---');
/*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and return 
an array as letters at index of 0, digits at index of 1 and specials at index of 2. 
Examples:
categorizeCharacters("1234") -> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") -> [ 'abc', '123', '$%%' ]
*/

function categorizeCharacters(word) {
    const arrayFinal = [];
    arrayFinal.push(word.split("").filter(e => /[a-zA-Z]/.test(e)).join(""));
    arrayFinal.push(word.split("").filter(e => /[0-9]/.test(e)).join(""));
    arrayFinal.push(word.split("").filter(e => /\W/.test(e)).join(""));
    return arrayFinal;
}
const words = ["1234", "abc123$#%", "12ab$%3c%"];
words.forEach(e => console.log(`categorizeCharacters("${e}") -> [ ${categorizeCharacters(e)} ]`));