//------------Activity#01 Array creation and Access---------
              //Task#01 Create an Array of number from 1 to 5
                //  let arr=[1,2,3,4,5];
                //   console.log(arr);
                 
              //Task#02 Access the first and the last element
                //   console.log(arr[0]);
                //   console.log(arr[arr.length-1]);
//------------Activity#02 Array Method(Basics)--------------
                  //Use push method to add from last
                 //arr.push(6);
                 //console.log(arr);
                 //use pop to remove the last number
                //arr.pop(5);
                //console.log(arr);
              //use  unshift method to new number to the beginning
                //    arr.unshift(45);
                //    console.log(arr);
//------------Activity#03 Array Method(medium)--------------
              // use map
            //   const mapResult = arr.map(num => num * 2);
            //   console.log(mapResult);
              // use filter
              //const filterResult = arr.filter(num => num % 2 === 0);
            //    console.log(filterResult);
              // use reduce 
              //const reduceResult = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            //   console.log(reduceResult);
//------------Activity#04 Array Iteration-------------------
               //use for loop to iterate the array
                // for(let i=0;i<5;i++){
                //   console.log(arr[i]);
                // } 

               // use forEach
            //     let sum=0;
            //     let myarr=[1,3,5,77,8];
            //     myarr.forEach(element => {
            //        sum +=element;
            //    });
            //    console.log("The sum :",sum );
               
               
//------------Activity#05 Multi dimensional Array-----------
               //create two dimensional array (matrix)
               let matrix = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
               ];
               console.log(matrix[0][0]); 
                console.log(matrix[1][2]); 
                console.log(matrix[2][1]); 


               let sum = matrix[0][0] + matrix[1][1] + matrix[2][2];
               console.log("Sum of diagonal elements:", sum); 
            

               //Access and use element from two-dimensional array.
               
               // Iterating over the matrix and printing all elements
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
