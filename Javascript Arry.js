// ==========================
// JavaScript Array Methods
// ==========================

// ---------- Q1. push() ----------

const fruits = ['Apple', 'Banana'];
fruits.push('Mango', 'Orange');
console.log('Q1:', fruits); // ['Apple','Banana','Mango','Orange']
// push() CHANGES the original array.

// ---------- Q2. pop() ----------

const tasks = ['Login', 'Dashboard', 'Logout'];
const removedTask = tasks.pop();
console.log('Q2:', removedTask, tasks); // 'Logout' ['Login','Dashboard']
// pop() removes the last item AND returns it.

// ---------- Q3. unshift() + shift() ----------

const queue = ['Student B', 'Student C'];
queue.unshift('Student A');        // add at start
const served = queue.shift();      // remove from start
console.log('Q3:', served, queue); // 'Student A' ['Student B','Student C']

// ---------- Q4. slice() ----------

const topics = ['HTML', 'CSS', 'JS', 'React', 'Node'];
const middle = topics.slice(1, 4); // start index 1, stop BEFORE index 4
console.log('Q4:', middle, topics); // ['CSS','JS','React'], topics unchanged

// ---------- Q5. splice() ----------

const technologies = ['HTML', 'CSS', 'jQuery', 'React'];
const idx = technologies.indexOf('jQuery'); // find position first
technologies.splice(idx, 1);                // remove 1 item at that position
console.log('Q5:', technologies); // ['HTML','CSS','React']

// ---------- Q6. includes() ----------

const emails = ['ali@gmail.com', 'student@gmail.com', 'sara@gmail.com'];
const isRegistered = emails.includes('student@gmail.com');
console.log('Q6:', isRegistered); // true

// ---------- Q7. indexOf() ----------

const cities = ['Karachi', 'Lahore', 'Islamabad', 'Karachi'];
console.log('Q7:', cities.indexOf('Karachi')); // 0 (first match only)
const searchCity = 'Multan';
const position = cities.indexOf(searchCity);
if (position === -1) {
  console.log('Q7:', searchCity + ' is not in the list'); // -1 means not found
} else {
  console.log('Q7: found at index', position);
}

// ---------- Q8. slice() vs splice() (Interview) ----------

// slice(start, end): returns a NEW array, does NOT change the original.
// splice(start, deleteCount, ...items): removes/adds items, CHANGES the original,
// and returns the removed items.

const a = [10, 20, 30, 40];
const sliced = a.slice(1, 3);
console.log('Q8 slice:', sliced, a);   // [20,30]  [10,20,30,40] (unchanged)
const b = [10, 20, 30, 40];
const spliced = b.splice(1, 2);
console.log('Q8 splice:', spliced, b); // [20,30]  [10,40] (changed!)

// ---------- Q9. map() ----------

const prices = [1000, 2500, 800, 1500];
const pricesWithTax = prices.map(price => price * 1.1); // 10% tax
console.log('Q9:', pricesWithTax); // [1100, 2750, 880, 1650] (may show tiny decimals)

// ---------- Q10. map() with objects ----------

const students = [
  { firstName: 'Ali', lastName: 'Khan' },
  { firstName: 'Sara', lastName: 'Ahmed' },
  { firstName: 'Usman', lastName: 'Raza' }
];
const fullNames = students.map(s => s.firstName + ' ' + s.lastName);
console.log('Q10:', fullNames); // ['Ali Khan','Sara Ahmed','Usman Raza']

// ---------- Q11. filter() ----------

const marks = [35, 76, 49, 90, 50, 20];
const passing = marks.filter(mark => mark >= 50);
console.log('Q11:', passing); // [76, 90, 50]

// ---------- Q12. filter() + map() ----------

const users = [
  { name: 'Ali', age: 17 },
  { name: 'Sara', age: 22 },
  { name: 'Ahmed', age: 18 },
  { name: 'Hina', age: 15 }
];
const adultNames = users
  .filter(user => user.age >= 18) // step 1: keep adults
  .map(user => user.name);        // step 2: take only the name
console.log('Q12:', adultNames); // ['Sara','Ahmed']

// ---------- Q13. find() ----------

const people = [
  { id: 101, name: 'Ali' },
  { id: 102, name: 'Sara' },
  { id: 103, name: 'Ahmed' }
];
const foundUser = people.find(p => p.id === 103);
if (foundUser) {
  console.log('Q13:', foundUser); // { id: 103, name: 'Ahmed' }
} else {
  console.log('Q13: User not found'); // find() returns undefined if nothing matches
}

// ---------- Q14. find() vs filter() (Interview) ----------

// find()   -> returns the FIRST matching ITEM (or undefined). Stops early.
// filter() -> returns an ARRAY of ALL matches (empty array [] if none).
// Use find() when you need ONE item, e.g. login: find the user with this email.
// Use filter() when you need MANY items, e.g. show all products in "Shoes" category.
const products = [
  { id: 1, category: 'Shoes' },
  { id: 2, category: 'Shirts' },
  { id: 3, category: 'Shoes' }
];
console.log('Q14 find:', products.find(p => p.category === 'Shoes'));   // one object
console.log('Q14 filter:', products.filter(p => p.category === 'Shoes')); // array of 2

// ---------- Q15. reduce() ----------

const cart = [1200, 350, 999, 450];
const totalBill = cart.reduce((sum, price) => sum + price, 0); // 0 = starting value
console.log('Q15:', totalBill); // 2999

// ---------- Q16. reduce() - counting ----------

const techs = ['JS', 'React', 'JS', 'Node', 'React', 'JS'];
const count = techs.reduce((obj, tech) => {
  if (obj[tech]) {
    obj[tech] = obj[tech] + 1; // already seen, add 1
  } else {
    obj[tech] = 1;             // first time seen
  }
  return obj;
}, {}); // start with an empty object
console.log('Q16:', count); // { JS: 3, React: 2, Node: 1 }

// ---------- Q17. sort() numbers ----------

const numbers = [25, 3, 100, 12, 8];
numbers.sort((x, y) => x - y); // ascending
console.log('Q17:', numbers); // [3, 8, 12, 25, 100]
// Why plain .sort() is surprising: it converts numbers to STRINGS and compares
// them letter by letter. So "100" comes before "25" (because "1" < "2").
// [25, 3, 100, 12, 8].sort() -> [100, 12, 25, 3, 8]  (wrong for numbers!)

// ---------- Q18. sort() + immutability (Interview) ----------

// sort() changes the ORIGINAL array. In React, changing state directly is bad
// because React may not re-render and it can cause bugs.
// Safe way: make a COPY first, then sort the copy.
const stateArray = [30, 10, 20];
const sortedCopy = [...stateArray].sort((x, y) => x - y); // spread copies the array
// (or: stateArray.slice().sort(...))
console.log('Q18:', sortedCopy, stateArray); // [10,20,30]  [30,10,20] (original safe)

// ---------- Q19. some() ----------

const stock = [5, 0, 7, 2];
const hasOutOfStock = stock.some(qty => qty === 0);
console.log('Q19:', hasOutOfStock); // true

// ---------- Q20. every() + some() (Interview) ----------

const studentMarks = [55, 72, 91, 64];
const allPassed = studentMarks.every(mark => mark >= 50);   // (a)
const anyTopper = studentMarks.some(mark => mark >= 90);    // (b)
console.log('Q20:', allPassed, anyTopper); // true true
// every(): true only if ALL items pass. Stops at the first failure.
// some():  true if AT LEAST ONE item passes. Stops at the first success.

// ---------- Final Challenge - Method Recognition ----------

// "Every product name in uppercase"      -> map()
// "Only active users"                    -> filter()
// "The user with email X"                -> find()
// "The total salary"                     -> reduce()
// "Whether any field is empty"           -> some()
// "Confirm all terms are accepted"       -> every()
// "Products ordered by price"            -> sort()  (copy first if needed)