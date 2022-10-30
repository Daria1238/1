alert('Hello world');

// const checker = confirm('Are you 18 or older?');
//
// console.log(checker);
// if (checker === true) {
//     alert('Добро пожаловать :)');
// } else {
//     alert('Покиньте сайт немедленно!');
// }
const name = prompt('Введите своё имя');
    alert('Hello, ' +name);
const btn = document.getElementById('btn');
btn.onclick = function () {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const current = +btn.textContent;
    btn.textContent = current + 1;
    btn.style.backgroundColor = '#' + randomColor;
}