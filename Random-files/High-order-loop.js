//Day 21-04-2024

//for of
//["", ""," "," "]
//[{},{},{}]


let arr1 = [1,2,3,4,5];

for(let i of arr1){
    console.log(arr1[i]);  
}  
//printing start from not 0 index

let arr2 = [1,2,3,4,5,66,55,44,33,22,11];

for(let j of arr2){
    //console.log(j);  
}   // it print all elements here.

arr2.forEach(element => {
    // console.log(element);
});


//Map 


const map = new Map();

map.set("name", "Jabeen");
map.set ("id", 123);

// console.log(map.get("id"));
// console.log(map.size);

// map.set("email", "email@example.com");
// console.log(map.get("email"));
// map.forEach(element => {
//     console.log(element);
// });


// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// contacts.set("Alia", { phone: "111-222-5555", address: "111 e 2nd line" });
// contacts.has("Jessie"); // true
// contacts.get("Hilary"); // undefined
// contacts.has("Alia");
// console.log(contacts);

// console.log(typeof contacts)

// contacts.delete("Jessie")
//  console.log(contacts);



// const first = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
//   ]);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
  ]);

  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
//   const merged = new Map([...first, ...second]);
//   console.log(merged)


const map =new Map();

map.set("name", "Jabeen");
map.set("id","123");
map.set("email","email@example.com");

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const key in map) {
    console.log(key);
  }

// for (const [key, value] of map) {
//     console.log(key +  " : " + value);
// }


const fbUser1 = {
    name: 'Jabeen',
      id: 123456,
 logedIn: false,
 address: "Lahore"
};

// for (const [key, value] of fbUser1) {
//     console.log(key +  " : " + value);
// }     //Object iteratable nhe h j map iteratable h

// for (const key in fbUser1) {
//   console.log(fbUser1[key]);
// }




const fbUser2 = [ 'Jabeen', 123456, false,"Lahore" ];
// console.log( typeof fbUser2)

// for (const key in fbUser2) {
//   console.log(key);
  
// }    // It will give keys of array

// for (const key in fbUser2) {
//     console.log(fbUser2[key]);
    
//   }  // It will give value in each key of array


// const staffsDetails = [ "Jam Josh", 44, 4000, "USD" ];

const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  for (const key in staffsDetails) {
    //    console.log(key);
    //    console.log(staffsDetails[key]);
  }

  for (const key of staffsDetails) {
    // console.log(key);
    // console.log(staffsDetails[key]);
   }
    //In my practice I have seen that for of loop is not best for array of objects
//     staffsDetails.forEach((staffDetail , index) => {
//     console.log(`Index ${index} : I am ${staffDetail.name}  and I live in CA.` );
// });



function myFun(item, index, arr){
       console.log(item.salary);
}
staffsDetails.forEach(myFun);  //Here we give only reference not calling function/execution/printing
