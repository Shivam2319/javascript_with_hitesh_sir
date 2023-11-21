// global scope
// let a = 300;

// block scope
// if(true){
//     let a=20;
//     let b=30
    // console.log(a); //value call by block scope
// }
// console.log(a); //value call by global scope

                // Nested Scope
    // function one(){
    //     const userName = "shivam";
    //     console.log("hello");

    //     // child scope starts
    //     function two(){
    //         const website = "youtube";
    //         console.log(userName); // from this statement we learn that child scope(I.E function two) can access the property of parent scope(I.E function one) but parent scope can't access the property of child scope
    //     }
    //     // child scope ends

    //     // console.log(website);// from this statement we learn that website belongs to child scope and we cant access it from parent scope
    //     two()
    // }
    // one()

    function addone(Number){
        let a = Number+1
        return console.log(a);
         
    }

    // another method to declare function by using of hoisting
     const addtwo = function(num){
        return num+2
     }
     console.log(addone(5));
     console.log(addtwo(5));