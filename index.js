const hamButton = document.getElementById('ham');
const navLinks = document.querySelector('nav ul');

hamButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})

// carousel 1

const carousel = document.querySelector('#carousel');
const elements = carousel.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let counter = 1;
let size = 20;

carousel.style.transform = `translateX(-${counter*size}%)`;

next.addEventListener('click',()=>{
    if(counter >= elements.length-1) return ;
    carousel.style.transition = "transform 0.7s ease-in";
    counter++;
    carousel.style.transform = `translateX(-${counter*size}%)`;
})

prev.addEventListener('click',()=>{
    if(counter <= 0 ) return;
    carousel.style.transition = "transform 0.7s ease-in";
    counter--;
    carousel.style.transform = `translateX(-${counter*size}%)`;
})

carousel.addEventListener('transitionend',()=>{
    if(elements[counter].id == "lastclone"){
        carousel.style.transition = "none";
        counter = elements.length - 2;
        carousel.style.transform = `translateX(-${counter*size}%)`;
    }
    if(elements[counter].id == "firstclone"){
        carousel.style.transition = "none";
        counter = elements.length - counter;
        carousel.style.transform = `translateX(-${counter*size}%)`;
    }           
})

// check mouse
let isMouseOver = false;

carousel.addEventListener('mouseover',()=>{
    isMouseOver = true;
})

carousel.addEventListener('mouseout',()=>{
    isMouseOver = false;
})

// automate the process
setInterval(() => {
    if(counter == 0 || counter == elements.length - 1 || isMouseOver){
        return;
    }
    carousel.style.transition = "transform 1s ease-in";
    counter++;
    carousel.style.transform = `translateX(-${counter*size}%)`;
}, 5000);

// select dropdown

tail.select(".select");

// date picker
flatpickr("#date", {
    altInput: true,
    disableMobile: "true",
    defaultDate:'today',
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

// destinations
const grid = document.getElementById('grid');

let clientX,initOffset = 18;
grid.addEventListener('touchstart',(e)=>{
    clientX = Math.round(e.touches[0].clientX);
})

grid.addEventListener('touchmove',(e)=>{
    let check = initOffset;
    let offset = Math.round(e.touches[0].clientX) - clientX;
    
    if(Math.abs(offset) >= 200){
        check = grid.getBoundingClientRect().left;
    }

    if(!isAllowed(check,offset)){
        return;
    }

    grid.style.transform = `translateX(${offset + initOffset}px)`
})

function isAllowed(check,offset){
    if((check >= 18 && offset > 0) || (check <= -838 && offset <0)){
        return false;
    }else {
        return true;
    }
}

grid.addEventListener('touchend',()=>{
    initOffset = grid.getBoundingClientRect().left;
})