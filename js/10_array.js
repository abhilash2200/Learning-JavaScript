let myArray = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
console.log(myArray);
console.log(myArray.length); //to get the length of the array
console.log(myArray[0]); //to get the first element of the array

myArray[0] = 'raman'; //to change the first element of the array
console.log(myArray);

//methods of array

/*  1. push() - to add an element at the end of the array
    2. pop() - to remove an element from the end of the array
    3. shift() - to remove an element from the beginning of the array
    4. unshift() - to add an element at the beginning of the array
    5. splice() - to add or remove an element from the array
    6. slice() - to copy the elements of the array
    7. concat() - to merge two arrays
    8. indexOf() - to get the index of an element
    9. includes() - to check if an element is present in the array
    10. reverse() - to reverse the array
    11. sort() - to sort the array
    12. join() - to join the elements of the array
    13. toString() - to convert the array to a string
    14. isArray() - to check if the variable is an array
*/

//push()

myArray.push('lina'); //to add an element at the end of the array
console.log(myArray);

//pop()

myArray.pop(); //to remove an element from the end of the array
console.log(myArray);

//shift()

myArray.shift(); //to remove an element from the beginning of the array
console.log(myArray);

//unshift()

myArray.unshift('ram'); //to add an element at the beginning of the array
console.log(myArray);

//splice()

myArray.splice(2, 0, 'shyam'); //to add an element at the 3rd position of the array
console.log(myArray);

myArray.splice(2, 1); //to remove an element from the 3rd position of the array
console.log(myArray);

