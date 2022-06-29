let mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');
let button = document.querySelector('.restart');



const jump = () => {
    mario.classList.add('jump');
    setTimeout(() =>{
        mario.classList.remove('jump');
    },700)
}

const loop = setInterval(() => {
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10)

const restartGame = () => {
    location.reload();
}
button.addEventListener('click', restartGame);

document.addEventListener('keypress', jump);