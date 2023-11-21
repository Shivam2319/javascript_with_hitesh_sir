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

function loginUserMessage(username){
     if(!username){
          console.log("please enter username");
          return
     }
      return(`welcome to our channel ${username}`)
}
console.log(loginUserMessage("shivam"))