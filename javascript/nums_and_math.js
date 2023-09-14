const score= 400;
console.log(`the score is ${score} and the type of score is ${typeof score}`);

// another way yo write number forcefully
const balance = new Number(5000);
console.log(balance.length);
console.log(score.length);
console.log(`available balance in your bank is ${balance} and the type of balance is ${typeof balance}`);
// .toString()is used to convert the given datatype into string. here balance is converted into string
// .length is used to know how many character are in given string
/* In JavaScript, the .length property is primarily used with data structures like strings, arrays, and objects with a length property. When you try to use it with other data types, like numbers or objects without a length property, it will return undefined because those data types do not have a defined .length property by default.

Here's a brief explanation for different cases:

Arrays:

Arrays have a .length property that represents the number of elements in the array. 
for example:-
const myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // Outputs 5

Strings:
Strings are essentially sequences of characters, and the .length property of a string returns the number of characters in the string:
for example:-

const myString = "Hello, World!";
console.log(myString.length); // Outputs 13

Objects:
Plain JavaScript objects (i.e., objects created with {}) do not have a .length property by default. If you want to determine the number of properties (key-value pairs) in an object, you can manually iterate through them:

const myObject = { name: "John", age: 30, city: "New York" };

let objectLength = 0;
for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    objectLength++;
  }
}

console.log(objectLength); // Outputs 3

Numbers:

Numbers, like 42 or 3.14, are primitive data types in JavaScript, and they do not have a .length property because they are not considered iterable or collections of items.
To summarize, .length is a property that's associated with specific data structures (arrays, strings, and objects with a length property), and trying to access it on other data types will result in undefined because it's not defined for those types.
*/
/*
console.log(balance.toString().length)//here .toString converts balance (i.e object) into string and makes changes in his copy
console.log(balance.toFixed(2));//.toFixed() is used to write how many character we want to display after decimal number 
// here output is 5000.00

let otherNumber = 23.87569;
console.log(otherNumber.toPrecision(3));// .toPrecision is used to round off their value from last number here we took 3 number that means it see 4th no. which is 7 so the no. 23.8 is increased by 0.1 and the output is 23.9
// output  23.9
const hundreds= 10000000;
console.log(hundreds.toLocaleString('en-in'));//toLocaleString is used for convert numbers in given format here format given 'en-in' that means indian english numeric value which gives output 1,00,00,000
let date = new Date();
console.log(date.toLocaleDateString('en-in'));
*/
// +++++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++
/*
console.log(Math);
console.log(Math.abs(-4));//Math.abs is used to convert negative numbers into positive numbers
console.log(Math.round(4.8));//Math.round is used for get round-off value
console.log(Math.ceil(4.2));//Math.ceil is used for get upper round-off value. Output of given code is 5
console.log(Math.floor(4.6));//Math.floor is used for get lower round off value. Output of given code is 4
console.log(Math.sqrt(4));//Math.sqrt is used for find square root of any number
console.log(Math.pow(5,2));//Math.pow(number,power) is used to find power of any number
console.log(Math.min(45,84,21,12)); //Math.min is used for find minimum value in given array
console.log(Math.max(45,84,21,12)); //Math.min is used for find maximum value in given array
*/
console.log(Math.random());//Math.random's value lies between 0 and 1
console.log((Math.random()*10)+1);
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min+1) +min));

console.log(Math.trunc(79.654));//The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
console.log(Math.cbrt(3));//The Math.cbrt() static method returns the cube root of a number.
