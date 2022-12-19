var boxLid = document.getElementsByClassName('box-lid')[0];
var gift1 = document.getElementsByClassName('gift')[0];
var gift2 = document.getElementsByClassName('gift')[1];
var gift3 = document.getElementsByClassName('gift')[2];
var gift4 = document.getElementsByClassName('gift')[3];
var mail = document.getElementsByClassName('gift')[3];
var candle = document.getElementsByClassName('candle')[0];
var eyes1 = document.getElementsByClassName('candle-eyes-one')[0];
var eyes2 = document.getElementsByClassName('candle-eyes-two')[0];
var stick = document.getElementsByClassName('candle-stick')[0];
var fire = document.getElementsByClassName('candle-fire')[0];
var button = document.getElementsByClassName('button-container')[0];
var birthdayCake = document.getElementsByClassName('birthday-cake')[0];
var giftBox = document.getElementsByClassName('gift-box')[0];
var card = document.getElementsByClassName('card-container')[0];
var piano = document.getElementById("birthdayPiano");
var loveSong = document.getElementById("EverytimeWeTouch");
var birthdaySong = document.getElementById("birthdaySong");
var music = document.getElementsByClassName("music")[0];
var tablecloths = document.getElementsByClassName("tablecloths")[0];

//audio autoplay
document.getElementsByClassName('music')[0].onclick = function() {
    piano.play();
    music.classList.add("disappear2");
}

// birthdayCake starts
function timeShowButton() {
    button.classList.add("cta-show");
}

function singHappyBirthday() {
    piano.pause();
    birthdaySong.play();
}

function singHappyBirthday2() {
    birthdaySong.play();
}

document.getElementsByClassName("container-stick")[0].onclick = function() {
    candle.classList.add("shake-left");
    eyes1.classList.add("changeto-lower");
    eyes2.classList.add("changeto-greater");
    stick.classList.add("stick-animation");
    fire.classList.add("dance-fire");
    setTimeout(timeShowButton, 20000);
    
    if(piano.duration > 0 && !piano.paused) {
        setTimeout(singHappyBirthday, 3000);
    } else {
        setTimeout(singHappyBirthday2, 3000);
    }
}

document.getElementsByClassName("button-container")[0].onclick = function() {
    birthdayCake.classList.add("disappear");
    button.classList.add("disappear");
    birthdayCake.classList.add("disappear2");
    button.classList.add("disappear2");
    giftBox.classList.add("appear");
    card.classList.add("disappear2");
    tablecloths.classList.add("disappear2");
    if(birthdaySong.duration > 0 && !birthdaySong.paused) {    
        birthdaySong.pause();
        loveSong.play();
    } else {
        loveSong.play();
    }
}

//birthdayCake ends

//gift-box starts
document.getElementsByClassName("gift-box")[0].onclick = function() {
    boxLid.classList.add("fallOut");
    gift1.classList.add("jump");
    gift2.classList.add("jump2");
    gift3.classList.add("jump3");
    gift4.classList.add("jump4");
};

//gift-box ends

document.getElementsByClassName('letter')[0].onclick = function() {
    giftBox.classList.add("disappear2");
    card.classList.add("appear2");
}
