/*
*DATE - 04,Feb 25
*/


console.log('hello');

//type of variables

var myName = 'mango'
var myName ='yello' //can declear new value again
myName = 'pineapple' //can assign new value again
console.log(myName);
console.log(typeof myName) // string

let myAge = 25
//let myAge = 26  cant declear again 
myAge = 28 //can assign new value
console.log(myAge);
console.log(typeof myAge); //number

const myCountry = 'India'
// const myCountry = 'USA' //cant redeclear new value
// myCountry = 'USA' // cant reassign value
console.log(myCountry);
console.log(typeof myCountry); //string


// local/global variable

let x = 90 // global variable
console.log(x); //can do


function abc () {
    let y = 100 // local variable
    console.log(y); //can do
    console.log(x); //can do
}

abc(); //no output [has local variable]
