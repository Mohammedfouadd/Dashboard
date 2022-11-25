let targets = document.querySelector(".targets");
let tickets = document.querySelector(".tickets");
let betton = document.querySelector(".betton");
let spans = document.querySelectorAll(".targets .span");
let spanTwo = document.querySelectorAll(".targets .span span");
let h2s = document.querySelectorAll(".tickets .box h2");

let start = false

window.onscroll = function(){
    if(window.scrollY >= 500){
       betton.style.display = "block"
      
    }else{
       betton.style.display = "none"

    }
    if(window.scrollY >= targets.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.dataset.width
        })
        spanTwo.forEach((span) => {
            span.style.display = "block" ;
            
        })
    }
     if(window.scrollY >= tickets.offsetTop){
        if(!start){

        h2s.forEach((el) => startcount(el))
        }
        start = true
    }
    
}
function startcount(el){
let gole = el.dataset.pros
let count = setInterval(() => {
    el.textContent++
    if(el.textContent == gole){
        clearInterval(count)
    }
}, 1000 / gole )

}
betton.onclick = function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
   }