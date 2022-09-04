// coins menu pop up/out

const coinMenuSelectionClass = document.getElementsByClassName('currency-selector-relative-box')
const coinMenuClass = document.getElementsByClassName('coin-menu')

function show(indexNumber) {
    coinMenuSelectionClass[indexNumber].addEventListener('click', () => {
        if (coinMenuClass[indexNumber].style.display != 'flex') {
            coinMenuClass[indexNumber].style.display = 'flex'
        } else {
            coinMenuClass[indexNumber].style.display = 'none'
        }

    })
}
show(0), show(1)


// coins menu po up/out END 

// FAQ answers pop up/out START

// faq bg color change
const faqDiv = document.getElementsByClassName('faq-questions')
let clicked = false
for (let i = 0; i < faqDiv.length; i++) {
    faqDiv[i].addEventListener('click', () => {
        if (clicked === false) {
            faqDiv[i].style.background = '#72768f31'
            clicked = true
        } else {
            faqDiv[i].style.background = ''
            clicked = false
        }

    })
}
// faq icon bg color change 
const plusIconClass = document.getElementsByClassName('plus-icon')
const aMenu = document.getElementsByClassName('a-menu')
let colorChanged = false
function IconAndBackgroundColorChange(indexNumber) {

    faqDiv[indexNumber].addEventListener('click', () => {
        if (colorChanged === false) {
            plusIconClass[indexNumber].style.color = '#5376f6'
            plusIconClass[indexNumber].classList.add('bxs-minus-circle')
            plusIconClass[indexNumber].classList.remove('bxs-plus-circle')
            aMenu[indexNumber].style.height = '100%'
            colorChanged = true
        }
        else {
            plusIconClass[indexNumber].style.color = '#72768F'
            plusIconClass[indexNumber].classList.remove('bxs-minus-circle')
            plusIconClass[indexNumber].classList.add('bxs-plus-circle')
            aMenu[indexNumber].style.height = '0'
            colorChanged = false
        }
    })

}
IconAndBackgroundColorChange(0), IconAndBackgroundColorChange(1), IconAndBackgroundColorChange(2), IconAndBackgroundColorChange(3)



// FAQ answers pop up/out END