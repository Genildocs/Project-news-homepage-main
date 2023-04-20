const menuToggle = document.querySelector(".menu-toggle");


const menuOn = function(){
    menuToggle.classList.toggle("on");
}

menuToggle.addEventListener("click", menuOn);