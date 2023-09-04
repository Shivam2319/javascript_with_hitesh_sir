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
console.log(balance.toString().length)//here .toString converts balance (i.e object) into string and makes changes in his copy
console.log(balance.toFixed(2));//.toFixed() is used to write how many character we want to display after decimal number 
// here output is 5000.00

let otherNumber = 23.87569;
console.log(otherNumber.toPrecision(3));// .toPrecision is used to round off their value from last number here we took 3 number that means it see 4th no. which is 7 so the no. 23.8 is increased by 0.1 and the output is 23.9
// output  23.9