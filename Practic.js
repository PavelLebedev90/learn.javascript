function showName(){
    console.log("Vasya");
}
setTimeout(showName, 0);
console.log("Lena");
//////////////////////
showMessage();
function showMessage(){
    console.log("Message");
}


let showMess = function(){
    console.log("Message");
}
showMess();
/////////////////////
//use strict
if(2 > 1){
    let showMessage = function(){
        console.log("Message");
    }
}
showMessage();
//////////////////////
let num = 1.005 ;
let numOne = Math.round((num  + Number.EPSILON) *100) / 100;
console.log(numOne);
/////////////
let value = "135.58px";
let valueNumber = Number(parseFloat(value));
console.log(valueNumber);
console.log(typeof(valueNumber));
////////////////////////
let value = 58 + "Js";
if(isNaN(value)){
    console.log("Result is NaN");
}
/////////////////
console.log(Math.floor(58.858));
///////////////////////
let numMax = Math.max(10, 58, 39, -150, 0);
console.log(numMax);
////////////////////
let arr = ["Vanya", "Roma", "Lena"];
let newArr = arr;
newArr.push("Maks");
console.log(arr.length);
//////////////////////
let users = ["Vanya", "Ishvan"];
users.push("Olya");
users.splice(1, 1, "Petya");
console.log(users);
let userOne = users.shift();
console.log(users);
console.log(userOne);
users.unshift("Masha", "Pasha");
console.log(users);
//////////////////
let str = "Vanya, Ishtvan, Olya";
let arr = str.split(",");
console.log(arr);
////////////////
let arr = [9, 2, 8];
let reduceValue = arr.reduce(function(previousValue, item, index, array){
    console.log(previousValue);
});
