const headerBtn = document.querySelector(".header__btn")
const navToggle = document.querySelector('.nav__toggle')
const menuBar = document.querySelector('.fa-bars')
const closeBar = document.querySelector('.fa-x')
const show = document.querySelector('.show')

const showNav = () => {
    navToggle.style.right = 0
    navToggle.style.transition = 'right, .3s'
}

const closeNav = () => {
    navToggle.style.right = -305 + 'px'
}

menuBar.addEventListener('click', showNav)
closeBar.addEventListener('click', closeNav)