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
    target.style.top = '-100px';
  }

  panelOpen(target){
    target.style.display = 'flex';
    target.style.animationPlayState = 'running';
  }
  panelClose(target){
    // target.style.animationPlayState = 'paused';
    target.style.display = 'none';
  }

  panelNoTopOpen(target){
    target.style.display = 'block';
    target.style.animationPlayState = 'running';
  }
  panelNoTopClose(target){
    target.style.display = 'none';
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