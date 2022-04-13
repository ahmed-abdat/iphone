let img = document.querySelector('.images');
let container = document.querySelector('body');



function phones(phone) {
    img.src = phone;

}

function colors(color) {
    container.style.background = color;
}

let nav = document.querySelector('.nav');

nav.onclick = function() {
    nav.classList.toggle('active')
}

let body = document.querySelector('body');

nav.addEventListener('click',function(){
    body.classList.toggle('open');
})