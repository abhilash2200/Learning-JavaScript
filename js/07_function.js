/*
*DATE - 05,Feb 25
*/

// function

function myFunc() {
    console.log(`Hello`);
}

myFunc();

// function with argument

function greetUser(name) {
    console.log(`Hello ${name}`);
}

greetUser('John Doe');

// function with default argument

function greetUserWithDefault(name = 'Guest') {
    console.log(`Hello ${name}`);
}

greetUserWithDefault();

// function with return value

function sumMarks(hindi, english, math) {
    let x = hindi + english + math;
    return x; // Total marks return kar raha hai
}

let totalMarks = sumMarks(80, 90, 85);
console.log(`Total Marks: ${totalMarks}`);

function percentage(tm) {
    let percent = (tm / 300) * 100;
    return percent;
}

let studentPercentage = percentage(totalMarks);
console.log(`Student's Percentage: ${studentPercentage}%`);

