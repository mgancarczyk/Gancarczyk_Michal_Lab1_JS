document.addEventListener('DOMContentLoaded', appStart);

let boomSound, clapSound, hihatSound, kickSound, openhatSound, rideSound, snareSound, tinkSound, tomSound, startTime;
let channel1=[];
let channel2=[];
let channel3=[];
let channel4=[];
const listOfKeys=['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];

function appStart(){
    document.body.addEventListener('keypress', playFF);
    document.body.addEventListener('keydown', pressedPad);
    document.body.addEventListener('keyup', normalPad);


    boomSound = document.querySelector('#boom');
    clapSound = document.querySelector('#clap');
    hihatSound = document.querySelector('#hihat');
    kickSound = document.querySelector('#kick');
    openhatSound = document.querySelector('#openhat');
    rideSound = document.querySelector('#ride');
    snareSound = document.querySelector('#snare');
    tinkSound = document.querySelector('#tink');
    tomSound = document.querySelector('#tom');

    binCh1 = document.querySelector("#bin1");
    binCh2 = document.querySelector("#bin2");
    binCh3 = document.querySelector("#bin3");
    binCh4 = document.querySelector("#bin4");

    addListenerToButtons('#recCh1', setStartTimeCh1);
    addListenerToButtons('#play', playChannel1);
    
    addListenerToButtons('#recCh2', setStartTimeCh2);
    addListenerToButtons('#play2', playChannel2);

    addListenerToButtons('#recCh3', setStartTimeCh3);
    addListenerToButtons('#play3', playChannel3);

    addListenerToButtons('#recCh4', setStartTimeCh4);
    addListenerToButtons('#play4', playChannel4);

    addListenerToButtons('#playAll', playAll);

}

function addListenerToButtons(id, itsTask){
    document
        .querySelector(id)
        .addEventListener('click', itsTask)
}

function setStartTimeCh1(){
    document.body.removeEventListener('keypress', playWithRecChannelTwo);
    document.body.removeEventListener('keypress', playWithRecChannelThree);
    document.body.removeEventListener('keypress', playWithRecChannelFour);
    startTime = Date.now();
    document.body.addEventListener('keypress', playWithRecChannelOne);
}

function setStartTimeCh2(){
    document.body.removeEventListener('keypress', playWithRecChannelOne);
    document.body.removeEventListener('keypress', playWithRecChannelThree);
    document.body.removeEventListener('keypress', playWithRecChannelFour);
    startTime = Date.now();
    document.body.addEventListener('keypress', playWithRecChannelTwo);
}

function setStartTimeCh3(){
    document.body.removeEventListener('keypress', playWithRecChannelOne);
    document.body.removeEventListener('keypress', playWithRecChannelTwo);
    document.body.removeEventListener('keypress', playWithRecChannelFour);
    startTime = Date.now();
    document.body.addEventListener('keypress', playWithRecChannelThree);
}

function setStartTimeCh4(){
    document.body.removeEventListener('keypress', playWithRecChannelOne);
    document.body.removeEventListener('keypress', playWithRecChannelTwo);
    document.body.removeEventListener('keypress', playWithRecChannelThree);
    startTime = Date.now();
    document.body.addEventListener('keypress', playWithRecChannelFour);
}

function playFF(e){
    switch(e.code){
        case 'KeyA':
            playSound(boomSound, e.code[e.code.length-1]);
            break;

        case 'KeyS':
            playSound(clapSound);
            break;

        case 'KeyD':
            playSound(hihatSound);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            break;

        case 'KeyG':
            playSound(openhatSound);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            break;

        case 'KeyK':
            playSound(tinkSound);
            break;

        case 'KeyL':
            playSound(tomSound);
            break;
        
}
}

function playWithRecChannelOne(e){
    switch(e.code){
        case 'KeyA':
            playSound(boomSound);
            channelOnePushing(e);
            break;

        case 'KeyS':
            playSound(clapSound);
            channelOnePushing(e);
            break;

        case 'KeyD':
            playSound(hihatSound);
            channelOnePushing(e);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            channelOnePushing(e);
            break;

        case 'KeyG':
            playSound(openhatSound);
            channelOnePushing(e);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            channelOnePushing(e);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            channelOnePushing(e);
            break;

        case 'KeyK':
            playSound(tinkSound);
            channelOnePushing(e);
            break;

        case 'KeyL':
            playSound(tomSound);
            channelOnePushing(e);
            break;
    }
}

function playWithRecChannelTwo(e){
    switch(e.code){
        case 'KeyA':
            playSound(boomSound);
            channelTwoPushing(e);
            break;

        case 'KeyS':
            playSound(clapSound);
            channelTwoPushing(e);
            break;

        case 'KeyD':
            playSound(hihatSound);
            channelTwoPushing(e);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            channelTwoPushing(e);
            break;

        case 'KeyG':
            playSound(openhatSound);
            channelTwoPushing(e);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            channelTwoPushing(e);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            channelTwoPushing(e);
            break;

        case 'KeyK':
            playSound(tinkSound);
            channelTwoPushing(e);
            break;

        case 'KeyL':
            playSound(tomSound);
            channelTwoPushing(e);
            break;
    }
}
function playWithRecChannelThree(e){
    switch(e.code){
        case 'KeyA':
            playSound(boomSound);
            channelThreePushing(e);
            break;

        case 'KeyS':
            playSound(clapSound);
            channelThreePushing(e);
            break;

        case 'KeyD':
            playSound(hihatSound);
            channelThreePushing(e);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            channelThreePushing(e);
            break;

        case 'KeyG':
            playSound(openhatSound);
            channelThreePushing(e);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            channelThreePushing(e);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            channelThreePushing(e);
            break;

        case 'KeyK':
            playSound(tinkSound);
            channelThreePushing(e);
            break;

        case 'KeyL':
            playSound(tomSound);
            channelThreePushing(e);
            break;
    }
}
function playWithRecChannelFour(e){
    switch(e.code){
        case 'KeyA':
            playSound(boomSound);
            channelFourPushing(e);
            break;

        case 'KeyS':
            playSound(clapSound);
            channelFourPushing(e);
            break;

        case 'KeyD':
            playSound(hihatSound);
            channelFourPushing(e);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            channelFourPushing(e);
            break;

        case 'KeyG':
            playSound(openhatSound);
            channelFourPushing(e);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            channelFourPushing(e);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            channelFourPushing(e);
            break;

        case 'KeyK':
            playSound(tinkSound);
            channelFourPushing(e);
            break;

        case 'KeyL':
            playSound(tomSound);
            channelFourPushing(e);
            break;
    }
}

function playEachSound(e){
    switch(e){
        case 'KeyA':
            playSound(boomSound);
            break;

        case 'KeyS':
            playSound(clapSound);
            break;

        case 'KeyD':
            playSound(hihatSound);
            break;
        
        case 'KeyF':
            playSound(kickSound);
            break;

        case 'KeyG':
            playSound(openhatSound);
            break;
    
        case 'KeyH':
            playSound(rideSound);
            break;
        
        case 'KeyJ':
            playSound(snareSound);
            break;

        case 'KeyK':
            playSound(tinkSound);
            break;

        case 'KeyL':
            playSound(tomSound);
            break;
    }
}



function playChannel1(){
    for(let i = 0; i < channel1.length; i++){
        setTimeout(playEachSound, channel1[i].time, channel1[i].code );
    }
}
function playChannel2(){
    for(let i = 0; i < channel2.length; i++){
        setTimeout(playEachSound, channel2[i].time, channel2[i].code );
    }
}
function playChannel3(){
    for(let i = 0; i < channel3.length; i++){
        setTimeout(playEachSound, channel3[i].time, channel3[i].code );
    }
}
function playChannel4(){
    for(let i = 0; i < channel4.length; i++){
        setTimeout(playEachSound, channel4[i].time, channel4[i].code );
    }
}
function playAll(){
    playChannel1();
    playChannel2();
    playChannel3();
    playChannel4();
}

function playSound(sound){
    sound.currentTime = 0;
    sound.play();
}
function pressedPad(e){
    if(listOfKeys.includes(e.code[e.code.length-1])){
        document.querySelector('#pad'+e.code[e.code.length-1]).classList.add('push');
    }
}
function normalPad(e){
    if(listOfKeys.includes(e.code[e.code.length-1])){
        document.querySelector('#pad'+e.code[e.code.length-1]).classList.remove('push');
    }
}

function channelOnePushing(e){
    const time = Date.now()-startTime;
    channel1.push({
        code: e.code,
        time: time
    })
}

function channelTwoPushing(e){
    const time = Date.now()-startTime;
    channel2.push({
        code: e.code,
        time: time
    })
}

function channelThreePushing(e){
    const time = Date.now()-startTime;
    channel3.push({
        code: e.code,
        time: time
    })
}

function channelFourPushing(e){
    const time = Date.now()-startTime;
    channel4.push({
        code: e.code,
        time: time
    })
}