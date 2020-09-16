export class Animation {
  messageScrolling(target){
    target.style.animationPlayState = 'running';
  }
  stopScrolling(target){
    target.style.animationPlayState = 'paused';
  }

  navBD(target){
    target.style.top = 0;
  }
  navBU(target){
    if(window.innerWidth <= 500){
      target.style.top = '-110px';
    }else{
      target.style.top = '-100px';
    }
  }

  panelOpen(target){
    target.style.display = 'flex';
    target.style.animationPlayState = 'running';
  }
  panelClose(target){
    // target.style.animationPlayState = 'paused';
    target.style.display = 'none';
  }

  switchShow(target){
    if(window.innerWidth <= 500){
      target.style.right = '0.3rem';
    }else{
      target.style.right = '1rem';
    }
  }
  switchHide(target){
    if(window.innerWidth <= 500){
      target.style.right = '-2rem';
    }else{
      target.style.right = '-3rem';
    }
  }
  
  actCircle(target){
    target.style.strokeDashoffset = '0';
  }
  closeCircle(target){
    target.style.strokeDashoffset = '63';
  }

  panelNoTopOpen(target){
    target.style.display = 'block';
    target.style.animationPlayState = 'running';
  }
  panelNoTopClose(target){
    target.style.display = 'none';
  }

  // Bar Length
  barLengthen(target1, target2, target3, target4, target5, target6){
    target1.style.width = "100%";
    target2.style.width = "90%";
    target3.style.width = "80%";
    target4.style.width = "80%";
    target5.style.width = "40%";
    target6.style.width = "100%";
  }

  navHover(target){
    if(target.className == "current"){
      
    }else{
      target.style.borderColor = '#ccc';
    }
  }
  navHoverOff(target){
    if(target.className != "current"){
      target.style.borderColor = "transparent";
    }
  }
  footerHover(target){
    target.style.background = "#ffbc00";
  }
  footerHoverOff(target){
    target.style.background = "#333";
  }
}