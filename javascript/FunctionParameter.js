// function addTwoNumber(number1 , number2){
//      console.log(number1+number2);
// }

function addTwoNumber(number1 , number2){
     // let result = (number1+number2)
     // return result
     return number1+number2
}
// addTwoNumber(3,5);
const result = addTwoNumber(3,25);
// console.log(`the sum of two no.given by you is ${result}`);

// function loginUserMessage(username){
//      if(!username){
//           console.log("please enter username");
//           return
//      }
//       return(`welcome to our channel ${username}`)
// }
// console.log(loginUserMessage("Shivam"))

// practice question 

// Q1)  Create a function named greet that takes in a name parameter and returns a greeting message.

function greet(name){
     if(!name){
          console.log("please enter your name");
          return;
     }
     return(`welcome to our channel ${name}`)
}
console.log(greet("Shivansh"));

// (Q2) Write a function called calculateArea that takes length and width as parameters and calculates the area of a rectangle.

function calculateArea(length, width) {
     if (!length || !width || length === 0 || width === 0) {
         console.log("Please enter valid values for length and width");
         return;
     }
     return `The area of the rectangle is ${length * width}`;
 }
 
 console.log(calculateArea(5, 6)); // Output: The area of the rectangle is 30

 
 