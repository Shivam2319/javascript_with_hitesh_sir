// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

//let myCreatedDate = new Date(2023, 8, 15);
// console.log(myCreatedDate.toString());
 

// let myCreatedDate = new Date("09-09-2023");
//  console.log(myCreatedDate.toLocaleString());

//let myTimeStamp = Date.now();//The Date.now() static method returns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC

// console.log(myTimeStamp);

//console.log(myCreatedDate.getTime());//The getTime() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log((newDate.getMonth()+1));
console.log(newDate.getDay());
let a = newDate.toLocaleDateString('default',{
    weekday: "long"
})
console.log(a);