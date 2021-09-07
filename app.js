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
const winner = document.getElementsByClassName('oorx');
const newGameBtn = document.getElementsByClassName('newgame');

const charChange = () => {
    if (char[0].innerText == 'O') {
        char[0].innerText = 'X'
    } else {
        char[0].innerText = 'O'
    }
}

char[0].addEventListener('click', charChange)

const newGame = () => {
    arr.map(item => item[0].innerText = '');
    winner[0].innerText = '...';
}

newGameBtn[0].addEventListener('click', newGame);

const checkWin = () => {
    if (quadrado1[0].innerText !== '' && winner[0].innerText == '...') {
        if (quadrado1[0].innerText == quadrado2[0].innerText && quadrado2[0].innerText == quadrado3[0].innerText) {
            winner[0].innerText = quadrado1[0].innerText
        }
        if (quadrado1[0].innerText == quadrado4[0].innerText && quadrado4[0].innerText == quadrado7[0].innerText) {
            winner[0].innerText = quadrado1[0].innerText
        }
        if (quadrado1[0].innerText == quadrado5[0].innerText && quadrado5[0].innerText == quadrado9[0].innerText) {
            winner[0].innerText = quadrado1[0].innerText
        }
    }
    if (quadrado5[0].innerText !== '' && winner[0].innerText == '...') {
        if (quadrado2[0].innerText == quadrado5[0].innerText && quadrado5[0].innerText == quadrado8[0].innerText) {
            winner[0].innerText = quadrado5[0].innerText
        }
        if (quadrado4[0].innerText == quadrado5[0].innerText && quadrado5[0].innerText == quadrado6[0].innerText) {
            winner[0].innerText = quadrado5[0].innerText
        }
        if (quadrado3[0].innerText == quadrado5[0].innerText && quadrado5[0].innerText == quadrado7[0].innerText) {
            winner[0].innerText = quadrado5[0].innerText
        }
    }
    if (quadrado9[0].innerText !== '' && winner[0].innerText == '...') {
        if (quadrado3[0].innerText == quadrado6[0].innerText && quadrado6[0].innerText == quadrado9[0].innerText) {
            winner[0].innerText = quadrado9[0].innerText
        }
        if (quadrado7[0].innerText == quadrado8[0].innerText && quadrado8[0].innerText == quadrado9[0].innerText) {
            winner[0].innerText = quadrado9[0].innerText
        }
    }
}

const funcaoClick = (evento) => {
    // console.log(quadrado1[0].innerText);
    if (evento.target.innerText != '') {
        return
    } else {
        evento.target.innerText = char[0].innerText;
    }
    checkWin()
    charChange()
}

arr.map(item => {
    item[0].addEventListener('click', funcaoClick);
})