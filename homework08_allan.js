console.log('\n--- Homework08.01---');
/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and returns true if there is 
a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") -> false
hasLowerCase("JAVASCRIPT") -> false
hasLowerCase("hello") -> true
hasLowerCase("125$") -> false
hasLowerCase(" a ") -> true
*/

const hasLowerCase = string => /[a-z]/.test(string);

const strings = ["", "JAVASCRIPT", "hello", "125$", " a "];
strings.forEach(e => console.log(`hasLowerCase("${e}") -> ${hasLowerCase(e)}`));

console.log('\n--- Homework08.02---');
/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument and returns the 
array back with all zeros removed.
Examples:
noZero([1]) -> [1]
noZero( [1, 1, 10] ) -> [1, 1, 10] 
noZero([0, 1, 10]) -> [1, 10]
noZero([0, 0, 0]) -> []
noZero([10, 100 0]) -> [10, 100]
*/

const noZero = numberArray => numberArray.filter(e => e !== 0);

const numbers = [[1], [1, 1, 10], [0, 1, 10], [0, 0, 0], [10, 100, 0]];
numbers.forEach(e => console.log(`noZero([${e}] -> [${noZero(e)}]`));

console.log('\n--- Homework08.03---');
/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers as argument and 
returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3]) -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) -> [[0, 0], [1, 1], [-10, 100]]
*/
const numberAndSquare = numberArray => numberArray.map(e => [e, e * e]);

//const numbers1 = [[1, 2, 3], [0, 3, -6], [1, 4], [0, 0, 0], [0, 1, -10]];
console.log(numberAndSquare([1, 2, 3]));
console.log(numberAndSquare([0, 3, -6]));
console.log(numberAndSquare([1, 4]));
console.log(numberAndSquare([0, 0, 0]));
console.log(numberAndSquare([0, 1, -10]));

console.log('\n--- Homework08.04---');
/*
Requirement:
Write a function named containsValue() which takes a string array and a string as arguments and 
returns a boolean value. Search the string variable inside of the array and return true if it exists in 
the array. If it doesn’t exist, return false. 
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello") -> false
containsValue(["abc", "def", "123"], "Abc") -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") -> true
*/

const containsValue = (strArray, string) => strArray.reduce((acc, curr) => curr === string || acc, false);

console.log(`containsValue(["abc", "foo", "javascript"], "hello") -> ${containsValue(["abc", "foo", "javascript"], "hello")}`);
console.log(`containsValue(["abc", "def", "123"], "Abc") -> ${containsValue(["abc", "def", "123"], "Abc")}`);
console.log(`containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") -> ${containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")}`);

console.log('\n--- Homework08.05---');
/*
Requirement:
Write a function named reverseSentence() which takes a string as argument and returns the words 
in reverse order. If there is no enough words reverse, return "There is not enough words!".
Examples:
reverseSentence("Hello") -> "There is not enough words!"
reverseSentence("Javascript is fun") -> "Fun is javascript"
reverseSentence("This is a sentence") -> "Sentence a is this"
*/

const reverseSentence = string => {
    if(string.trim().split(" ").length <= 1) return "There is not enough words!";
    let reversed = string.trim().split(" ").reverse().join(" ");
    
    let firstChar = reversed[0].toUpperCase();
    let midWords = reversed.slice(1, reversed.lastIndexOf(" ") + 1);
    let lastWord = reversed.slice(reversed.lastIndexOf(" ") + 1, reversed.length).toLowerCase();

    return firstChar + midWords + lastWord;
}
const sentences = ["Hello", "Javascript is fun", "This is a sentence"];
sentences.forEach(e => console.log(`reverseSentence("${e}") -> "${reverseSentence(e)}"`));

console.log('\n--- Homework08.06---');
/*
Requirement:
Write a function named removeStringSpecialsDigits() which takes a string as argument and return 
a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") -> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") -> "Cypress"
removeStringSpecialsDigits("Automation123#$%") -> "Automation"
*/

const removeStringSpecialsDigits = string =>
    string.split(" ").map(e => /[\W0-9]/.test(e) ? e.split("").filter(element => /[a-zA-Z]/.test(element)).join("") : e).join(" ");

const strings1 = ["123Javascript #$%is fun", "Cypress", "Automation123#$%"];
strings1.forEach(e => console.log(`removeStringSpecialsDigits("${e}") -> "${removeStringSpecialsDigits(e)}"`));

console.log('\n--- Homework08.07---');
/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string array as argument and 
return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) -> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) -> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) -> ["Automation", "tool"]
*/
const removeArraySpecialsDigits = array =>
    array.map(e => /[\W0-9]/.test(e) ? e.split("").filter(element => /[a-zA-Z]/.test(element)).join("") : e);

console.log(`removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) -> [${removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])}]`);
console.log(`removeArraySpecialsDigits(["Cypress", "123$%", "###"]) -> [${removeArraySpecialsDigits(["Cypress", "123$%", "###"])}]`);
console.log(`removeArraySpecialsDigits(["Automation", "123#$%tool"]) -> [${removeArraySpecialsDigits(["Automation", "123#$%tool"])}]`);

console.log('\n--- Homework08.08---');
/*
Requirement:
Write a function named getCommons() which takes two string arrays as arguments and returns all 
the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) -> ["C#"]
*/
console.log('\n--- Homework08.09---');
/*
Requirement:
Write a function named noXInVariables() which takes an array as argument and return an array 
that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) -> ["yyy", "ABC"]
*/

const noXInVariables = array =>
    array.map(e => /[xX]/.test(e) ? e.split("").filter(element => /[^xX]/.test(element)).join("") : e).filter(e => !(e === ""));

//const arrays = [["abc", 123, "#$%"], ["xyz", 123, "#$%"], ["x", 123, "#$%"], ["xyXyxy", "Xx", "ABC"]];
//arrays.forEach(e => console.log(`noXInVariables([${e}]) -> [${noXInVariables([e])}]`));

console.log(`noXInVariables(["abc", 123, "#$%"]) -> [${noXInVariables(["abc", 123, "#$%"])}]`);
console.log(`noXInVariables(["xyz", 123, "#$%"]) -> [${noXInVariables(["xyz", 123, "#$%"])}]`);
console.log(`noXInVariables(["x", 123, "#$%"]) -> [${noXInVariables(["x", 123, "#$%"])}]`);
console.log(`noXInVariables(["xyXyxy", "Xx", "ABC"]) -> [${noXInVariables(["xyXyxy", "Xx", "ABC"])}]`);