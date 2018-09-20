let notas = document.getElementsByClassName('nota')
let nota = Array.from(notas)

window.onscroll = showNotes

function showNotes() {
    window.scrollY > 500 ? showElement(nota[0]) : hideElement(nota[0])
    window.scrollY > 1000 ? showElement(nota[1]) : hideElement(nota[1])
    window.scrollY > 1500 ? showElement(nota[2]) : hideElement(nota[2])
}

function showElement(el) {
    el.style.opacity = '1'
    el.style.transform = 'translateX(0%)'
}

function hideElement(el) {
    if (el.style.opacity !== '0' && el.style.transform !== 'translateX(20%)') {
        el.style.opacity = '0'
        el.style.transform = 'translateX(20%)'
    }
}