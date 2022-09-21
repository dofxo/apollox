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
function MenuPopUp(index) {
    plusIcons[index].addEventListener('click', () => {
        if (!hiddenMenu[index].classList.contains('hidden-menu-popup')) {
            hiddenMenu[index].classList.add('hidden-menu-popup')
            plusIcons[index].classList.remove('bx-plus')
            plusIcons[index].classList.add('bx-minus')
    
    
        }
        else {
            hiddenMenu[index].classList.remove('hidden-menu-popup')
            plusIcons[index].classList.add('bx-plus')
            plusIcons[index].classList.remove('bx-minus')
    
        }
    
    })
}

MenuPopUp(0),MenuPopUp(1)

// footer responsive END