// ES5

function customUpperCase () {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index].toUpperCase());
    }
}

// customUpperCase('Alexia', 'Nunes', 'EspecializaTi')

// ES6

let customUpperCase6 = (...params) => {
    params.forEach((value) => {
        console.log(value.toUpperCase());
    })
}
// customUpperCase6('Alexia', 'Nunes', 'EspecializaTi', 'Cursos')

let multiply = (multiplier, ...numbers) => numbers.map((number) => number * multiplier);

console.log(multiply(5, 4, 6, 8));