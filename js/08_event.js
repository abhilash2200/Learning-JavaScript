/*
*DATE - 05,Feb 25
*/

// mouse event
/*
* click
* double click
* right click
* mouse hover
* mouse out
* mouse down
* mouse up
*/

// 'click'	Jab user kisi element par click kare
// 'dblclick'	Jab user double-click kare
// 'mousedown'	Jab mouse ka button press ho
// 'mouseup'	Jab mouse ka button release ho
// 'mouseover'	Jab mouse kisi element ke upar aaye
// 'mouseout'	Jab mouse kisi element se bahar jaye
// 'mousemove'	Jab mouse move kare
// 'contextmenu'	Jab user right-click kare

// keyboard event

/*
* keydown
* keyup
* keypress
*/

// window onload event

window.onload = function() {
    alert('The page is fully loaded.');
};

//addEventListener

document.getElementById('btn').addEventListener('click', function() {
    alert('Button clicked');
});

//scroll event

window.onscroll = function() {
    console.log('Scrolled');
}

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        console.log('Scrolled');
    }
});