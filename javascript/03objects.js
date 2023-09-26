// we have two methods to declare any objects 
// (a) declare variable by literals
// (b) declare variable by cunstructor

const mySym = Symbol("key1")
// object Literals
const jsUser = {
    name : "Shivam",
    age : 20,
    location : "Darbhanga",
    email : "skshivam@gmail.com",
    isLoggedIn : false,
    lastLoggedInDays : ["Monday","Tuesday","Wednesday"],
    [mySym] :"shivam"
}
// Accessing objects

// we have two method to access objects
// (a)    console.log(variableName.objectsName)
// console.log(jsUser.email);

// // (b)console.log(variableName[objectName])
// console.log(jsUser["name"] ,jsUser["age"] ,jsUser["location"]); // it is good practice for programming in daily life
// console.log(typeof(jsUser[mySym]));
// console.log(jsUser[mySym]);
// jsUser.email = "skshiv5024@google.com"

// console.log(jsUser.email);

//  object.freeze(jsUser); // object.freeze is used for lock object so we cant update objects

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}` );
}