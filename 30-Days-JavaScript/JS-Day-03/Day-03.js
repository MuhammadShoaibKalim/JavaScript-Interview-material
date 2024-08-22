//Task#01   if-else Structure 
          //Activity#01   A number is positive, negative or zero and log to console it.
              /*  let number=0;
    
                if(number>0)
                {
                    console.log("The number is positive.");
                }
                else if(number<0)
                {
                    console.log("The number is negative.");
                }
                else
                {
                console.log("Number is zero");
                }
                */
          //Activity#02  A person is eligible for vote (age=>18) and console its result.
                  /* let age=19;

                  if(age>=18) {
                          console.log("He is eligible for vote");
                    } else {
                          console.log("He is eligible for vote");
                    }
                  */
         
//Task#02 Nested if-else Structure 
          //Activity#03  Program to check the largest of three using nested if else and show the result.
            /*     let number1=10;
                 let number2=13;
                 let number3=19;

                  if(number1>number2)
                  {
                    if(number1>number3)
                    {
                        console.log("The largest number is 1.");
                    }
                    else
                    {
                        console.log("The largest number is 3.");
                    }
                  }
                  else
                  {
                    if(number2>number3)
                        {
                            console.log("The largest number is 2.");
                        }
                        else
                        {
                            console.log("The largest number is 3.");
                        }
                  }
           */
//Task#03   switch statement
          //Activity#04  Determine the day of week and console the day enter by user.
             /*    let day=15;
                 switch (day) {
                    case 1:
                          console.log("Monday");
                        break;
                    case 2:
                        console.log("Tuesday");
                      break;
                    case 3:
                          console.log("Wednesday");
                        break;
                    case 4:
                          console.log("Thursday");
                        break;
                    case 5:
                        console.log("friday");
                      break; 
                      case 6:
                          console.log("Saturday");
                        break;
                        case 7:
                          console.log("Sunday");
                        break;  
                    default:
                       console.log("Please enter the correct day number.");
                        break;

                 }
                        */
          //Activity#05  Assign a grade ('A','B','C','D','E','F') and console its result using switch statement.
                   /*    let score=80;
                        let grade;
                 switch (true) {
                    case (score>=85):
                          grade='A'
                        break;
                    case (score>=75):
                          grade='B'
                        break;
                    case (score>=65):
                          grade='C'
                        break; 
                    case (score>=55):
                          grade='D'
                        break; 
                    case (score>=50):
                          grade='E'
                        break;
                    case (score<50):
                          grade='F'
                        break;
                    default:
                       console.log("You get the very less score to get any grade.");
                        break;
                       }
                       console.log(`You get ${grade} grade from your score..`);
                  */      
          
//Task#04    Conditional (Ternary Operator)   // condition ? a : b ;
           //Activity#06   Program to show the number is even or odd and console the result.
                    let number=12;
                    // console.log(number % 2 === 0 ? "The given number is even": "the given number is odd");
//Task#05 Combining Condition 
           //Activity#07  if a year is leap year using multiple conditions ( divisible by 4, not by 100 but do 100) 
           let year =2024;
           if(year%4===0 && year%100 !==0 || year %400===0)
           {
            console.log(year + " is a leap year.");
           }
           else
           {
            console.log(year + " is not a leap year.");
           }
          