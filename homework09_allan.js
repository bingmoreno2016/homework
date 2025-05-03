console.log('\n--- Homework09.01---');
/*
Requirement:
Write a function named fizzBuzz1() which takes a number argument and returns " Fizz" if the given 
number is divisible by 3, " Buzz" if the number is divisible by 5, and " FizzBuzz" if the number is 
divisible by both 3 and 5. Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0) -> "FizzBuzz"
fizzBuzz1(1) -> 1
fizzBuzz1(3) -> "Fizz"
fizzBuzz1(5) -> "Buzz"
fizzBuzz1(30) -> "FizzBuzz"
fizzBuzz1(10) -> "Buzz"
fizzBuzz1(15) -> "FizzBuzz"
fizzBuzz1(-15) -> "FizzBuzz"
*/

const fizzBuzz = num => [num].map(e => e % 5 === 0 && e % 3 === 0 ? "FizzBuzz" : e % 5 === 0 ? "Buzz" : e % 3 === 0 ? "Fizz" : e).join("");

const numbers = [0, 1, 3, 5, 30, 10, 15, -15];
numbers.forEach(e => console.log(`fizzBuzz1(${e}) -> "${fizzBuzz(e)}"`));

console.log('\n--- Homework09.02---');
/*
Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns and array consist 
of numbers starting from 1 to given number. However, it will return " Fizz" for the numbers divided 
by 3, "Buzz" for the numbers divided by 5, and " FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3) -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15) -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 13, 14, 'FizzBuzz' ] 
fizzBuzz2(2) -> [ 1, 2 ]
*/

function fizzBuzz2(num) {
    const resultArray = [];
    for(let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 ===0) {
            resultArray.push("FizzBuzz");
        }
        else if(i % 5 === 0) {
            resultArray.push("Buzz");
        }
        else if(i % 3 === 0) {
            resultArray.push("Fizz");
        }
        else {
            resultArray.push(i);
        }
    } return resultArray;
}
const numbers1 = [3, 5, 10, 15, 2];
numbers1.forEach(e => console.log(`fizzBuzz2(${e}) -> [ ${fizzBuzz2(e)} ]`));

console.log('\n--- Homework09.03---');
/*
Requirement:
Write a function named findSumNumbers() which takes a string argument and returns sum of the 
all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c 6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/
const findSumNumbers = string => {
    const numbers = string.match(/\d+/g);
    if(!numbers) return 0;
    return numbers.reduce((acc, curr) => acc + parseInt(curr), 0);
}

const stringsArray = ["abc$", "a1b4c 6#", "ab110c045d", "525", "3 for 10 dollars"];
stringsArray.forEach(e => console.log(`findSumNumbers("${e}") -> ${findSumNumbers(e)}`));

console.log('\n--- Homework09.04---');
/*
Requirement:
Write a function named findBiggestNumber() which takes a string argument and returns the 
biggest number appears in the string.
Examples:
findBiggestNumber("abc$") -> 0
findBiggestNumber("a1b4c 6#") -> 6
findBiggestNumber("ab110c045d") -> 110
findBiggestNumber("525") -> 525
findBiggestNumber("3 for 10 dollars") -> 10
*/
const findBiggestNumber = string => {
    const numbers = string.match(/\d+/g);
    if(!numbers) return 0;
    return Math.max(...numbers);
}

const stringsArray1 = ["abc$", "a1b4c 6#", "ab110c045d", "525", "3 for 10 dollars"];
stringsArray1.forEach(e => console.log(`findBiggestNumber("${e}") -> ${findBiggestNumber(e)}`));

console.log('\n--- Homework09.05---');
/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a string argument and 
returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("") -> ""
countOccurrencesOfCharacters("abc") -> "1a1b1c"
countOccurrencesOfCharacters("abbcca") -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/
const countOccurrencesOfCharacters = string => {
    const newArray = string.split("");
    const uniqueArr = [...new Set(newArray)];
    let ctrUniqueArr = uniqueArr.map(e => newArray.reduce((acc, curr) => curr === e ? acc + 1 : acc, 0));
    return uniqueArr.map((e, i) => ctrUniqueArr[i] + e);
}
stringsArray2 = ["", "abc", "abbcca", "aaAAa", "www"];
stringsArray2.forEach(e => console.log(`countOccurrencesOfCharacters[${e}]) -> ${countOccurrencesOfCharacters(e)}`));

console.log('\n--- Homework09.06---');
/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument and returns the n 
series of Fibonacci numbers as an array. 
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) -> [0, 1, 1]
fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) -> [0]
fibonacciSeries1(2) -> [0, 1]
*/
const fibonacciSeries1 = num => {
    if(num <= 0) return [];
    if(num === 1) return [0];
    const resultArr = [0, 1];
    let result = 0;
    for(let i = 2; i < num; i++) {
        result = resultArr[i - 1] + resultArr[i - 2];
        resultArr.push(result);
    }
    return resultArr;
}
const numbers2 = [3, 5, 7, 8, 1, 2];
numbers2.forEach(e => console.log(`fibonacciSeries1(${e}) -> [${fibonacciSeries1(e)}]`));

console.log('\n--- Homework09.07---');
/*
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth 
series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) -> 1
fibonacciSeries2(4) -> 2
fibonacciSeries2(8) -> 13
fibonacciSeries2(9) -> 21
fibonacciSeries2(1) -> 0
*/
const fibonacciSeries2 = n => {
    if(n <= 0) return [];
    if(n === 1) return [0];
    const resultArr = [0, 1];
    let result = 0;
    for(let i = 2; i < n; i++) {
        result = resultArr[i - 1] + resultArr[i - 2];
        resultArr.push(result);
    }
    return resultArr[n - 1];
}
const numbers3 = [2, 4, 8, 9, 1];
numbers3.forEach(e => console.log(`fibonacciSeries2(${e}) -> ${fibonacciSeries2(e)}`));

console.log('\n--- Homework09.08---');
/*
Requirement:
Write a function named findUniques() which takes two array of number arguments and returns 
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) -> []
findUniques([], [1, 2, 3, 2]) -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) -> []
findUniques([-1, -2], [1, 2]) -> [-1, -2, 1, 2]
*/

const findUniques = (arr1, arr2) => {
    const uniqueArr1 = arr1.filter(e => !(arr2.includes(e)));
    const uniqueArr2 = arr2.filter(e => !(arr1.includes(e)));
    const combinedArr = uniqueArr1.concat(uniqueArr2);
    return [...new Set(combinedArr)];
}

console.log(`findUniques([], []) -> [${findUniques([], [])}]`);
console.log(`findUniques([], [1, 2, 3, 2]) -> [${findUniques([], [1, 2, 3, 2])}]`);
console.log(`findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [${findUniques([1, 2, 3, 4], [3, 4, 5, 5])}]`);
console.log(`findUniques([8, 9], [9, 8, 9]) -> [${findUniques([8, 9], [9, 8, 9])}]`);
console.log(`findUniques([-1, -2], [1, 2]) -> [${findUniques([-1, -2], [1, 2])}]`);

console.log('\n--- Homework09.09---');
/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false. 
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) -> true
isPowerOf3(2) -> false
isPowerOf3(3) -> true
isPowerOf3(27) -> true
isPowerOf3(100) -> false
isPowerOf3(81) -> true
isPowerOf3(9) -> true
*/

const isPowerOf3 = n => {
    if(n < 1) return false;
    while(n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
}

const testNums = [1, 2, 3, 27, 100, 81, 9];
testNums.forEach(e => console.log(`isPowerOf3(${e}) -> ${isPowerOf3(e)}`));