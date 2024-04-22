

// Immediately Invoked Function Expressions IIFE

/*
Story behind the IIFE:
Hum chaty k jaisy hamri application start ho, 
ye kam immediately ho aur wo apny aik jo specific scope 
h ko go through kary ya function perform ho na k global sy koi pollute ho.
1. IIFE ko hum global ka pollution ko hatny k liy use karty h.
2. IIFE ko immediately call/invoked karny k liy bhe .(interview)

IIFE syntax
(function IIFE(){
    console.log("IIFE")
})();

first one is definition of function 
second one is invoking/execution of function.
aik aur chez last py semicolon bhe lagana h q k 
ye k kaha py function ko rukana/end karna/hota h

*/

//

// function IIFE(){
//     console.log("IIFE");
// }
// IIFE();

(function IIFE(){   //named IIFE
    console.log("IIFE");
})();

( (name)=>{  //simple/unnamed IIFE
    console.log(`This is ${name} function`);
})("IIFE");
