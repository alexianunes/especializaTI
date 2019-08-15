// ES5
var name = 'Alexia';
var name = 'New Alexia';

if (true) {
    var name = 'New';
}
//console.log(name)

var i = 50;
//console.log(i)

for (var i= 0; i < 20; i++){
}

//console.log(i)

/* ES6 */
let name6 = 'Alexia';
// let name6 = 'New Alexia'; //Não permite declarar duas variáveis com o mesmo nome

if (true) {
    // let name6 = 'Algo';
    name6 = 321
    // console.log(name6);
}
// console.log(name6);

let y = 50;

for (let y = 0; y < 20; y++) {
    // console.log(y);
}

// console.log(y);

const company = 'EspecializaTI';
// company = 321; //não permite alterar valor