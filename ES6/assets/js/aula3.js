//ES5

var alexia = {
    name: 'Alexia',
    lastName:  'Nunes',

    fullName: function () {
        return this.name + ' ' + this.lastName;
    },

    showMe: function () {
        var contexto = this;

        setTimeout(function () {
            console.log(contexto.fullName());
        },3000)
    }
}

// alexia.showMe()

//ES6

let company = {
    name: 'Especializa',
    lastName: 'TI',

    fullName () {
        return this.name + ' ' + this.lastName;
    },

    showMe () {
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000)
    }
}

company.showMe();