const anchor = document.getElementById('anchor');
const display = document.createElement('div')
display.textContent = 0;
display.className = 'counter-display';
anchor.append(display);


const anchorOne = document.querySelector('.decrease-box');
const btnDecrease = document.createElement('button');
btnDecrease.textContent = '-';
btnDecrease.setAttribute('id', 'button-decrease');
anchorOne.append(btnDecrease);

const anchoTwo = document.querySelector('.increase-box');
const btnIncrease = document.createElement('button');
btnIncrease.textContent = '+';
btnIncrease.setAttribute('id', 'button-increase');
anchoTwo.append(btnIncrease);

const anchorThree = document.querySelector('#anchor3');
const btnReset = document.createElement('button');
btnReset.textContent = 'RESET';
btnReset.setAttribute('id', 'reset');
anchorThree.append(btnReset);



btnDecrease.addEventListener('click', decreaseNumber);
btnIncrease.addEventListener('click', increaseNumber);
btnReset.addEventListener('click', resetNumber)

function decreaseNumber (){
    display.textContent--;
    display.style.color = 'red'
}

function increaseNumber (){
    display.textContent++;
    display.style.color = 'green'
}

function resetNumber (){
    display.textContent = 0;
    display.style.color = 'black';
}

