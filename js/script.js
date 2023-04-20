const menuToggle = document.querySelector(".menu-toggle");
const hidden = document.querySelector(".hidden");
const navMenu = document.querySelector(".nav__menu");


const menuOn = function(){
    menuToggle.classList.toggle("on");
    hidden.classList.toggle("hidden");
    navMenu.classList.toggle("display-on");
   
}

menuToggle.addEventListener("click", menuOn);