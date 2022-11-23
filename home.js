let img = document.querySelector("#img");
let git = document.querySelector(".github");
let foot = document.querySelector(".footer");
let lineFirst = document.querySelector(".line1");
let lineSecond = document.querySelector(".line2");
let menucontainer = document.querySelector(".menuContainer");
let overlay = document.querySelector(".overlay");
let indexing =document.querySelector("#indexing");
let links = document.querySelectorAll('.links');


function Done(){
    document.querySelector('.overlay').classList.toggle('hidden');
    lineFirst.classList.toggle('cross1');
    lineSecond.classList.toggle('cross2');

}

menucontainer.addEventListener('click', function(){
  homeLabel.classList.toggle('indexChange')
})



let homeLabel = document.querySelector('.aboutMe');





function In() {
  git.style.transition = ".51s";
  git.style.color = "grey";
  foot.style.borderRadius = "50%";
  git.style.letterSpacing = "5px";
  img.style.padding = "2px";
  img.style.height = "44px";
  img.style.width = "44px";
}

function Out() {
  img.style.height = "40px";
  img.style.padding = "40px";
  img.style.padding = "0px";
  git.style.transition = ".51s";
  git.style.letterSpacing = "2px";
  git.style.color = "grey";
}

function menuhoverOn() {
  lineFirst.style.backgroundColor = "grey";
  lineSecond.style.backgroundColor = "grey";
  lineFirst.style.transition='.2s';
  lineSecond.style.transition='.2s';

}
function menuhoverOff() {
  lineFirst.style.backgroundColor = "white";
  lineSecond.style.backgroundColor = "white";
}
 


function aboutEnter(){
  // document.querySelector('#aboutID').innerHTML='~ About ~';
}

function aboutExit(){
  // document.querySelector('#aboutID').innerHTML='About';
}

function portfolioEnter(){
  // document.querySelector('#portfolioID').innerHTML='~ Portfolio ~';
}

function portfolioExit(){
  document.querySelector('#portfolioID').innerHTML=' Portfolio';
}
function contactEnter(){
  // document.querySelector('#contactID').innerHTML='~ Contact ~';
}

function contactExit(){
  document.querySelector('#contactID').innerHTML='Contact';
}