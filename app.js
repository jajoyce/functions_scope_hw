// ## 1. Verbal questions 

// 1. Parameters are the variables defined when declaring a function, like placeholders. Arguments are the actual values passed into a function when calling it.
// 2. Return actually outputs a result wherever the function is called that can then be used further, while console.log just prints the output to the console/terminal.
// 3. A value returned by a function can be used and reused within and throughout your code wherever you would use any value, instead of e.g. only sending a message to the console. 

// ## 2. Calculate the Cube 

function calculateCube(num) {
    return num ** 3;
}

// console.log(calculateCube(5));

// ## 3. Is a Vowel? 

function isAVowel(character) {
    if (typeof character !== "string" || character.length !== 1) {
        return "Input one charcter."; 
    }
    if (character.toLowerCase() === "y") {
        return "Usually a vowel, but not always."; 
    }
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < vowels.length; i++) {
        if (character === vowels[i]) {
            return true; 
        }
    }
    return false; 
}

// console.log(isAVowel("a")); 

// ## 4. Get Two Lengths 

function getTwoLengths(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Input two strings.";
    }
    let lengthsArray = [];
    lengthsArray.push(string1.length);
    lengthsArray.push(string2.length);
    return lengthsArray;
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));

// ## 5. Sum Array

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "Input an array of numbers.";
        }
        sum += array[i];
    }
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// ## 6. Prime Numbers 

function checkPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// console.log(checkPrime(97));

function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) console.log(i);
    }
}

// printPrimes(97);

// ## 7. Print Longest Word 

function printLongestWord(strArray) {
    let longestWord = "";
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i].length > longestWord.length) {
            longestWord = strArray[i];
        }
    }
    return longestWord;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
