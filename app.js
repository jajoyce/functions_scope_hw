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
        return "Input one charcter."
    }
    if (character.toLowerCase() === "y") {
        return "Usually a vowel, but not always."
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
