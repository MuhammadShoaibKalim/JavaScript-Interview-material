//variables 

/*
Memory space mein store karny user ki details ko 
use karty h... 


Prefer to use var because of issue in block 
scope and so use let keywords at most time and const too.


agr declare nhe karty aur chor detay h, 
tu wo undefined hota h.
*/

//01 const

const accountId = 123;

console.log(accountId);  //not changed

//02 let

let account_email = 'accountemail@gmail.com';


//03 var 
var account_password = '1234@account';  //


// undefined

let account_state;
console.log(account_state);
console.log(account_email);
console.log(account_password);
---------------------------------------------Data Types---------------------------------------
//Data types


/*
new version mein likhny k liy 
treat all js code as a newer version


js ka engine browser k andar chupa hoa h so we use 
and write code in the browser.

coding mein readability is important 

documentation k liy mdn k liy jein
but ecma mein parhny k liy jein ..aur ye standard ko dakhein.

*/ 

//coding mein readability is important  
//ye achi chez nhe h
console.log('hello'); console.log("jee");


//alert statement
// alert('Please wait');


// 1. Number   bigint ko bari values ko leny/store karny k liy use karein gy.
  let age = 19;

// 2. String  try use in double quote.
let name = " shoaib ";  

// 3. Boolean   true/false
let isGood = false;

// 4. Array


// 5. Object 

// 6. Null aik type ka object h
//standalone value h 
//empty value ki representation.

let id = null;    //tu ye empty hi rhy ga. 

// 7. Undefined  value assign nhe ki

//8. Date

//9. symbol  uniqueness used hoti h 


//typeof

console.log(typeof age);  //it will tell you type which one is
-------------------------------------------------Data Types Conversion------------------------------------------
//Datatype conversion confusion 

let score = 33;
console.log(" The type of score is :", typeof score);
console.log(typeof(score));


// let id ='ali';
let id =null;
console.log(typeof id);
console.log(typeof(id));


let value_id = Number(id);
console.log(typeof value_id);

console.log(typeof(value_id));
console.log(value_id);


/* 

NaN is a special type   33 <=" 33 " 
Jb string to Numebr conversion karty h tu 
sub thek h but when it is being checked 
what is actually it is NaN but in case of Null  
it give 0 answer or output aur wo object k tor par ay ga.

Ha agar bool/true then the output will be
1  aur sath mein bool hi ay ga.

Boolean mein true ko 1 answer deta h. 
  

jis ko jis type mein karein gy wahi ay gi aur answer bhe wahi ay ga

*/

-----------------------------------------------Confusion with Data Types conversion------------------------
//Confusion in string to number conversion

// **************** OPerations ****************

let value = 89 ;

let negvalue = -value ;
console.log(negvalue);

console.log( 2+2);
console.log( 2-2);
console.log( 2/2);
console.log( 2%2);
console.log( 2*2);


//Trick things

let str1 = " Muhammad Shoaib " ;
let str2 = " Kalim " ;
console.log(str1 + str2 );

console.log("2" + 33 + "11");
console.log(2 + 33 + " 11 ");
console.log(" 25 " + 33 + " 11 ");

console.log(7 * 3 + 22 - 11 % 14);  //This is not good way.
console.log((7 * 3)  + 22 - 11 % 14);  //This is  good way.


// This is not good way below things in production 
//environment

console.log(true); //This will give true/1
console.log(+true); //Also give true 

console.log(+ "");  //false or 0
console.log(!"");  //true

num1=num3=num4=2+3;   //true
console.log(!!"");  //false or 0


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

let values=gameCounter++;
console.log(values);  //101


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

--------------------------------------Summary Data Types------------------------------------------
//Comparison of datatypes
let a = 22;
console.log(a>2);

//Compare same data type 

console.log("12">3);
console.log("02">3);

console.log("12"<3);
console.log(null>=0);  // 0=0 so it is true


console.log(undefined>=0);  //false
console.log(undefined==0);  //false
console.log(undefined===0);  //false strictly check karta h

console.log("2"===2); //false
console.log(2===2); //true



/*

Events of web browser and objects master them and get into master.
JS is dynamic or statically type value h.
where the interpreter assigns variables a type at runtime based 
on the variable's value at the time.

Memory mein data ko kis trah rakha aur access kia jata h:

1. primitive 
It is called by value and gives a copy of original data from memory 
as a reference to the original.
string, null, boolean, undefined, number,  symbol(uniqueness), 
bigint(bari values)

2. Non-primitive(reference type)
object, array, function

*/



let value = Symbol('23');
let valuetwo = Symbol('23');
console.log(value ===valuetwo);


const bigNum = 7834738894422572n;
console.log(typeof bigNum);

//Function, Object, array

const myArray =[ 90, 'shoaib', 'ali', 100, '89'];
console.log(myArray);

const myObject ={ 
    id:90,  
    name: 'shoaib', 
    name2:'ali',
    id2: 100, 
    valu:'89'
};
console.log(myObject);
console.log(typeof myObject);

const myfun =  function (){
    console.log(myObject);
}
myfun();
console.log(typeof myfun);

const myfun2 =  function(){
     return myfun;
}
myfun2();


console.log(typeof myfun2);

//ye function ki type function hi hota h but 
//actually it is function object
