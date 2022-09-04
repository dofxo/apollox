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
const plusIconClass = document.getElementsByClassName('bxs-plus-circle')


function IconAndBackgroundColorChange(indexNumber) {
    faqDiv[indexNumber].addEventListener('click', () => {
        if (plusIconClass[indexNumber].style.color != '') {
            plusIconClass[indexNumber].style.color = ''
        } else {
            plusIconClass[indexNumber].style.color = ''
        }
    })

}
IconAndBackgroundColorChange(0)
// FAQ answers pop up/out END