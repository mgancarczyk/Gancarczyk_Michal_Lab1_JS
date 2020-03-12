document.addEventListener('DOMContentLoaded', appStart);

let field, ball, maxX, maxY, animateball, ballx, bally, difficulty, restart, stoper, second, minute;
let milisecond, t, collision;
let holeArray = [];

function appStart() {
    field = document.querySelector('.field')
    ball = document.querySelector('.ball')
    restart = document.querySelector('.restart')
    stoper = document.querySelector('.stoper')
    
    restart.addEventListener('click',refreshPage)
    animateball = () => move;
    window.addEventListener('deviceorientation', move)
    ball.style.left = '200px';
    ball.style.top = '200px';
    holeNumber = 5;
    milisecond = 0;
    second = 0;
    minute = 0;
    collision = false;
    generateHole();
    stopwatch();
}

function handleMovement() {
    let xVelocity = event.gamma * 0.1;
    let yVelocity = event.beta * 0.1;
    let ballYPos = parseInt(ball.style.top) + yVelocity + 'px';
    let ballXPos = parseInt(ball.style.left) + xVelocity + 'px';
    ball.style.top = ballYPos;
    ball.style.left = ballXPos;
    checkCollsion();
    if(collision){
        stopCounter();
        stoper.style.color = "red";
    }
     
}
function move() {
    handleMovement();
    window.requestAnimationFrame(animateball);
}
function generateHole() {
    for (let i = 0; i < holeNumber; i++) {
        let toph = Math.floor(Math.random() * (field.clientHeight - 100));
        let lefth = Math.floor(Math.random() * (field.clientWidth - 100));
        const hole = document.createElement('div');
        hole.className = 'hole';
        hole.style.left = lefth + 'px';
        hole.style.top = toph + 'px';
        holeArray.push({ toph, lefth });
        field.appendChild(hole);
    }
}

function checkCollsion() {
    holeArray.forEach((item) => {
        if (parseInt(ball.style.top) > item.toph
            && parseInt(ball.style.left) > item.lefth
            && parseInt(ball.style.top) < item.toph + 100
            && parseInt(ball.style.left) < item.lefth + 100) {
                collision = true;
        }
        
    })
}
function counter(){

    milisecond++;
    if(milisecond >= 99){
        milisecond = 0;
        second++;
        if(second >= 60){
            second = 0;
            minute++;
            }
        }
    
    
    stoper.innerHTML = (minute ? (minute > 9 ? minute: '0' + minute): '00')+':'
    +(second ? (second > 9 ? second: '0' + second): '00' )+":"
    +(milisecond ? (milisecond > 9 ? milisecond: '0' + milisecond): '00');
    stopwatch();
}
function stopwatch(){
    t= setTimeout(counter,10);
}
function stopCounter(){
    clearTimeout(t);
}
function refreshPage(){
    location.reload();
}