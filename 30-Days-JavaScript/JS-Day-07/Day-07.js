//---------Activity #01 Object creation and access-------
         // Task#01 create an object Book having title, author, year of publish
             const myObj={
                  title:"Decide Your Purpose ",
                  author: "Shoaib",
                  publish_year:2024,
                  updatePublishYear :function (newYear){
                    this.publish_year= newYear;
                  }
             }
            //  console.log(myObj);
            //Task#02 Access and log author and publish_year
            //    console.log(myObj.author);
            //    console.log(myObj.publish_year);

//---------Activity#02 Object methods-------------------
              //Task#03 write a string  to show author and publish year
                // console.log(`I know an author name ${myObj.author} and he publish a book in ${myObj.publish_year}`);
                //task#04 Add a method to pass a parameter to give publish year and then 
                // it update and show in console.
                //  myObj.updatePublishYear(2025);
                //   console.log(`I know an author name ${myObj.author} and he publish a book in ${myObj.publish_year}`);

//---------Activity#03 Nested Objects-------------------
             //task#05
             const myObj1={
                title:"Decide Your Purpose ",
                 author_year:{
                    author: "Shoaib",
                    publish_year:2024,
                 },
                  year:2001
           }
        //    console.log(myObj1.author_year.author);
        //    console.log(myObj1.author_year.publish_year);

//---------Activity#04 this keyword---------------------
            //Task#07 
              //go above update year 

//---------Activity#05 Object Iteration-----------------
          //Task08
                  
         //task#09
          const myObj2 = {
            title: "Decide Your Purpose",
            author: "Shoaib",
            publish_year: 2024
        };
        
        // Iterate over object properties
        // for (let key in myObj2) {
        //     if (myObj.hasOwnProperty(key)) {
        //         console.log(`${key}: ${myObj[key]}`);
        //     }
        // }
