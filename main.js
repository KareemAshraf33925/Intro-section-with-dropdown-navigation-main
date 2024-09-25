var arrup1=document.querySelector(".arr-up-1");
var arrup2=document.querySelector(".arr-up-2");
var drowpmenu1=document.querySelector(".drowp-menu1");
var drowpmenu2=document.querySelector(".drowp-menu2");
var menu=document.getElementById("menu");
var navhead=document.querySelector(".nav-head");
var closemenue=document.getElementById("close-menue");
var overflow=document.querySelector(".over-flow");

 menu.addEventListener("click",()=>{
         navhead.classList.add("active");
        overflow.classList.add("active");
 })
 closemenue.addEventListener("click",()=>{
    navhead.classList.remove("active");
    overflow.classList.remove("active");

 })
arrup1.addEventListener("click",()=>{
    if(arrup1.className != ("active")){
        drowpmenu1.classList.toggle("active");
        arrup1.src="images/icon-arrow-up.svg";
    } else{
        arrup1.src="images/icon-arrow-down.svg"
    }
    })


    arrup2.addEventListener("click",()=>{
        if(arrup2.className != ("active")){
            drowpmenu2.classList.toggle("active");
            arrup2.src="images/icon-arrow-up.svg";
        } else{
            arrup2.src="images/icon-arrow-down.svg"
        }
        })
    



