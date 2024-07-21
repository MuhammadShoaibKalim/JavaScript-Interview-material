console.log("Objects");

let person = {
  name: "Jabeen",
  age: "19",
  roll_number: "1234345",
  class: "BSIT",
};

// Write a javascript function which return keys of object
console.log(Object.keys(person));

// Write a javascript function which return entries of object
console.log(Object.entries(person));

// Write a javascript function which compare two objects

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, c: 4, c: 3 };

const CompObj = (a, b) => Object.keys(a).every((key) => b[key]);

// console.log(CompObj(obj1, obj2));




