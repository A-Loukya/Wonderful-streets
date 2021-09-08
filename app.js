const toggle=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-list");


toggle.addEventListener('click',function(){
    nav.classList.toggle("active");
})
