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



const tinderUser = {} // both are same but the major difference between this is Non singleton object

// const tinderUser1 = new Object() //this is singleton object

tinderUser.id = "123abc"
tinderUser.name = "shivam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "skshiv@google.com",
        fullName: {
            userFullName :{
                firstName: "Shivam",
                lastName : "tiwari"
            }
        }
}
// console.log(regularUser.fullName.userFullName.firstName);

let obj1 = {name:"shyam" ,age:28}
let obj2 = {fathername:"shyam_lal" ,age:48}

// to combine obj1 and obj2
// let obj3 = Object.assign({}, obj1, obj2);
// let obj4 = Object.assign( obj1, obj2);
// console.log(obj4);
// console.log(obj3);

// to combine two or more object using spread method
let obj5 = {...obj1, ...obj2}

// console.log(obj5);

// accesing object by keys , value and enteries
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// when we access object by keys ,it converts the objects into arrays


// .hasOwnProperty("question to be asked") is used to check the given property is available or not in the given object
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

                    // object de structured

    const course = {
        courseName : "sigma 1.0 full stack web devlopment batch",
        price: "999",
        courseTeacher: "hitesh Chaudhary"
    }
    // console.log(course.courseTeacher);

    const {courseTeacher : teacher} = course
    // console.log(courseTeacher); //when we destructure any object this coomand doesnt work
    console.log(teacher);