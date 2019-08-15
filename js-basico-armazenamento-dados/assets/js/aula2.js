if (localStorage.hasOwnProperty('USER')){
    var name = localStorage.getItem('USER');

    alert('Bem Vindo(a) '+name);
}else{
    var name = prompt('Qual o seu nome?');
    localStorage.setItem('USER', name);
}