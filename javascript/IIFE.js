// immediately invoked function expression (IIFE)
(function chai(softDrink){
    console.log(`do u want to drink ${softDrink}`);
}) ("pepsi");
(function cofee(hardDrink){
    console.log(`do u want to drink ${hardDrink}`);
})("beer")

// It is a JavaScript function that runs as soon as it defined. An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting from within the blocks. It allows the public access to methods while retaining the privacy for variables defined in the function.

// IIFE is a design pattern that is also known as the Self-Executing Anonymous Function. It contains two major parts:

// The first part is the anonymous function having a lexical scope, which is enclosed within the Grouping operator ().
// The second part creates the IIFE by which the JavaScript engine will interpret the function directly.