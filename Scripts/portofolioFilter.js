// h1 category selected
let h31 = document.querySelector('.h31');
let h32 = document.querySelector('.h32');
let h33 = document.querySelector('.h33');
let h34 = document.querySelector('.h34');

// Div Category selected
let front = document.querySelectorAll('.front');
let design = document.querySelectorAll('.design');
let java = document.querySelectorAll('.java');

// GRIP seleceted
let squares = document.querySelectorAll('.squares');
let gripSquare = document.querySelector('.gripSquare');
let line = document.querySelector('.line');

let timeline = document.querySelector('.timeline');
let projectsBox = document.querySelector('.projectsBox');
let selectCategory = document.querySelector('.selectCategory');

gripSquare.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.color = '#ff6000';
    }
    line.style.color = 'white';
    timeline.classList.add('hidden');
    projectsBox.classList.remove('hidden');
    selectCategory.classList.remove('hidden');
})

line.addEventListener('click', () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.color = 'white';
    }
    line.style.color = '#ff6000';
    timeline.classList.remove('hidden');
    projectsBox.classList.add('hidden');
    selectCategory.classList.add('hidden');
})

h31.addEventListener('click', () => {
    h31.classList.add('selectedCtg');
    h32.classList.remove('selectedCtg');
    h33.classList.remove('selectedCtg');
    h34.classList.remove('selectedCtg');

    for (let i = 0; i < design.length; i++) {
        design[i].classList.remove('hidden');
    }
    for (let i = 0; i < java.length; i++) {
        java[i].classList.remove('hidden');
    }
    for (let i = 0; i < front.length; i++) {
        front[i].classList.remove('hidden');
    }
})

h32.addEventListener('click', () => {
    h32.classList.add('selectedCtg');
    h31.classList.remove('selectedCtg');
    h33.classList.remove('selectedCtg');
    h34.classList.remove('selectedCtg');

    for (let i = 0; i < design.length; i++) {
        design[i].classList.remove('hidden');
    }
    for (let i = 0; i < java.length; i++) {
        java[i].classList.add('hidden');
    }
    for (let i = 0; i < front.length; i++) {
        front[i].classList.add('hidden');
    }
})

h33.addEventListener('click', () => {
    h33.classList.add('selectedCtg');
    h32.classList.remove('selectedCtg');
    h31.classList.remove('selectedCtg');
    h34.classList.remove('selectedCtg');

    for (let i = 0; i < design.length; i++) {
        design[i].classList.add('hidden');
    }
    for (let i = 0; i < java.length; i++) {
        java[i].classList.add('hidden');
    }
    for (let i = 0; i < front.length; i++) {
        front[i].classList.remove('hidden');
    }
})

h34.addEventListener('click', () => {
    h34.classList.add('selectedCtg');
    h32.classList.remove('selectedCtg');
    h33.classList.remove('selectedCtg');
    h31.classList.remove('selectedCtg');

    for (let i = 0; i < design.length; i++) {
        design[i].classList.add('hidden');
    }
    for (let i = 0; i < java.length; i++) {
        java[i].classList.remove('hidden');
    }
    for (let i = 0; i < front.length; i++) {
        front[i].classList.add('hidden');
    }
})


