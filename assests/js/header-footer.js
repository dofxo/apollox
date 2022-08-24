// hamburger menu pop up/out start
const hamburgerMenu = document.getElementById('hamburger-menu')
const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon')
const closeIcon = document.querySelector('.close-icon')

// pop up
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('hamburger-menu-popup')
})
// pop out 
closeIcon.addEventListener('click',() => {
    hamburgerMenu.classList.remove('hamburger-menu-popup')
})
// hamburger menu pop up/out END
