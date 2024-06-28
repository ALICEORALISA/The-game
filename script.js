console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
// console.log(UserNumber + 5)
let SecretNumber = Math.floor(Math.random() *10) + 1;
let attempts = 3;
while(attempts > 0) {
    let UserNumber = Number(prompt( 'Введите число: '));
    if (UserNumber < SecretNumber) {
        console.log("Секретное число больше");
        attempts = attempts - 1;
    } else if (UserNumber === SecretNumber) {
        console.log("Вы угадали!")
        break;
    } else  {
        console.log("Секретное число меньше");
        attempts = attempts - 1;
    } 
console.log("У вас осталось "+attempts+" п.");   
}

