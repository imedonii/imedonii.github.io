let menuIcon = document.querySelector('.burgerwrap');
let square = document.querySelector('.square');
let menus = document.querySelector('#menu-respo');
let burgerwrap = document.querySelector('.burgerwrap')

let showMenu = () => {

    if (menus.className == 'hidden') {
        menus.classList.remove('hidden');
        burgerwrap.classList.add('showS');
        square.classList.add('showB');
    } else {
        menus.classList.add('hidden');
        burgerwrap.classList.remove('showS');
        square.classList.remove('showB');
    }

}

menuIcon.addEventListener('click', showMenu)

// Slider 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("peopleTalks");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}