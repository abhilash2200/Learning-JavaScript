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
//const myCountry = 'USA' //cant redeclear new value
//myCountry = 'USA' // cant reassign value
console.log(myCountry);
console.log(typeof myCountry); //string


//datatype
//1 primitive - string/number/boolean/null/undefiend
//2 non-primitive - object/array

let myString = 'hello' //string
let myNumber = 10 //number                 
let myBoolean = true //boolean
let myNull = null //null
let myUndefined = undefined //undefined

console.log(typeof myString) // string
console.log(typeof myNumber) // number
console.log(typeof myBoolean) // boolean
console.log(typeof myNull) // object
console.log(typeof myUndefined) // undefined

let myObject = {name: 'Mango', age: 25} //object
let myArray = [1,2,3,4,5] //array
console.log(typeof myObject);
console.log(typeof myArray);

//operators
//type of operators - arithmetic op. /assignment op. /comparsion op. /logical op. /conditional op.

//arithmetic operatior - '+', '-', '/', '*'

let a = 6
let b = 3
let c = a + b //addition op.
let d = a - b //subtraction op.
let e = a * b //mutiplication op.
let f = a / b //division op.
console.log(c); //9
console.log(d); //3
console.log(e); //18
console.log(f); //2


//assignment operator - '=', '+=', '-=', '*=', '/='

let g = 10
g = g + 5 //addition assignment op.
g += 5 //same as above
console.log(g); //15







