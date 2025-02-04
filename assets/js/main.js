/*
*DATE - 04,Feb 25
*/


// console.log('hello');

//type of variables

var myName = 'mango'
var myName ='yello' //can declear new value again
myName = 'pineapple' //can assign new value again
// console.log(myName);
// console.log(typeof myName) // string

let myAge = 25
//let myAge = 26  cant declear again 
myAge = 28 //can assign new value
// console.log(myAge);
// console.log(typeof myAge); //number

const myCountry = 'India'
//const myCountry = 'USA' //cant redeclear new value
//myCountry = 'USA' // cant reassign value
// console.log(myCountry);
// console.log(typeof myCountry); //string


//datatype
//1 primitive - string/number/boolean/null/undefiend
//2 non-primitive - object/array

let myString = 'hello' //string
let myNumber = 10 //number                 
let myBoolean = true //boolean
let myNull = null //null
let myUndefined = undefined //undefined

// console.log(typeof myString) // string
// console.log(typeof myNumber) // number
// console.log(typeof myBoolean) // boolean
// console.log(typeof myNull) // object
// console.log(typeof myUndefined) // undefined

let myObject = {name: 'Mango', age: 25} //object
let myArray = [1,2,3,4,5] //array
// console.log(typeof myObject);
// console.log(typeof myArray);

//operators
//type of operators - arithmetic op. /assignment op. /comparsion op. /logical op. /conditional op.

//arithmetic operatior - '+', '-', '/', '*'

let a = 6
let b = 3
let c = a + b //addition op.
let d = a - b //subtraction op.
let e = a * b //mutiplication op.
let f = a / b //division op.
// console.log(c); //9
// console.log(d); //3
// console.log(e); //18
// console.log(f); //2


//assignment operator - '=', '+=', '-=', '*=', '/='

let g = 10
g = g + 5 //addition assignment op.[known as simple op.]
g += 5 //same as above [known as compound op.]
// console.log(g); //15

//comparison operator - '==', '!=', '>', '<', '>=', '<='
// [==] equal to
// [===] equal value and type
// [!=] not equal
// [!==] not equal vale and type
// [>] greater than
// [<] less than
// [>=] greater than equal
//[<=] less than equal

let x = 10
let y = 20
// console.log(x == y); //false [check for equal]
// console.log(x!= y); //true [check for not equal]
// console.log(x > y); //false [x greater than y]
// console.log(x <= y); //true [x less tanh y or x equal y]

//logical operator - '&&', '||', '!', '?'

// [&&] and operator
// [||] or operator
// [!] not operator
// [?]

let h = 10
let i = 20
/*
 * This block of code checks whether the variable `h` is greater than 
 * or equal to `i` AND whether `i` is less than or equal to 50.
 * 
 * If both conditions are true, it logs the message 
 * "this is a if condition" to the console.
 * 
 * Conditions Explained:
 * - `h >= i` → Ensures that `h` is either greater than or equal to `i`
 * - `i <= 50` → Ensures that `i` is not greater than 50
 * 
 * Logical AND (`&&`) Operator:
 * - Both conditions must be `true` for the code inside the `if` block to execute.
 */
if (h >= i && i <= 30) {
   // console.log(`this is a 'and' operater logic`); // cant print coz both condition break 
}

// [||] or operator

let l = 10
let m = 50

/*
* This block of code demonstrates the use of the logical OR (`||`) operator.
*
* Corrected Logic:
* - `l === 10` → Checks if `l` is exactly equal to 10.
* - `m <= 10` → Checks if `m` is less than or equal to 10.
* - The `||` (OR) operator ensures that **if at least one of these conditions is true,** the message is logged.
*
* Issues in Original Code:
* 1. `l = 10` (assignment instead of comparison) → This was corrected to `l === 10`.
* 2. Logical OR (`||`) was ineffective due to improper assignment.
*/

if (l === 10 || m <= 10) {
    // console.log(`This is an 'or' operator logic`); //logged coz l = 10 value match with condition
}

// console.log(h && i); //20 [returns second operand if first operand is false]
// console.log(h || i); //10 [returns first operand if first operand is true]
// console.log(!h); //false [returns false if operand is true]


//conditional operator - '?'







// if condition

let j = 15
let k = 10

if(j > k){
    // console.log('this is a if condition');
}

// if else condition

let n = 10
let o = 20

if (n == o) {
   // console.log('n and o are equal');
} else {
   // console.log('n and o are not equal');
}


// if else if condition

let t = 10 

if (t > 1 && t < 11) {
   // console.log(`good morning`);
} else if (t > 11 && t < 15) {
   // console.log(`good afternoon`);
} else if (t > 15 && t <18) {
   // console.log(`good evening`);
} else {
   // console.log(`good night`);
}

// ternary operator

let p = 10
let result = p > 5? 'greater than 5' : 'less than or equal to 5'
//console.log(result);

/*
working process

[
    if (p > 5) {
        result = 'greater than 5';
    } else {
        result = 'less than or equal to 5';
    }
    console.log(result); //logged coz p = 10 value match with condition
]

The ternary operator checks if the condition (p > 5) is true.
If it is true, it evaluates the expression to the right of the '?' (in this case, 'greater than 5').
If it is false, it evaluates the expression to the right of the ':' (in this case, 'less than or equal to 5').
In this case, p is greater than 5, so the result is 'greater than 5'.
The ternary operator then assigns the value of the result to the variable'result'.
The console.log statement then prints the value of the variable'result'.
console.log('greater than 5'); //logged coz p = 10 value match with condition
*/

// switch statement

let month = 5

switch (month) {
    case 1:
       // console.log('January');
        break;
    case 2:
       // console.log('February');
        break;
    case 3:
       // console.log('March');
        break;
    case 4:
       // console.log('April');
        break;
    case 5:
       // console.log('May');
        break;
    case 6:
       // console.log('June');
        break;
    case 7:
       // console.log('July');
        break;
    case 8:
       // console.log('August');
        break;
    case 9:
       // console.log('September');
        break;
    case 10:
       // console.log('October');
        break;
    case 11:
       // console.log('November');
        break;
    case 12:
       // console.log('December');
        break;
    default:
       // console.log('Invalid month');
}

let age = 22 
switch(true) {
    case
        (age >= 18 && age <= 40):
       // console.log('You are an adult');
        break;
    default:
       // console.log('You are a child'); 
}




