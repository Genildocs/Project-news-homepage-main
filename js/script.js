const menuToggle = document.querySelector(".menu-toggle");
const hidden = document.querySelector(".hidden");
const navMenu = document.querySelector(".nav__menu");
let show = false;


const menuOn = function(){
    document.body.style.overflow = show ? "initial" : "hidden";
    menuToggle.classList.toggle("on");
    hidden.classList.toggle("hidden", show);
    show = !show;
    navMenu.classList.toggle("display-on");   
}



menuToggle.addEventListener("click", menuOn);

document.addEventListener("keydown", function(event){
    if(event.key === 'Escape' && !menuToggle.classList.contains('hiden')){
        menuOn();
    }
});
