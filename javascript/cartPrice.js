function calculateCartPrice(...num1){
    console.log(num1);
    return
}
calculateCartPrice(200,400,500,800);

// pass object using function
const user = {
    userName: "shivam",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
handleObject(user)

// pass array using function
let arr1 = [200,400,600,100]

function returnSecondValue(getArray) {
    return getArray[2]
}
console.log(returnSecondValue(arr1));