function myfunc () {
    let age = prompt('enter your age')
    console.log(age);
}


function greetUser (name) {
    return 'hello' + ' ' + name
}
let greeting = greetUser ('Jhone')
console.log(greeting)

function calculateArea(length, width) {
    return length * width
}

let area = calculateArea(5, 10)
let area1 = calculateArea(20, 30)

console.log(area)
console.log(area1)


function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

let result = isEvenOrOdd(8)
let result1 = isEvenOrOdd(11)

console.log(result)
console.log(result1)

function multiplyNumbers(num1 , num2) {
    return num1 * num2
}

let result2 = multiplyNumbers(5, 10)
console.log(result2)

function findLargestNumber(num1, num2, num3) {
    let largest 
    
    if (num1 > num2 && num1 > num3) {
        largest = num1
    } else if (num2 > num1 && num2 > num3) {
        largest = num2
    } else {
        largest = num3
    }
    
    return largest
}

let result3 = findLargestNumber(5, 10, 15)
console.log(result3)

function checkNumber(num) {
    if (num > 0) {
        return 'positive'
    } else if (num < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}

let result4 = checkNumber(5)
console.log(result4)

function isLeapYear(year) {
    if (year % 4 === 0 && year % 100!== 0 || year % 400 === 0) {
        return 'leap year'
    } else {
        return 'not a leap year'
    }
}

let result5 = isLeapYear(2020)
console.log(result5)