//Document Object Model

// Select HTML elements

let heading = document.getElementsByClassName('headingtext');
let paragraph = document.getElementById('demo');
let text = document.getElementById('ptext');
let btn = document.getElementById('btn')

// Change element's text content
heading[0].textContent = 'DOM Manipulation';
heading[1].textContent = 'Changing Text Content Color';

// Use innerHTML if you want to parse HTML inside the paragraph
paragraph.innerHTML = 'This is a paragraph. It has some text. <span>This is a span.</span> And this is a link: <a href="https://www.example.com">Example</a>';

function changeTextColor() {
    let text = document.getElementById('ptext'); // Get the element

    if (text.style.color === 'red') {
        text.style.color = 'black';  // Pehle se red hai, toh black kar do
    } else if (text.style.color ==='black'){
        text.style.color = 'blue';  // Nahi toh blue kar do
    } else {
        text.style.color ='red';  // Nahi toh red kar do
    }
}



console.log(heading);
console.log(paragraph);
console.log(text);
console.log(btn);



let items = document.getElementsByClassName('list-items')

items[0].textContent = 'Telangana'
items[0].style.color = 'yellow'


// Loop through all list items and change their color to green

for (let i = 0; i < items.length; i++) {
    items[i].style.color = 'green';
    items[i].style.fontWeight = 'bold';
    items[i].style.fontSize = '20px';
}

console.log(items);

let input = document.querySelector('input')
input.value  = 'Enter Your Name';

let button = document.querySelector('input[type="submit"]')
button.style.color = 'red'
button.style.backgroundColor = 'yellow'


let odd = document.querySelectorAll('li:nth-child(odd)')

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'lightgray';
}

let even = document.querySelectorAll('li:nth-child(even)')

for (let i = 0; i < even.length; i++) {
    even[i].style.backgroundColor = 'lightblue';
}



