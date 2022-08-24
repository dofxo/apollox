// hamburger menu pop up/out start
const hamburgerMenu = document.getElementById('hamburger-menu')
const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon')
const closeIcon = document.querySelector('.close-icon')

// pop up
hamburgerMenuIcon.addEventListener('click', () => {
    hamburgerMenu.classList.add('hamburger-menu-popup')
})
// pop out 
closeIcon.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-popup')
})
// hamburger menu pop up/out END

// footer responsive start
const plusIcons = document.getElementsByClassName('toggle')
const hiddenMenu = document.getElementsByClassName('hidden-menu')
plusIcons[0].addEventListener('click', () => {
    if (!hiddenMenu[0].classList.contains('hidden-menu-popup')) {
        hiddenMenu[0].classList.add('hidden-menu-popup')
        plusIcons[0].classList.remove('bx-plus')
        plusIcons[0].classList.add('bx-minus')


    }
    else {
        hiddenMenu[0].classList.remove('hidden-menu-popup')
        plusIcons[0].classList.add('bx-plus')
        plusIcons[0].classList.remove('bx-minus')

    }

})
plusIcons[1].addEventListener('click', () => {
    if (!hiddenMenu[1].classList.contains('hidden-menu-popup')) {
        hiddenMenu[1].classList.add('hidden-menu-popup')
        plusIcons[1].classList.remove('bx-plus')
        plusIcons[1].classList.add('bx-minus')


    }
    else {
        hiddenMenu[1].classList.remove('hidden-menu-popup')
        plusIcons[1].classList.add('bx-plus')
        plusIcons[1].classList.remove('bx-minus')

    }

})

// footer responsive END