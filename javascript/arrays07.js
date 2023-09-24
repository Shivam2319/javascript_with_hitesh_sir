// arrays
// js follow 0 indexing rule
// we have two method to define any arrays

// method 1
// const myArrays = [2,4,6,8,10,13,15,18];
// console.log(myArrays[2]);

// method 2
// let heroes = new Array("hitesh", "shivam", "Neeraj")
// console.log(heroes);


// array method or commands

// heroes.push("satyam" ,"Ayush")//.push is use to add any new element from last index in existing array
// heroes.pop();//.pop() is used to remove the last indexing value of the given array
// heroes.unshift("ram"); //.unshift is used to add any new element from the starting index in the existing array
// heroes.shift(); // it is used to remove the value at the 0 index
//  console.log(heroes.includes("mohan")); //.include is used to know that the given value is avaialble or not in the arrays
//console.log(heroes.indexOf("satyam")); // .indexOf is used to know the index of parameter that we have passed. If the parameter is available in the given array it gives the index value of parameter otherwise -1.Here is the output is -1 because satyam is not available in the given array
 
// console.log(heroes);
// let friends = heroes.join()//The JavaScript array join() method combines all the elements of an array into a string and return a new string.
// console.log(friends);
//  const myArr = ["hitesh",1,true,0.5]
// console.log(myArr[0]);

//slice , splice

// console.log("A" , myArr); 
// const myn1 = myArr.slice(1,3);//.slice(index value , value-1)
// console.log(myn1);
// console.log("B" , myArr);
// const myn2 = myArr.splice(0,2); //.splice manipulate original array.it doesnt create shallow copy 
// console.log("C" , myArr);
// console.log(myn2);

// const marvel_heroes =["Thor" , "Iron Man" , "spiderMan"]
// const dc_heroes =["superMan" , "flash" , "batMan"]
// marvel_heroes.push(dc_heroes);//this will create arrays under arrays
// console.log(marvel_heroes);// output:- [ 'Thor', 'Iron Man', 'spiderMan', [ 'superMan', 'flash', 'batMan' ] ] 
// console.log(marvel_heroes.length);//the inner array i.e ['superMan', 'flash', 'batMan'] treated as a single object so the length of the marvel_heroes.length is 4
// console.log(marvel_heroes[3][1]);//if we want to access inner arrays part 
// const d = marvel_heroes.concat(dc_heroes);//.concat() merge two arrays in a single array within a new variable
// console.log(d);

// merge two arrays using spread
// const all_heroes = [...marvel_heroes , ...dc_heroes]
// console.log(all_heroes);//output:- [ 'Thor', 'Iron Man', 'spiderMan', 'superMan', 'flash', 'batMan' ]
let score1 =500;
let score2 =600;
let score3 =700;
console.log(Array.of(score1,score2,score3));//Array.of() is used to merge multiple array