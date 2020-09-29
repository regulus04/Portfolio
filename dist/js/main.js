import { Type } from './Type.js';
import { Animation } from './Animation.js';

// What to do
// Changing color affected by scrolling
// message
// language
// mobile


// submit button without input
// about me scroll position
// footer cursor

const navBG = document.querySelector('#nav-background');
const circleLayer = document.querySelector('#circle-layer');
const circleBox = document.querySelector('#circle-box');
const circle = document.querySelector('#circle');
const photo = document.querySelector('#background-photo');
const aboutMe = document.querySelector('#about-me');
// About
const aboutPanel = document.querySelector('#about-photo');
const aboutProfile = document.querySelector('#about-texts');
const progressBar1 = document.querySelector('#progress-bar-1');
const progressBar2 = document.querySelector('#progress-bar-2');
const progressBar3 = document.querySelector('#progress-bar-3');
const progressBar4 = document.querySelector('#progress-bar-4');
const progressBar5 = document.querySelector('#progress-bar-5');
const progressBar6 = document.querySelector('#progress-bar-6');

const switchLang = document.querySelector('#switch-lang');
const switchJp = document.querySelector('#lang-jp')
const circleJp = document.querySelector('#circle-jp')
const switchEn = document.querySelector('#lang-en')
const circleEn = document.querySelector('#circle-en')
const jpProfile = document.querySelector('#japanese-profile')
const enProfile = document.querySelector('#english-profile')

// Work
const qr = document.querySelector('#hidden-message');
const threeM = document.querySelector('#three-message');
const work1 = document.querySelector('#work-1');
const work2 = document.querySelector('#work-2');
const work3 = document.querySelector('#work-3');
const SCM1 = document.querySelector('#scroll-message-1');
const SCM2 = document.querySelector('#scroll-message-2');
const SCM3 = document.querySelector('#scroll-message-3');
const widthCheck = document.querySelector('#width-check');

// Navbar
const inNavBar = document.querySelector('#main-nav-invisible');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
const invisibleHome = document.querySelector('#in-home');
const invisibleAbout = document.querySelector('#in-about');
const invisibleWork = document.querySelector('#in-work');
const invisibleContact = document.querySelector('#in-contact');

// Hidden message 
const corners = document.querySelector('#corners');
const borderBox = document.querySelector('#border-box');
const innerBox1 = document.querySelector('#inner-box-1');

// Footer
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


window.onbeforeunload = function () { window.scrollTo(0,0)};

// Navbar About /////
// Scroll to About part
aboutMe.addEventListener('click', scrollToAbout, false);
// invisibleHome.addEventListener('click', scrollToAbout, false);
function scrollToAbout(e){
  e.preventDefault();
  window.scrollTo({ top: windowH * 1, behavior: 'smooth' });
}

// Check users browser
// var userAgent = window.navigator.userAgent;

// Circle mix-blend-mode ///////////////////
document.body.addEventListener('mousemove', mouse);
function mouse(e){
  mouseX = e.clientX;
  mouseY = e.clientY;

  circleBox.style.transform = `translate3d(${mouseX - 125}px, ${mouseY - 125}px, 0px)`;
}

// Scroll event /////////////////////////////////////
window.addEventListener('scroll', scroll);
function scroll(){
  let scrollY = document.documentElement.scrollTop;

  if(windowH < 700){
    // For small window //////////////
    if(scrollY >= windowH + 2600 && scrollY <= windowH + 2700){

      let range = 100;
      let x = scrollY - (windowH + 2600);
  
      circleBox.style.opacity = x / range;
      circle.style.opacity = x / range;
      circleBox.style.display = 'flex';
  
      circleLayer.style.display = 'block';
  
      // invisible nav bar cursor change
      inNavBar.style.cursor = "none";
      // inNavBar.style.display = "flex";
  
    }else if(scrollY > windowH + 2700){
  
      circleBox.style.cursor = 'none';
      circleBox.style.opacity = 1;
      circle.style.opacity = 1;
  
      qr.style.cursor = 'none';
    }else if(scrollY < windowH + 2600){
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
    // photo.style.transform = `translate3d(0px, ${-scrollL}px, 0px)`
    
    // Nav background Animation
    if(windowW < 500){
      if(scrollY > windowH * 0.1){
        anime.navBD(navBG);
      }else if(scrollY <= windowH * 0.1){
        anime.navBU(navBG);
      }
    }else{
      if(scrollY > windowH * 0.9){
        anime.navBD(navBG);
      }else if(scrollY <= windowH * 0.9){
        anime.navBU(navBG);
      }
    }
  
    // Panel reaction
    if(scrollY > windowH * 0.7){
      anime.panelOpen(aboutPanel);
      anime.panelOpen(aboutProfile);
      anime.switchShow(switchLang);
    }else if(scrollY <= windowH * 0.3){
      anime.panelClose(aboutPanel);
      anime.panelClose(aboutProfile);
      anime.switchHide(switchLang);
    }
  
    // Bar Lengthening
    if(scrollY > windowH * 1.1){
      anime.barLengthen(progressBar1, progressBar2, progressBar3, progressBar4, progressBar5, progressBar6);
    }
  
    // Typing Message /////////////////////
    let m1 = 'What I can do is';
    let m2 = 'Making news websites,';
    let m3 = 'Desktop apps,';
    let m4 = 'Fun RPG games,';
    let m5 = 'and so on...';
    let tM = threeM.textContent;
    
  
    if(scrollY == 0){
      threeM.textContent = m1;
    }
    if(windowW > 500){
      if(scrollY <= windowH + 1100 && (tM == m2 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m1, 100);
      }else if(scrollY > windowH + 1100 && scrollY <= windowH + 1400 && (tM == m1 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m2, 70);
      }else if(scrollY > windowH + 1400 && scrollY <= windowH + 1900 && (tM == m1 || tM == m2 || tM == m4 || tM == m5)){
        type.effect(threeM, m3, 100);
      }else if(scrollY > windowH + 1900 && scrollY <= windowH + 2200 &&(tM == m1 || tM == m2 || tM == m3 || tM == m5)){
        type.effect(threeM, m4, 100);
      }else if(scrollY > windowH + 2200 && (tM == m1 || tM == m2 || tM == m3 || tM == m4)){
        type.effect(threeM, m5, 100);
      }
  
    }else if(windowW <= 500){
      if(scrollY <= windowH + 1200 && (tM == m2 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m1, 100);
      }else if(scrollY > windowH + 1200 && scrollY <= windowH + 1500 && (tM == m1 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m2, 70);
      }else if(scrollY > windowH + 1700 && scrollY <= windowH + 2100 && (tM == m1 || tM == m2 || tM == m4 || tM == m5)){
        type.effect(threeM, m3, 100);
      }else if(scrollY > windowH + 2100 && scrollY <= windowH + 2500 &&(tM == m1 || tM == m2 || tM == m3 || tM == m5)){
        type.effect(threeM, m4, 100);
      }else if(scrollY > windowH + 2500 && (tM == m1 || tM == m2 || tM == m3 || tM == m4)){
        type.effect(threeM, m5, 100);
      }
    }
    
  
    // Open Work 1-3
    if(scrollY > windowH + 900){
      anime.panelNoTopOpen(work1);
    }
    if(scrollY > windowH + 1350){
      anime.panelNoTopOpen(work2);
    }
    if(scrollY > windowH + 1600){
      anime.panelNoTopOpen(work3);
    }
    // Close work 1-3
    if(scrollY == 0){
      anime.panelNoTopClose(work1);
      anime.panelNoTopClose(work2);
      anime.panelNoTopClose(work3);
    }
  
    // Scroll objects in different speed //////////
    if(windowW > 500){
  
      // if(scrollY > windowH * 2.6){
      //   let range = scrollY - windowH * 2.5;
      //   work1.style.top = -100 - range / 10 + 'px';
      // }
      // if(scrollY > windowH * 3.1){
      //   let range = scrollY - windowH * 3;
      //   work2.style.top = 300 - range / 2 + 'px';
      // }
      // if(scrollY > windowH * 3.2){
      //   let range = scrollY - windowH * 3.6;
      //   work3.style.top = 500 - range / 1.5 + 'px';
      // }
      // Move messages to the sides 
      if(windowW < 500){
        threeM.style.left = "0";
      }else{
  
        if(scrollY <= windowH + 1100){
          threeM.style.left = 0;
        }else if(scrollY > windowH + 1100 && scrollY <= windowH + 1400){
          threeM.style.left = '25vw';
        }else if(scrollY > windowH + 1400 && scrollY <= windowH + 1900){
          threeM.style.left = '-20vw';
        }else if(scrollY > windowH + 1900 && scrollY <= windowH + 2200){
          threeM.style.left = '25vw';
        }else if(scrollY > windowH + 2200){
          threeM.style.left = 0;
        }
      }
    }

  }else{
    // For normal window //////////
    if(scrollY >= windowH / 5 * 25 && scrollY <= windowH / 5 * 26){
  
      let range = windowH / 5;
      let x = scrollY - windowH / 5 * 25;
  
      circleBox.style.opacity = x / range;
      circle.style.opacity = x / range;
      circleBox.style.display = 'flex';
  
      circleLayer.style.display = 'block';
  
      // invisible nav bar cursor change
      inNavBar.style.cursor = "none";
      // inNavBar.style.display = "flex";
  
    }else if(scrollY > windowH / 5 * 26){
  
      circleBox.style.cursor = 'none';
      circleBox.style.opacity = 1;
      circle.style.opacity = 1;
  
      qr.style.cursor = 'none';
    }else if(scrollY < windowH / 5 * 25){
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
    if(windowW < 500){
      if(scrollY > windowH * 0.1){
        anime.navBD(navBG);
      }else if(scrollY <= windowH * 0.1){
        anime.navBU(navBG);
      }
    }else{
      if(scrollY > windowH * 0.9){
        anime.navBD(navBG);
      }else if(scrollY <= windowH * 0.9){
        anime.navBU(navBG);
      }
    }
  
    // Panel reaction
    if(scrollY > windowH * 0.7){
      anime.panelOpen(aboutPanel);
      anime.panelOpen(aboutProfile);
      anime.switchShow(switchLang);
    }else if(scrollY <= windowH * 0.3){
      anime.panelClose(aboutPanel);
      anime.panelClose(aboutProfile);
      anime.switchHide(switchLang);
    }
  
    // Bar Lengthening
    if(scrollY > windowH * 1.1){
      anime.barLengthen(progressBar1, progressBar2, progressBar3, progressBar4, progressBar5, progressBar6);
    }
  
    // Typing Message /////////////////////
    let m1 = 'What I can do is';
    let m2 = 'Making news websites,';
    let m3 = 'Desktop apps,';
    let m4 = 'Fun RPG games,';
    let m5 = 'and so on...';
    let tM = threeM.textContent;
    
  
    if(scrollY == 0){
      threeM.textContent = m1;
    }
    if(windowW > 500){
      if(scrollY <= windowH * 2.8 && (tM == m2 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m1, 100);
      }else if(scrollY > windowH * 2.8 && scrollY <= windowH * 3.5 && (tM == m1 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m2, 70);
      }else if(scrollY > windowH * 3.5 && scrollY <= windowH * 3.9 && (tM == m1 || tM == m2 || tM == m4 || tM == m5)){
        type.effect(threeM, m3, 100);
      }else if(scrollY > windowH * 3.9 && scrollY <= windowH * 4.3 &&(tM == m1 || tM == m2 || tM == m3 || tM == m5)){
        type.effect(threeM, m4, 100);
      }else if(scrollY > windowH * 4.3 && (tM == m1 || tM == m2 || tM == m3 || tM == m4)){
        type.effect(threeM, m5, 100);
      }
  
    }else if(windowW <= 500){
      if(scrollY <= windowH * 2.8 && (tM == m2 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m1, 100);
      }else if(scrollY > windowH * 2.8 && scrollY <= windowH * 3.5 && (tM == m1 || tM == m3 || tM == m4 || tM == m5)){
        type.effect(threeM, m2, 70);
      }else if(scrollY > windowH * 3.5 && scrollY <= windowH * 4.2 && (tM == m1 || tM == m2 || tM == m4 || tM == m5)){
        type.effect(threeM, m3, 100);
      }else if(scrollY > windowH * 4.2 && scrollY <= windowH * 4.7 &&(tM == m1 || tM == m2 || tM == m3 || tM == m5)){
        type.effect(threeM, m4, 100);
      }else if(scrollY > windowH * 4.7 && (tM == m1 || tM == m2 || tM == m3 || tM == m4)){
        type.effect(threeM, m5, 100);
      }
    }
    
  
    // Open Work 1-3
    if(scrollY > windowH * 2.0){
      anime.panelNoTopOpen(work1);
    }
    if(scrollY > windowH * 2.9){
      anime.panelNoTopOpen(work2);
    }
    if(scrollY > windowH * 3.7){
      anime.panelNoTopOpen(work3);
    }
    // Close work 1-3
    if(scrollY == 0){
      anime.panelNoTopClose(work1);
      anime.panelNoTopClose(work2);
      anime.panelNoTopClose(work3);
    }
  
    // Scroll objects in different speed //////////
    if(windowW > 500){
  
      if(scrollY > windowH * 2.6){
        let range = scrollY - windowH * 2.5;
        work1.style.top = -100 - range / 10 + 'px';
      }
      if(scrollY > windowH * 3.1){
        let range = scrollY - windowH * 3;
        work2.style.top = 300 - range / 3 + 'px';
      }
      if(scrollY > windowH * 3.2){
        let range = scrollY - windowH * 3.6;
        work3.style.top = 500 - range / 1.5 + 'px';
      }
      // Move messages to the sides 
      if(windowW < 500){
        threeM.style.left = "0";
      }else{
  
        if(scrollY <= windowH * 2.8){
          threeM.style.left = 0;
        }else if(scrollY > windowH * 2.8 && scrollY <= windowH * 3.5){
          threeM.style.left = '25vw';
        }else if(scrollY > windowH * 3.5 && scrollY <= windowH * 3.9){
          threeM.style.left = '-20vw';
        }else if(scrollY > windowH * 3.9 && scrollY <= windowH * 4.3){
          threeM.style.left = '25vw';
        }else if(scrollY > windowH * 4.3){
          threeM.style.left = 0;
        }
      }
    }
  }

}
// Scroll end /////////////////////////////////////

// Switch language 
let lang = 'en';
// jp circle hover
switchJp.addEventListener('mouseover', () => {
  if(lang == 'en'){
    anime.actCircle(circleJp);
  }
});
switchJp.addEventListener('mouseleave', () => {
  if(lang == 'en'){
    anime.closeCircle(circleJp);
  }
});
// en circle hover 
switchEn.addEventListener('mouseover', () => {
  if(lang == 'jp'){
    anime.actCircle(circleEn);
  }
});
switchEn.addEventListener('mouseleave', () => {
  if(lang == 'jp'){
    anime.closeCircle(circleEn);
  }
});
// click switch
switchJp.addEventListener('click', () => {
  if(lang == 'en'){
    lang = 'jp';
    anime.actCircle(circleJp);
    anime.closeCircle(circleEn);
    enProfile.style.display = "none";
    jpProfile.style.display = 'inline-block';
  }
});
switchEn.addEventListener('click', () => {
  if(lang == 'jp'){
    lang = 'en';
    anime.actCircle(circleEn);
    anime.closeCircle(circleJp);
    jpProfile.style.display = 'none';
    enProfile.style.display = "inline-block";
  }
});


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
// invisibleAbout.addEventListener('mouseover', () => {
//   anime.navHover(about);
// });
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
// invisibleAbout.addEventListener('mouseleave', () => {
//   anime.navHoverOff(about);
// });
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

// QR code part//////////
// Squere //
qr.addEventListener('mouseover', function(){
  corners.style.opacity = '1';
  corners.style.width = '110px';
  corners.style.height = '110px';
  corners.style.top = '-5px';
  corners.style.left = '-5px';

  borderBox.style.width = '106px';
  borderBox.style.height = '106px';

  innerBox1.style.width = '130px';
  innerBox1.style.height = '130px';
});

qr.addEventListener('mouseleave', function(){
  corners.style.opacity = '0';
  corners.style.width = '200px';
  corners.style.height = '200px';
  corners.style.top = '-50px';
  corners.style.left = '-50px';

  borderBox.style.width = '196px';
  borderBox.style.height = '196px';

  innerBox1.style.width = '220px';
  innerBox1.style.height = '220px';
  innerBox1.style.top = '-10px';
  innerBox1.style.left = '-10px';
});


window.onresize = function windowSize(){
  if(window.innerWidth < 500){
    work1.style.top = '-200px';
    work2.style.top = '5px';
    work3.style.top = '350px';
  }

  if(window.innerHeight < 700){
    work1.style.top = '-100px';
    work2.style.top = '200px';
    work3.style.top = '500px';
  }

  windowH = window.innerHeight;
  windowW = window.innerWidth;


  threeM.style.left = "0";
}

