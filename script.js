// let arr = ['alex', 123, 0, false, null, undefined, [], {}, false, ''];
// let wished = arr.filter(element => typeof element === 'string' || typeof element === 'number');

// console.log(wished);

//Classwork
//cycle

let password;
let attempts = 5;

do {
    for (let i = 0; i < attempts; i++) {
        password = +prompt('Введите пароль:');
        if (password === 1234) {
            alert('Пароль верный');
           
        } else if (i < attempts - 1) {
            alert('Неправильный пароль. Осталось попыток: ' + (attempts - i - 1));
        }
    }
    if (password !== 1234) {
        alert('Попыток не осталось');
    }
} while (password !== 1234);