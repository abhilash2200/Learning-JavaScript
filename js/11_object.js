let person = {
    firstName : 'Jhon',
    lastName : 'Doe',
    age : 30,
    address : '123 ACD',
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.getFullName());

let person2 = {
    firstName : 'Jhon',
    lastName : 'Doe',
    age : 30,
    address : '123 ACD',
    hobbies : ['sport', ]
}

