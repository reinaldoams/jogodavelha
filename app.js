const quadrado1 = document.getElementsByClassName('1');
const quadrado2 = document.getElementsByClassName('2');
const quadrado3 = document.getElementsByClassName('3');
const quadrado4 = document.getElementsByClassName('4');
const quadrado5 = document.getElementsByClassName('5');
const quadrado6 = document.getElementsByClassName('6');
const quadrado7 = document.getElementsByClassName('7');
const quadrado8 = document.getElementsByClassName('8');
const quadrado9 = document.getElementsByClassName('9');
const arr = [
    quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9
];
const char = document.getElementsByClassName('char');

console.log(char)

const charChange = () => {
    if (char[0].innerText == 'O') {
        char[0].innerText = 'X'
    } else {
        console.log('eh x')
        char[0].innerText = 'O'
    }
}

char[0].addEventListener('click', charChange)

console.log(char[0].innerText);

const funcaoClick = (evento) => {
    if (evento.target.innerText != ''){
        return
    } else {
        console.log(evento)
        evento.target.innerText = char[0].innerText;
    }
}

arr.map(item => {
    item[0].addEventListener('click', funcaoClick);
})
