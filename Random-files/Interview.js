console.log("!------------Here we are practicing JS Interview Question------------!");

// Question: Write a function to check if a given number is prime or not.
/*function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(` Yes, it , ${isPrime(17)},  The given number, ${num}, is prime`);*/

//How To find duplicate elements in array in javascript

/*
function findDuplicates(arr) {
    let frequency = {};
    let duplicates = [];
  
    for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    for (let key in frequency) {
      if (frequency[key] > 1) {
        duplicates.push(Number(key));
      }
    }
  
    return duplicates;
  }
  
  // Example usage:
  let array = [1, 2, 3, 2, 4, 5, 1, 6];
  console.log(findDuplicates(array)); */
  