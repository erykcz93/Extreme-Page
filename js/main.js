const headerBtn = document.querySelector(".header__btn")
const navToggle = document.querySelector('.nav__toggle')
const menuBar = document.querySelector('.fa-bars')
const closeBar = document.querySelector('.fa-x')
const show = document.querySelector('.show')

const showNav = () => {
    navToggle.style.display = 'flex';
}

const closeNav = () => {
    navToggle.style.display = 'none';
}

menuBar.addEventListener('click', showNav)
closeBar.addEventListener('click', closeNav)