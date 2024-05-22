// Day 02  06-04-2024

/*
Memory  types: 

01. Stack  (primitive )
Mean to say when we do any changes in a value of a
variable then it will change in copy of th value 
not original value.


02. Heap (Non primitive)
Mean to say when we do any changes in a value of a
variable then it will change in directly the original value.

*/

let myname = 'shoaib';
console.log(myname);


------------------------------String--------------------------------

// console.log(typeof null);


// let value = 10;
// let valuchange = 15;

// console.log(valuchange);

// valuchange = value;
// console.log(valuchange)


//Day 02  String

let name =" ALi ";
let id =12
console.log(name + id);  //this is not good way

console.log(`The name of student is ${name} and id is ${id} `);  //This is good way

//Declaration of string

const myName = new String ( " Jabeen Iqbal ");
console.log(myName, typeof myName);  

let word = 'hetish';

console.log(word.charAt(3));
console.log(word.indexOf('i'));


----------------------------------Number and Math------------------------------------

//Day# 02 Number and Math

/*
// Number
let balance = 1009;
console.log(typeof balance, balance);

const numbervalue = 1789;
console.log(numbervalue.toString());

const numbervalue1 = 1789.123456789;
console.log(numbervalue1.toFixed(5));   // isy zarur likhna chiy aur ye ecommerece mein use karein.

console.log(numbervalue1.toPrecision(5)) 

const my_income = 128888890;
console.log(my_income.toLocaleString());
*/

//Math
console.log((Math.random() * 10 ) + 1 );   // it give value btw 0 to 1
console.log(Math.max(12, 13, 14, 15, 16, 17, 1998, 19, 20));
console.log(Math.min(12, 13, 14, -1, 16, 17, 18, 19, 20));

// console.log(Math.abs(-123));

// console.log(Math.floor(12.3));  //nichy wali value liy ga. 
// console.log(Math.round(2.445));   // major times yahi use hoti

// console.log(Math.random());
// console.log(Math.ceil(12.3));  //ceil mean top value 

------------------------------------------------Date and Time ----------------------------------------------

//Day 02 Date and Time

/*
avaScript Date objects represent a single moment 
n time in a platform-independent format. Date objects 
encapsulate an integral number that represents 
milliseconds since the midnight at the beginning 
of January 1, 1970, UTC (the epoch).
*/ 


// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());

// let myCreatedDate = new Date ( 2024, 3, 10);
// console.log(myCreatedDate);

// let myCreatedDate2 = new Date ( 2024, 5, 10);
// console.log(myCreatedDate2.toString());
// console.log(myCreatedDate2.toDateString());

// let myCreatedDate3 = new Date ("2024-06-10");
// console.log(myCreatedDate3.toString());
// console.log(myCreatedDate3.toTimeString());
// console.log(myCreatedDate3.toDateString());

// let nowTime = Date.now();
// console.log(nowTime);

// let datenow = new Date("02-03-2024");
// console.log(datenow.getTime());


let myDate = new Date();
console.log(myDate);

console.log("This will show time in mili second :",myDate.getTime())
console.log("This will show hours :",myDate.getHours())

console.log("This will show Day :",myDate.getDay())
console.log("This will show month :",myDate.getMonth()) //yaha par hum +1 karty h


console.log("This will show minutes:",myDate.getMinutes())
console.log("This will show full year :",myDate.getFullYear());

console.log("This will show world timezone :",myDate.getTimezoneOffset());

// console.log(Date.now()/1000);

console.log(`The date  is :${myDate.getDate()}-${myDate.getMonth()+1}-${myDate.getFullYear()}`);

