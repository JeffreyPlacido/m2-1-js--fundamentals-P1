// Q8
// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000

// ANSWER: the number you should see in the console is 3127500

    let total=0
for (let x = 0; x <= 5000; x++) {
    if (x % 4 === 0) {
        total += x;
    }
}
    console.log(total)