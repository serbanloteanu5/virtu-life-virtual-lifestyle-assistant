/*
 * Filename: sophisticated_code.js
 * Content: Elaborate and complex code demonstrating various JavaScript concepts
 */

// Define a class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create some Person objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Define a subclass of Person called Employee
class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }

  // Method to display employee information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Company: ${this.company}`);
  }
}

// Create an Employee object
const employee = new Employee("Carol", 35, "XYZ Corp");

// Define a function to calculate the factorial of a number
function factorial(num) {
  let result = 1;
  if (num === 0 || num === 1) {
    return result;
  } else {
    for (let i = num; i >= 1; i--) {
      result *= i;
    }
    return result;
  }
}

// Calculate and display the factorial of 5
console.log(`Factorial of 5: ${factorial(5)}`);

// Define an asynchronous function to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log('Error:', error);
  }
}

// Call the fetchData function
fetchData();

// Define a higher-order function to filter even numbers from an array
const filterEven = (arr) => arr.filter(num => num % 2 === 0);

// Create an array of numbers and filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEven(numbers);
console.log('Even Numbers:', evenNumbers);

// Define a generator function to generate a sequence of Fibonacci numbers
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Create a Fibonacci sequence generator and display the first 10 numbers
const fibonacciGenerator = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fibonacciGenerator.next().value);
}

// Define a closure to create a counter
function counter() {
  let count = 0;
  return () => {
    count++;
    console.log('Count:', count);
  }
}

// Create two counters and increment them
const incrementCounter1 = counter();
const incrementCounter2 = counter();
incrementCounter1();
incrementCounter1();
incrementCounter2();

// Demonstrate arrow functions and template literals
const printFullName = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  console.log('Full Name:', fullName);
}

// Call the printFullName function
printFullName('John', 'Doe');

// Define a set of promises
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 2000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000)),
];

// Execute all promises concurrently
Promise.all(promises)
  .then(results => console.log(results))
  .catch(error => console.log('Error:', error));

// Define a class implementing the Iterator protocol
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => {
        if (value <= this.end) {
          return { value: value++, done: false };
        } else {
          return { done: true };
        }
      }
    }
  }
}

// Iterate over a range of numbers
for (let num of new Range(1, 5)) {
  console.log(num);
}

// Demonstrate the use of spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log('Merged Array:', mergedArray);

// Define a function that takes a callback
function callbackExample(callback) {
  console.log('Executing some code before the callback');
  callback();
  console.log('Executing some code after the callback');
}

// Call the function with a callback
callbackExample(() => console.log('Inside the callback function'));

// Define a class with a static method
class MathUtils {
  static multiply(a, b) {
    return a * b;
  }
}

// Call the static method
console.log('Multiplication:', MathUtils.multiply(5, 3));

// Define a module using an IIFE (Immediately Invoked Function Expression)
const myModule = (function() {
  let privateData = 'Secret';
  
  const privateMethod = () => console.log('Inside private method');
  
  return {
    publicMethod: () => {
      console.log('Inside public method');
      privateMethod();
      console.log('Accessing private data:', privateData);
    }
  };
})();

// Use the module's public method
myModule.publicMethod();