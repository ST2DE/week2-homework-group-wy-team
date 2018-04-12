const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav');
const item = document.querySelector('.nav__item');

function toggleChange() {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
    item.classList.toggle("active");

}

toggle.addEventListener('click', toggleChange, false);
