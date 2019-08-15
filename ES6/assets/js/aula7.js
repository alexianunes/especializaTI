// ES5
function sum (n1, n2, n3) {
    return n1 + n2 + n3;
}
var numbers = [1,2,3];

// console.log(sum(numbers[0], numbers[1], numbers[2]));
// console.log(sum.apply(null, numbers));

// ES6

let sum6 = (n1, n2, n3) => n1 + n2 + n3
let numbers6 = [1,2,3];
// console.log(sum6(...numbers6));

// console.log(Math.min(...numbers6));
// console.log(Math.max(...numbers6));

let objectsC = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

// let {a, b, c, d} = objectsC;
let {a, b, ...c} = objectsC;
console.log(a);
console.log(b);
console.log(c);
// console.log(d);