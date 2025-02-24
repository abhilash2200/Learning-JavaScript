let person = {
    firstName : 'Jhon',
    lastName : 'Doe',
    age : 30,
    address : '123 ACD',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    hobbies : ['study', 'listening music'],
    living :{
        city : 'New York',
        state : 'NY'
    }
}

person.email = 'person@gmail.com' //to add extra value
delete person.address //to delete property

console.log(person.email);

console.log('email' in person); //to check property present or not


for (key in person) {
    console.log(key, person[key]);  //
}



//math object

let x = 10

console.log(Math.abs(x)); //absolute value

console.log(Math.max(10, 20, 30)); //maximum value

console.log(Math.min(10, 20, 30)); //minimum value

console.log(Math.pow(2, 3)); //power

console.log(Math.sqrt(25)); //square root

console.log(Math.round(3.8)); // round up

console.log(Math.trunc(8.9));  // only fast value before decimal

console.log(Math.floor(3.7)); //round down

console.log(Math.ceil(3.7)); //round up

console.log(Math.random() * 10); //random number between 0 and 10

console.log(Math.round(Math.random() * 10)); //random number between 0 and 10 with rounding off

console.log(Math.floor(Math.random() * 10) + 1); //random number between 1 and 10 with rounding off



//date

let d = new Date()

//get method

console.log(d.getFullYear());   // Current year (e.g., 2025)
console.log(d.getMonth());      // Month (0-11) → January = 0, February = 1 ...
console.log(d.getDate());       // Day of the month (1-31)
console.log(d.getDay());        // Day of the week (0-6) → Sunday = 0, Monday = 1 ...
console.log(d.getHours());      // Hours (0-23)
console.log(d.getMinutes());    // Minutes (0-59)
console.log(d.getSeconds());    // Seconds (0-59)
console.log(d.getMilliseconds());// Milliseconds (0-999)
console.log(d.getTime());       // Timestamp (milliseconds since Jan 1, 1970)

//set method

d.setFullYear(2030);
d.setMonth(5);      // June (0-based index)
d.setDate(15);      // 15th of the month
d.setHours(10);
d.setMinutes(30);
d.setSeconds(45);

console.log(d.toString());  // Modified date print karega

//formating 

console.log(d.toDateString());  // "Mon Feb 24 2025" → Sirf date
console.log(d.toTimeString());  // "15:30:45 GMT+0530" → Sirf time
console.log(d.toISOString());   // "2025-02-24T10:00:00.000Z" → Standard format
console.log(d.toUTCString());   // "Mon, 24 Feb 2025 10:00:00 GMT"
console.log(d.toLocaleDateString()); // "24/2/2025" (Alag-alag region pe format change hota hai)
console.log(d.toLocaleTimeString()); // "10:00:00 AM"
console.log(d.toLocaleString()); // "24/2/2025, 10:00:00 AM"

//spacfic

let e = new Date(2025, 1, 24, 10, 30, 45);  // Year, Month (0-based), Date, Hour, Min, Sec
console.log(e.toString());





