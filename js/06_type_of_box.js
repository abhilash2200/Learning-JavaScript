/*
*DATE - 05,Feb 25
*/


// alert box

alert('Hello World!');

let q = 20
let r = 30

if ( q > r) {
   alert('q is less than r');
} else {
   alert('q is not less than r');
}

// confirm box

confirm('Are You 18+ ?')

let userInput = confirm('Are you sure you want to proceed?');

if (userInput) {
   console.log('User confirmed the action');
} else {
   console.log('User cancelled the action');
}

// prompt box

prompt('please enter your name:')
let name = prompt('Please enter your name:');
console.log(name);
