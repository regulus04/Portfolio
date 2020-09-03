export class Type {
  effect(target, message, time){
    // let message = target.textContent;
    let chars = message.length;
    
    for(let i = 0; i <= chars; i++){
    
      setTimeout(function(){
        // the way A
        let txt = message.substring(0, i);
      
        // // the way B
        // txt += words[i];
        target.textContent = txt;
    
      }, i * time);
    }
  }
}


