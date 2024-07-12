const nav = document.querySelector(".nav")
const menu = document.getElementById("burguer")
const itemsNav = document.getElementById("itemsNav")
const hoverNav = document.querySelector(".hoverNav")

//função que determina a velocidade do carrossel
$('.carousel').carousel({
    interval: 3000
}) 

//essa função verifica se a página esta rolando para baixo e esconde a nav bar

var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        nav.classList.add("hidden")
        
    } else {
        nav.classList.remove("hidden")
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);


