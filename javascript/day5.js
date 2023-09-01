/*on the basisof accessing and locating there are two types of datatypes:-
(1). primitive datatypes
(2). non primitive datatypes
(1). primitive datatypes(call by value):- There are seven types of primitive data types in JavaScript. They are as follows:
(a). String (b). Number (c). Boolean  (d).Null (e). Undefined (f). Symbol (g). BigInt

(2). Non-primitive datatypes(refrence):- 

(a)Array (b)Object (c) Functions*/

// (a)Array:-  
const heroes = ["shaktimaan" , "Naagraj", "bhola"] ;
// (b) object:-
let myObj = {
    name : "shivam",
    age:22,
}
// function:-
const myFunction= function(){
    console.log("hello world");
}
console.log(typeof(myFunction)) //typeof is used to know the type of datatypes
console.log(typeof(myObj)) //typeof is used to know the type of datatypes
console.log(typeof(heroes)) //typeof is used to know the type of datatypes




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  stack(stack memory is to allocate memory when we use primitive datatypes) 
//  heap (heap memory is to allocate memory when we use Non primitive datatypes)
// stack:-

let myYoutubeName = "studyyy adda";
let anotherName = myYoutubeName;
console.log(anotherName);