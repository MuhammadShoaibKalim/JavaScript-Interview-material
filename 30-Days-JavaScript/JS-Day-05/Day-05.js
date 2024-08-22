//--------------Activity01 Function Declaration--------------------------------
               //Task#01 check the number is even or odd and consol it.
                 /* let number=13;
                  function check_even_odd() {
                        if(number % 2 === 0)
                             console.log("Even");
                        else
                           console.log("Odd");
                  }
                  check_even_odd();*/
               // Activity02 calculate the square if number.
                     /*   let Number=13;
                       function square_number() {
                             console.log(Number*Number);
                       }
                          square_number();
                          */
//--------------Activity02 Function Expression---------------------------------
               //Activity03  find the maximum of two number 
                 /* let Number=13;
                  let number2=13;
                  function max_number() {
                            if(Number>number2)
                                console.log(`${Number} is greater.`) 
                            else if(Number<number2)
                                console.log(`${number2} is greater.`) 
                            else
                                console.log("Both are equal.")
              }
                 max_number();
                 */
               //Activity04  concat two string and show the result.  
                 /*  string1="Muhammad Shoaib kalim";
                   string2="software Engineer";        
               function concat_function() {
                            console.log(`This laptop is belone to ${string1} and who is ${string2} soon.(INSHALLAH)`);
                       }
                        concat_function();*/
//--------------Activity03 Arrow Function --------------------------------------
               //Activity05  calculate the sum of two number
                          /*
                          let number1=13;
                          let number2=14;
                       const sum=()=> {
                             console.log(number1+number2);
                       }
                       sum();

                       */
                          
               //Activity06  check if a string contains char and show bool value
              /*
               const isStringContainsChar = (str, char) => {
                return str.includes(char);
            };
            
            const myString = "Hello, World!";
            const myChar = "o";
            
            console.log(isStringContainsChar(myString, myChar)); // Outputs: true
            ;*/
            /*
              const stringContain = ( str, char)=>{
                      return str.includes(char)
              } 
              const str="Muhammad Shoaib kalim";
              const ch="S";
              console.log(stringContain(str, ch));
                   */
//--------------Activity04 Function Parameters and Default values---------------
               //Activity07  Take two parameters and product of them to show result
                        /*  function return_sum(num1, num2) {
                                return (num1+num2);
                          }
                          console.log(return_sum(14,35));
                          */
               //Activity08  take person name and age show greetings msg.
 /*
               function greetings(name, age) {
                            return (`Hello, I have ${name} and it is ${age} old.`)
                         }
                          console.log(greetings("HP", 3));
*/
//--------------Activity05 High Order Function----------------------------------
               //Activity09  Take a function and a Number and calls that many times.
                       /* function print_hello(num) {
                            for(let i=0; i<num; i++) {
                                  console.log("Hello");
                            }
                          }
                          print_hello(5);
                          */
                          /*
                        const numbers=[12,34,11,15,17,19];
                        const double = numbers.map( num => num*2);
                        console.log(double);
                          
                        const find = numbers.map( num => num>15 );
                        console.log(find);
                           */
               //Activity10  Two function and a value, applies the first function to the value and then applies the second function result.
                            const multiply =(num, multiplier) =>num * multiplier;
                            const add = (add, addition) => add + addition;
                            const value=12;
                            console.log(add(multiply(value, 2),6));