![ga-logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Problem solving with Functions 

Type: Homework<br>
Class: SEI<br>
Creator: GA Instructional Team<br>
Topics: Problem solving with functions<br>

---


## Instructions

1. Fork this repo.
2. Add an a file for `app.js`
3. Write your answers in `app.js`.
4. Follow the instructions below. 
5. Once completed, send the repository link to the *homework* thread.

**Hint:** Remember your git skills for the commit history! 


## 1. Verbal questions

Write answers to the following questions as comments. 

1. What is the difference between a **parameter** and an **argument**?
2. Within a function, what is the difference between **return** and **console.log**?
3. What are the implications of the ability of a function to return a value?

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 1 - Verbal questions".
<hr>

## 2. Calculate the Cube
Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

```javascript
console.log(calculateCube(5));
```

> => 125

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 2 - Cube Calculation".
<hr>

## 3. Is a Vowel?
Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

```javascript
console.log(isAVowel("a"));
```

> => true

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 3 - Is a Vowel".
<hr>

## 4. Get Two Lengths

Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

```javascript
console.log(getTwoLengths("Hank", "Hippopopalous"));
```

> => [4, 13]

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 4 - Two Lengths".
<hr>

## 5. Sum Array
Write a function `sumArray` that takes an **array** as an argument.
The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

Expected result:
```javascript
console.log(sumArray([1, 2, 3, 4, 5, 6]));
=> 21
```
<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 5 - Sum Array".
<hr>


## 6. Prime Numbers
A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
To test whether a number is Prime, you only need to test as far as the **square root** of that number. This is advisable for optimization and testing large numbers.

### Step One
Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
_Hint:_ Check every number up to the square root. To do this, try a _for loop_.

### Step Two
Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
This function can **call on** the previous `checkPrime` function.
</details>

<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 6 - Prime Numbers".
<hr>

## 7. Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
```

> => "Peanutbutter"


<hr>
&#x1F534; **Commit your work.** <br>
The commit message should read: <br>
"Commit 7 - Longest Word".
<hr>

---

### Bonus

## Project Euler Problem
[Project Euler problem #2](https://projecteuler.net/problem=2)

* Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

* Adjust the function to push the **even numbered** values into an array.

* Adjust the function to return the summed value of the array.

* Find the sum of the even numbered values that do not exceed four million.


## A Needle in the Haystack

[From Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c) [Join CodeWars](www.codewars.com/r/bEqEeQ)

Can you find the needle in the haystack?

Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

After your function finds the needle it should return a message (as a string) that says:

`"found the needle at postition"` plus the index it found the needle so:

`find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

Should return:

`"found the needle at position 5"`

## Sum the Positive

[From Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381)

Given an array, return the sum of only the positive numbers

`[1, -4, 7, 12] => 1 + 7 + 12 = 20`

# Keep going!

[Join CodeWars](www.codewars.com/r/bEqEeQ) and find your own challenges to solve! Find a great one? Share it in slack!

