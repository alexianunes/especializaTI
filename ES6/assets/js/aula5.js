// ES5

var fullName = ['Alexia', 'Nunes'];
var name = fullName[0];
var lastName = fullName[1];
// console.log(name);
// console.log(lastName);

// ES6

let fullName6 = ['Alexia', 'Nunes', 20];
let [name6, lastName6, age6] = fullName6;
// console.log(name6);
// console.log(lastName6);
// console.log(age6);

let fullNameTwo6 = {
    firstName: 'Alexia',
    lastNameTwo6: 'Nunes'
}
let {firstName, lastNameTwo6} = fullNameTwo6;

console.log(firstName);
console.log(lastNameTwo6);