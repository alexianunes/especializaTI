// ES5

function showFullName(firstName, lastName) {
    // lastName === undefined ? lastName = '' : lastName = lastName
    firstName = firstName === undefined ? 'FirstName' : firstName
    lastName = lastName === undefined ? 'LastName' : lastName

    console.log(firstName + ' ' + lastName);
}
// showFullName();

// ES6

let showFullName6 = (firstName = 'FirstName', lastName = 'LastName') => console.log(`${firstName} ${lastName}`)

showFullName6('Alexia', 'Nunes');