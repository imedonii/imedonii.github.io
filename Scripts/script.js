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