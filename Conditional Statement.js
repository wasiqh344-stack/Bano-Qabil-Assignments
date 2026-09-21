// Q1: Write a program that checks if a number is positive, negative, or zero.
function checkSign(num) {
  if (num > 0) {
    console.log(`${num} is Positive`);
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log(`${num} is Zero`);
  }
}
checkSign(5);
checkSign(-3);
checkSign(0);

console.log("---");

// Q2: Using an if-else statement, determine whether a given integer is even or odd.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}
checkEvenOdd(7);
checkEvenOdd(10);

console.log("---");

// Q3: Write a program that takes two numbers and prints the larger one using conditional statements.
function findLarger(a, b) {
  if (a > b) {
    console.log(`${a} is larger than ${b}`);
  } else if (b > a) {
    console.log(`${b} is larger than ${a}`);
  } else {
    console.log(`${a} and ${b} are equal`);
  }
}
findLarger(15, 9);
findLarger(4, 4);

console.log("---");

// Q4: Using if-else-if, assign grades (A, B, C, D, F) based on a student's percentage score.
function assignGrade(score) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  console.log(`Score ${score} => Grade ${grade}`);
}
assignGrade(95);
assignGrade(82);
assignGrade(71);
assignGrade(65);
assignGrade(40);

console.log("---");

// Q5: Write a program that checks if a given year is a leap year using conditional statements.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is not a Leap Year`);
  }
}
isLeapYear(2024);
isLeapYear(1900);
isLeapYear(2000);
isLeapYear(2023);

console.log("---");

// Q6: Use a switch-case to print the name of the day when given a number (1 = Monday, ... 7 = Sunday).
function dayName(num) {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Invalid day number");
  }
}
dayName(3);
dayName(7);
dayName(9);

console.log("---");

// Q7: Create a simple calculator using switch-case that performs addition,
// subtraction, multiplication, or division based on user input.
function calculator(a, b, operator) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator";
  }
  console.log(`${a} ${operator} ${b} = ${result}`);
}
calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
calculator(10, 5, "/");
calculator(10, 0, "/");

console.log("---");

// Q8: Write a program that checks whether a given character is a vowel or consonant using switch-case.
function checkVowelConsonant(char) {
  switch (char.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log(`${char} is a Vowel`);
      break;
    default:
      console.log(`${char} is a Consonant`);
  }
}
checkVowelConsonant("A");
checkVowelConsonant("z");
checkVowelConsonant("K");

console.log("---");

// Q9: Using switch-case, print instructions based on traffic light color
// (Red = Stop, Yellow = Wait, Green = Go).
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Wait");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid color");
  }
}
trafficLight("Red");
trafficLight("Green");
trafficLight("Yellow");

console.log("---");

// Q10: Write a program using switch-case where the user selects from a menu
// (e.g., 1 = Check Balance, 2 = Deposit, 3 = Withdraw, 4 = Exit).
function bankMenu(choice) {
  switch (choice) {
    case 1:
      console.log("Checking balance...");
      break;
    case 2:
      console.log("Depositing money...");
      break;
    case 3:
      console.log("Withdrawing money...");
      break;
    case 4:
      console.log("Exiting... Goodbye!");
      break;
    default:
      console.log("Invalid menu option");
  }
}
bankMenu(1);
bankMenu(2);
bankMenu(3);
bankMenu(4);
bankMenu(9);