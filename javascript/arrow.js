const user = {
    userName : "shivam",
    SubscriptionPrice : 999,

        welcomeMessage : function(){
            console.log(`welcome to our website ${this.userName}`);//this. refers current context
            console.log(this);// "this"  command print the whole current context of user
        }
}
// console.log(typeof(user));//object
// user.welcomeMessage();
// user.userName="sam"
// user.welcomeMessage();
// console.log(this); // gives output as empty object{} but when we run this command in browser console it behaves as a global context and returns window

function cofee(){
    console.log(this);
}

// declare function using arrow function
const chai = ()=> {
    let user1 = "neeraj"
    console.log(this);
}
// chai()
// cofee()

// when we console.log(this)  in normal function it return and behave like global context but when we console.log(this) under arrow function it throws output as empty object {}
const addTwo = (num1 , num2) => (num1+num2)
console.log(addTwo(4 , 5));