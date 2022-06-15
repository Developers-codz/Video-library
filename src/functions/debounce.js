export const debounce = (funct,delay) =>{
    let timer;
     return function(){
       const context=this;
       const args = arguments;
       if(timer) clearTimeout(timer);
       timer = setTimeout(()=>funct.apply(context,args),delay)
     }
  }