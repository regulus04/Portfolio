import { Type } from './Type.js';
import { Animation } from './Animation.js';

// What to do
// Changing color affected by scrolling
// message
// language
// mobile
// logo

const navBG = document.querySelector('#nav-background');
const circleLayer = document.querySelector('#circle-layer');
const circleBox = document.querySelector('#circle-box');
const circle = document.querySelector('#circle');
const photo = document.querySelector('#background-photo');
const aboutPanel = document.querySelector('#about-content');
const qr = document.querySelector('#hidden-message');
const threeM = document.querySelector('#three-message');
const work1 = document.querySelector('#work-1');
const work2 = document.querySelector('#work-2');
const work3 = document.querySelector('#work-3');
const SCM1 = document.querySelector('#scroll-message-1');
const SCM2 = document.querySelector('#scroll-message-2');
const SCM3 = document.querySelector('#scroll-message-3');
const inNavBar = document.querySelector('#main-nav-invisible');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
const invisibleHome = document.querySelector('#in-home');
const invisibleAbout = document.querySelector('#in-about');
const invisibleWork = document.querySelector('#in-work');
const invisibleContact = document.querySelector('#in-contact');
const twitter = document.querySelector('#twitter');
const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const invisibleTwitter = document.querySelector('#in-twitter');
const invisibleFacebook = document.querySelector('#in-facebook');
const invisibleInstagram = document.querySelector('#in-instagram');
const invisibleLinkedin = document.querySelector('#in-linkedin');




// Instantiate
let type = new Type;
let anime = new Animation;

// Set parameter
let mouseX;
let mouseY;

let windowH = window.innerHeight;
let windowW = window.innerWidth;

// Circle mix-blend-mode /////////////////////////
document.body.addEventListener('mousemove', mouse);
function mouse(e){
  mouseX = e.clientX;
  mouseY = e.clientY;
  

  circleBox.style.top = `${mouseY - 100}px`;
  circleBox.style.left = `${mouseX - 100}PX`;
}

window.addEventListener('scroll', scroll);
function scroll(){
  let scrollY = document.documentElement.scrollTop;
  if(scrollY >= windowH / 5 * 23 && scrollY <= windowH / 5 * 24){

    let range = windowH / 5;
    let x = scrollY - windowH / 5 * 23;

    circleBox.style.opacity = x / range;
    circle.style.opacity = x / range;
    circleBox.style.display = 'flex';

    circleLayer.style.display = 'block';

    // invisible nav bar cursor change
    inNavBar.style.cursor = "none";
    // inNavBar.style.display = "flex";

  }else if(scrollY > windowH / 5 * 24){

    circleBox.style.cursor = 'none';
    circleBox.style.opacity = 1;
    circle.style.opacity = 1;

    qr.style.cursor = 'none';
  }else if(scrollY < windowH / 5 * 23){
    circleBox.style.display = 'none';
    circleBox.style.cursor = 'normal';

    circleLayer.style.display = 'none';

    // invisible nav bar cursor change
    inNavBar.style.cursor = "default";
    // inNavBar.style.display = "none";
  }

  // Header Photo scroll
  let scrollL = scrollY / 3;
  photo.style.top = -scrollL + 'px';
  
  // Nav background Animation
  if(scrollY > windowH * 0.9){
    anime.navBD(navBG);
  }else if(scrollY <= windowH * 0.9){
    anime.navBU(navBG);
  }

  // Panel reaction
  if(scrollY > windowH * 0.7){
    anime.panelOpen(aboutPanel);
  }else if(scrollY <= windowH * 0.3){
    anime.panelClose(aboutPanel);
  }

  // Typing Message /////////////////////
  if(scrollY == 0){
    threeM.textContent = 'Hello';
  }
  if(scrollY <= windowH * 2.5 && threeM.textContent == 'hello'){
    type.effect(threeM, 'Hello', 100);
  }else if(scrollY > windowH * 2.5 && scrollY <= windowH * 3.1 && (threeM.textContent == 'Hello' || threeM.textContent == 'morning')){
    type.effect(threeM, 'hello', 100);
  }else if(scrollY > windowH * 3.1 && scrollY < windowH * 3.5 && (threeM.textContent == 'hello' || threeM.textContent == 'evening')){
    type.effect(threeM, 'morning', 100);
  }else if(scrollY > windowH * 3.5 && threeM.textContent == 'morning'){
    type.effect(threeM, 'evening', 100);
  }

  // Open Work 1-3
  if(scrollY > windowH * 2){
    anime.panelNoTopOpen(work1);
  }
  if(scrollY > windowH * 2.8){
    anime.panelNoTopOpen(work2);
  }
  if(scrollY > windowH * 3.3){
    anime.panelNoTopOpen(work3);
  }
  // Close work 1-3
  if(scrollY == 0){
    anime.panelNoTopClose(work1);
    anime.panelNoTopClose(work2);
    anime.panelNoTopClose(work3);
  }

  // Scroll objects in different speed //////////
  if(scrollY > windowH * 2.2){
    let range = scrollY - windowH * 2.2;
    work1.style.top = -100 - range / 10 + 'px';
  }
  if(scrollY > windowH * 2.7){
    let range = scrollY - windowH * 2.7;
    work2.style.top = 300 - range / 3 + 'px';
  }
  if(scrollY > windowH * 2.8){
    let range = scrollY - windowH * 3.3;
    work3.style.top = 500 - range / 1.5 + 'px';
  }

  // Move messages to the sides 
  if(scrollY <= windowH * 2.5){
    threeM.style.left = 0;
  }else if(scrollY > windowH * 2.5 && scrollY <= windowH * 3.1){
    threeM.style.left = '20vw';
  }else if(scrollY > windowH * 3.1 && scrollY <= windowH * 3.5){
    threeM.style.left = '-20vw';
  }else if(scrollY > windowH * 3.5 && scrollY <= windowH * 4){
    threeM.style.left = '20vw';
  }else if(scrollY > windowH * 4){
    threeM.style.left = 0;
  }
}

// Work 1 - 3 hover event 
work1.addEventListener('mouseover', () => {
  anime.messageScrolling(SCM1);
});
work2.addEventListener('mouseover', () => {
  anime.messageScrolling(SCM2);
});
work3.addEventListener('mouseover', () => {
  anime.messageScrolling(SCM3);
});

work1.addEventListener('mouseleave', () => {
  anime.stopScrolling(SCM1);
});
work2.addEventListener('mouseleave', () => {
  anime.stopScrolling(SCM2);
});
work3.addEventListener('mouseleave', () => {
  anime.stopScrolling(SCM3);
});

// Invisible-nav hover effect
invisibleHome.addEventListener('mouseover', () => {
  anime.navHover(home);
});
invisibleAbout.addEventListener('mouseover', () => {
  anime.navHover(about);
});
invisibleWork.addEventListener('mouseover', () => {
  anime.navHover(work);
});
invisibleContact.addEventListener('mouseover', () => {
  anime.navHover(contact);
});

// Invisible-nav hover effect off
invisibleHome.addEventListener('mouseleave', () => {
  anime.navHoverOff(home);
});
invisibleAbout.addEventListener('mouseleave', () => {
  anime.navHoverOff(about);
});
invisibleWork.addEventListener('mouseleave', () => {
  anime.navHoverOff(work);
});
invisibleContact.addEventListener('mouseleave', () => {
  anime.navHoverOff(contact);
});


// Invisible-footer hover effect
invisibleTwitter.addEventListener('mouseover', () => {
  anime.footerHover(twitter);
});
invisibleFacebook.addEventListener('mouseover', () => {
  anime.footerHover(facebook);
});
invisibleInstagram.addEventListener('mouseover', () => {
  anime.footerHover(instagram);
});
invisibleLinkedin.addEventListener('mouseover', () => {
  anime.footerHover(linkedin);
});

// Invisible-footer hover effect off
invisibleTwitter.addEventListener('mouseleave', () => {
  anime.footerHoverOff(twitter);
});
invisibleFacebook.addEventListener('mouseleave', () => {
  anime.footerHoverOff(facebook);
});
invisibleInstagram.addEventListener('mouseleave', () => {
  anime.footerHoverOff(instagram);
});
invisibleLinkedin.addEventListener('mouseleave', () => {
  anime.footerHoverOff(linkedin);
});




window.onresize = function windowSize(){
  windowH = window.innerHeight;
  windowW = window.innerWidth;
}


