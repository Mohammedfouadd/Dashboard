let betton = document.querySelector(".betton");

window.onscroll = function(){
    if(window.scrollY >= 500){
       betton.style.display = "block"
    }else{
       betton.style.display = "none"
    }
}

betton.onclick = function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
   }