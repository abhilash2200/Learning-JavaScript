// function myfunc () {
//     let age = prompt('enter your age')
//     console.log(age);
// }


// function greetUser (name) {
//     return 'hello' + ' ' + name
// }
// let greeting = greetUser ('Jhone')
// console.log(greeting)

// function calculateArea(length, width) {
//     return length * width
// }

// let area = calculateArea(5, 10)
// let area1 = calculateArea(20, 30)

// console.log(area)
// console.log(area1)


// function isEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }

// let result = isEvenOrOdd(8)
// let result1 = isEvenOrOdd(11)

// console.log(result)
// console.log(result1)

// function multiplyNumbers(num1 , num2) {
//     return num1 * num2
// }

// let result2 = multiplyNumbers(5, 10)
// console.log(result2)

// function findLargestNumber(num1, num2, num3) {
//     let largest 
    
//     if (num1 > num2 && num1 > num3) {
//         largest = num1
//     } else if (num2 > num1 && num2 > num3) {
//         largest = num2
//     } else {
//         largest = num3
//     }
    
//     return largest
// }

// let result3 = findLargestNumber(5, 10, 15)
// console.log(result3)

// function checkNumber(num) {
//     if (num > 0) {
//         return 'positive'
//     } else if (num < 0) {
//         return 'negative'
//     } else {
//         return 'zero'
//     }
// }

// let result4 = checkNumber(5)
// console.log(result4)

// function isLeapYear(year) {
//     if (year % 4 === 0 && year % 100!== 0 || year % 400 === 0) {
//         return 'leap year'
//     } else {
//         return 'not a leap year'
//     }
// }

// let result5 = isLeapYear(2020)
// console.log(result5)

// prompt('Are you 18+?')

// let userInput = prompt('Are you 18+?')

// if (userInput) {
//     alert('User confirmed the action')
// } else {
//     alert('User cancelled the action')
// }

// function greetUser() { // function declaration
//     console.log(`Hello ${name}`); // body of the function
// }

// function functionName () {
//     console.log('Hello World')
// } // function declaration

// functionName()

// function inputType(a, b) {
//     return a / b
// }

// let result = inputType(5, 10)

// console.log(result);


let myArray = [100, 20, 30, 40, 50, 600, 70, 80, 90, 10];
let myArray1 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];

function findLargestNumber(e) {
    e.sort((a, b) => a - b);
    //return e[e.length - 1];//returning the last element of the array [biggest]
    return e[0]; //returning the fast element of the array [smallest]

}

let largestNumber = findLargestNumber(myArray);

console.log(largestNumber);


let newArray = ['mango', 'banna',['watermelon', 'orange',['apple', 'grape',['Cherry', 'Coconut']]]] //called nasted array
console.log(newArray.flat(3));
