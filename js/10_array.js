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

//concat()

let myArray1 = ['ram', 'shyam', 'mohan', 'sohan', 'radha'];
let myArray2 = ['gita', 'sita', 'rita', 'tina', 'mina'];
let myArray3 = ['lina', 'tina', 'rina', 'mina', 'sita'];
let myArray4 = myArray1.concat(myArray2); //to merge two arrays
let myArray5 = myArray1.concat(myArray2, myArray3); //to merge three arrays

//slice()

let myArray6 = myArray1.slice(1, 4); //to copy the elements of the array
console.log(myArray6); //output: ['shyam', 'mohan', 'sohan']  slice(start, end) method ek naya array return karta hai jo original array ke start index se lekar end index ke ek pehle tak ke elements copy karta hai.

//indexOf()

let myArray7 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
let index = myArray7.indexOf('radha'); //to get the index of an element
console.log(index); //output: 4

let index2 = myArray7.indexOf('krishna');
console.log(index2); // Output: -1 (kyunki 'krishna' array me nahi hai)

//includes()

let myArray8 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];

let isPresent = myArray8.includes('radha'); 
console.log(isPresent); // Output: true

let isPresent2 = myArray8.includes('krishna'); 
console.log(isPresent2); // Output: false


//reverse()

myArray8.reverse(); //to reverse the array
console.log(myArray8); //output: ['mina', 'tina', 'rita', 'sita', 'gita', 'radha', 'sohan', 'mohan', 'shyam', 'ram']

let reversedArray = [...myArray8].reverse(); //to reverse the array without changing the original array
console.log(reversedArray); //output: ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina']

//sort()

let myArray9 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
myArray9.sort(); //to sort the array in alphabetical order
console.log(myArray9); //output: ['gita', 'mina', 'mohan', 'ram', 'rita', 'sita', 'shyam', 'sohan', 'tina', 'radha']

let myArray10 = [10, 5, 8, 2, 7, 1, 9, 3, 6, 4];
myArray10.sort(); //to sort the array in ascending order
console.log(myArray10); //output: [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

//sort() method ke andar ek function pass karke hum array ko custom order me sort kar sakte hain
let myArray11 = [10, 5, 8, 2, 7, 1, 9, 3, 6, 4];
myArray11.sort((a, b) => a - b); //to sort the array in ascending order
console.log(myArray11); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]   sort() method ke andar ek function pass karke hum array ko custom order me sort kar sakte hain

//type of sort

// Default Sorting (Lexicographic)	| array.sort()
// example:
let array1 = [10, 15, 41, 51, 56, 64]
array1.sort()
console.log(array1);

// Numeric Sorting (Ascending)	| array.sort((a, b) => a - b)
// example:
let array2 = [10, 15, 41, 51, 56, 64]
array2.sort((a, b) => a - b) //[small → big]
console.log(array2);

// Numeric Sorting (Descending)    | array.sort((a, b) => b - a)
// example:
let array3 = [10, 15, 41, 51, 56, 64]
array3.sort((a, b) => b - a) //[big → small]
console.log(array3);

// Length-Based Sorting | array.sort((a, b) => a.length - b.length)
// example:
let array4 = ['apple', 'banana', 'cherry', 'date', 'elderberry']
array4.sort((a, b) => a.length - b.length) //Choti length wale pehle
console.log(array4); //output: ["date", "apple", "banana", "cherry", "elderberry"]

// Case-Insensitive Sorting | array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
//example:
let array5 = ['apple', 'Banana', 'cherry', 'date', 'Elderberry']
array5.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())) //Agar hume proper alphabetical order chahiye (case-insensitive), toh localeCompare() method best hai!
console.log(array5); //output: ["apple", "Banana", "cherry", "date", "Elderberry"]

// Random Shuffle | array.sort(() => Math.random() - 0.5)
//example
let array6 = ['apple', 'Banana', 'cherry', 'date', 'elderberry']
array6.sort(() => Math.random() - 0.5)
console.log(array6); //output: ["apple", "banana", "cherry", "date", "elderberry"]

// Numeric Sorting (Descending) | array.sort((a, b) => b - a)
//example:
let array7 = [10, 15, 41, 51, 56, 64]
array7.sort((a, b) => b - a)
console.log(array7); //output: [64, 56, 51, 41, 15, 10]

// Length-Based Sorting | array.sort((a, b) => a.length - b.length)
//example:
let array8 = ['apple', 'Banana', 'cherry', 'date', 'elderberry']
array8.sort((a, b) => a.length - b.length)
console.log(array8); //output: ["elderberry", "banana", "apple", "cherry", "date"]

// Case-Insensitive Sorting | array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
//example:
let array9 = ['apple', 'Banana', 'cherry', 'date', 'elderberry']
array9.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
console.log(array9); //output: ["apple", "banana", "cherry", "date", "elderberry"]

// Random Shuffle | array.sort(() => Math.random() - 0.5)
//example:
let array10 = ['apple', 'Banana', 'cherry', 'date', 'elderberry']
array10.sort(() => Math.random() - 0.5)
console.log(array10); //output: ["apple", "banana", "cherry", "date", "elderberry"]


//join()

let myArray12 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
let joinedArray = myArray12.join(', '); //to join the elements of the array
console.log(joinedArray); //output: ram, shyam, mohan, sohan, radha, gita, sita, rita, tina, mina

//toString()

let myArray13 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
let stringArray = myArray13.toString(); //to convert the array to a string
console.log(stringArray); //output: ram,shyam,mohan,sohan,radha,gita,sita,rita,tina,mina

//isArray()

let myArray14 = ['ram', 'shyam', 'mohan', 'sohan', 'radha', 'gita', 'sita', 'rita', 'tina', 'mina'];
let isArray = Array.isArray(myArray14); //to check if the variable is an array
console.log(isArray); //output: true