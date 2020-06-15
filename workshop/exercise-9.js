// Q9
// Write a program that goes through every number between 1 and 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.

// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// ...

for (let x=0; x<=100; x++) {
    if ((x % 3 === 0 && x % 5 === 0)) {
    console.log("fizzbuzz")
    }  
    if (x % 3 === 0) {
    console.log("fizz")
    }
    if (x % 5 === 0) {
    console.log("buzz")
    }
    else { console.log(x)}
    
}