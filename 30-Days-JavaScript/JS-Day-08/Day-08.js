//----------------Activity#01 Template Literals-------------
                 //Task#01 Use Template literals to create string that includes the person name, age.
                    const name="Muhammad Shoaib Kalim";
                    const age = 20;
                    let greet = `Hello he is ${name} and ${age} old guy passionate about learning code.`;
                    // console.log(greet)
                //Task#02 Create multi-lines string using template literals 
                    let multi_string=` Shoaib, IT, 20, software Engineer, Lahore`
                    // console.log(multi_string);
   
//---------------Activity#02 Destructuring-----------------
               //Task#03 Use array destructuring to extract first and second element from array of number.
                   let number_list=[1,3,55,67,23,69,24,90];
                   let [n1, n3]=number_list;
                   console.log(n1,n3);
               //Task#04 Use object destructuring to extract book title and author from book  
                  let my_Book_details = {
                        title:"Define Your Purpose ",
                        author:"Shoaib",
                        level:"beginner",
                        price:230,
                        year:2024
                  }
                //   console.log(`The book title is '${my_Book_details.title}' and author name is '${my_Book_details.author}' `);



//---------------Activity#03 Spread and Rest operator------
               //Task#05 Use spread operator to create new array that includes all elements of existing array plus additional
               let arr=["Shoaib", "Ali", "Ahmad"];
               let  spreadOpArr = [...arr, "Khizar"];
              //    console.log(spreadOpArr);

               //Task#06 Use rest operator in a function to accept and arbitrary number of arguments, sum them and show
                 function sum(...number_list){
                    return number_list.reduce((preValue, nextValue) =>{
                     return preValue + nextValue;
                    },0)
                 }      
                //  console.log(sum(1,3,4,5));
             

//---------------Activity#04  Default parameters ----------
                 //Task#07 Write function that take two parameter and return product, second having default value 1, 
                 // calling th function with and without second parameter. 
                 function product(num1, num2=1) {
                    return num1* num2;
               }
            //    console.log(product(3,5));
            //    console.log(product(7));

//-----Activity#05  Enhanced Object Literals----- 
                 //Task#08 Use enhanced object literals to create object with method and properties and log it.
                 let person = {
                    name: "John Doe",
                    age: 30,
                    greet() {
                        console.log(`Hello, my name is ${this.name}`);
                    }
                }
                person.greet();
                 //Task#09 create an object with computer property names based on variables and log to console it.
                 let prop1 = "firstName";
                 let prop2 = "lastName";
                 let obj = {
                    [prop1]: "Ali",
                    [prop2]: "Jan",
                    greet() {
                        console.log(`Hello, my name is ${this[prop1]} ${this[prop2]}`);
                    }
                }
                obj.greet();