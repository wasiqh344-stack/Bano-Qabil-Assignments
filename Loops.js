// Q1: Write a program using a for loop to print numbers from 1 to 10.
console.log("Q1: Numbers 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("---");

// Q2: Use a while loop to calculate the sum of the first N natural numbers.
console.log("Q2: Sum of first N natural numbers");
function sumOfNatural(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log(`Sum of first ${n} natural numbers = ${sum}`);
}
sumOfNatural(10);

console.log("---");

// Q3: Print the multiplication table of a given number using a for loop.
console.log("Q3: Multiplication table");
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(5);

console.log("---");

// Q4: Write a program using a while loop to find the factorial of a given number.
console.log("Q4: Factorial");
function factorial(num) {
  let result = 1;
  let i = num;
  while (i > 1) {
    result *= i;
    i--;
  }
  console.log(`Factorial of ${num} = ${result}`);
}
factorial(5);

console.log("---");

// Q5: Print numbers from 10 down to 1 using a for loop.
console.log("Q5: Reverse counting");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("---");

// Q6: Use a do-while loop to print all even numbers up to N.
console.log("Q6: Even numbers up to N");
function evenNumbersUpTo(n) {
  let i = 0;
  do {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  } while (i <= n);
}
evenNumbersUpTo(20);

console.log("---");

// Q7: Write a program using a while loop to calculate the sum of digits of a given number.
console.log("Q7: Sum of digits");
function sumOfDigits(num) {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  console.log(`Sum of digits of ${num} = ${sum}`);
}
sumOfDigits(12345);

console.log("---");

// Q8: Generate the first 10 terms of the Fibonacci series using a for loop.
console.log("Q8: Fibonacci series");
function fibonacci(terms) {
  let a = 0, b = 1;
  const series = [];
  for (let i = 0; i < terms; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }
  console.log(series.join(", "));
}
fibonacci(10);

console.log("---");

// Q9: Use a do-while loop to keep asking the user for a number until they guess the correct one.
// Note: since this runs in plain Node.js console (no built-in input prompt),
// we simulate the user's guesses with a predefined array instead of readline.
console.log("Q9: Guessing game (simulated)");
function guessingGame(secretNumber, guesses) {
  let index = 0;
  let guess;
  do {
    guess = guesses[index];
    console.log(`Guess #${index + 1}: ${guess}`);
    if (guess === secretNumber) {
      console.log("Correct! You guessed the number.");
    } else if (guess < secretNumber) {
      console.log("Too low, try again.");
    } else {
      console.log("Too high, try again.");
    }
    index++;
  } while (guess !== secretNumber && index < guesses.length);
}
// Simulated attempts: secret number is 7
guessingGame(7, [3, 9, 6, 7]);

console.log("---");

// Q10: Write a program using a for loop to check if a given number is prime.
console.log("Q10: Prime number check");
function isPrime(num) {
  if (num < 2) {
    console.log(`${num} is not Prime`);
    return;
  }
  let prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  console.log(`${num} is ${prime ? "Prime" : "not Prime"}`);
}
isPrime(17);
isPrime(15);
isPrime(2);
isPrime(1);