const numbers = [1, 2, 3, 4, 5];

// map: create a new array by applying a function to each element
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

// filter: create a new array with elements that pass the test in the function
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce: apply a function against an accumulator and each element to reduce it to a single value
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
