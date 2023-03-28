function User(firstName, lastName, emailId, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailId;
    this.age = age;
}

// // we extend the function's prototype
User.prototype.getFullName = function () {
 return this.firstName + " " + this.lastName;
}

var user1 = new User('Ramesh', 'Fadatare', 'ramesh24@gmail.com', 29);
var user2 = new User('John', 'Cena', 'john@gmail.com', 45);
var user3 = new User('Tony', 'Stark', 'tony@gmail.com', 52);

// Print objects
console.log(user1);
console.log(user2);
console.log(user3);

// access properties
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

// calling method
console.log(user1.getFullName());
console.log(user2.getFullName());