// ==================== ARRAY QUESTIONS ====================



// 1. Print array elements using a for loop
console.log("--- 1. Print array elements ---");
const fruits = ["apple", "banana", "mango", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. Find array length without using .length
console.log("\n--- 2. Array length without .length ---");
function getLength(arr) {
  let count = 0;
  for (const _ of arr) {
    count++;
  }
  return count;
}
console.log(getLength([10, 20, 30, 40, 50])); // 5

// 3. Reverse array without .reverse()
console.log("\n--- 3. Reverse array ---");
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 4. Sum of all numbers in an array
console.log("\n--- 4. Sum of array ---");
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([10, 20, 30, 40])); // 100

// 5. Filter only even numbers
console.log("\n--- 5. Filter even numbers ---");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using .filter()
const evens = numbers.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

// Using a plain loop
const evens2 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) evens2.push(numbers[i]);
}
console.log(evens2);




// ==================== OBJECT QUESTIONS ====================

// 6. Access object properties
console.log("\n--- 6. Access object properties ---");
const student = {
  name: "Ali",
  age: 20,
  grade: "A",
};
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student["grade"]);

// 7. Loop through object using for...in
console.log("\n--- 7. for...in loop ---");
for (const key in student) {
  console.log(key + ": " + student[key]);
}

// 8. Object methods: calculator
console.log("\n--- 8. Calculator object ---");
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
  },
};
console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5
console.log(calculator.multiply(10, 5)); // 50
console.log(calculator.divide(10, 5)); // 2
console.log(calculator.divide(10, 0)); // Cannot divide by zero

// 9. Nested objects
console.log("\n--- 9. Nested objects ---");
const student2 = {
  name: "Sara",
  age: 21,
  address: {
    city: "Karachi",
    area: "North Nazimabad",
    country: "Pakistan",
  },
};
console.log(student2.address.city); // Karachi
console.log(student2["address"]["country"]); // Pakistan

// 10. Convert object keys and values into separate arrays
console.log("\n--- 10. Object to arrays ---");
const keys = Object.keys(student);
const values = Object.values(student);
console.log("Keys:", keys); // ['name', 'age', 'grade']
console.log("Values:", values); // ['Ali', 20, 'A']

// Manual way using for...in
const keys2 = [];
const values2 = [];
for (const key in student) {
  keys2.push(key);
  values2.push(student[key]);
}
console.log(keys2, values2);