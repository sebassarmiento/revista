let notas = document.getElementsByClassName('nota-mobile')
let nota = Array.from(notas)
let mobile;

window.innerWidth < 864 ? mobile = true : mobile = false

mobile ? window.onscroll = showNotesMobile : window.onscroll = showNotesDesktop

!mobile ? window.onload = presentacion : null

function showNotesMobile() {
    window.scrollY > 500 ? showElement(nota[0]) : hideElement(nota[0])
    window.scrollY > 1000 ? showElement(nota[1]) : hideElement(nota[1])
    window.scrollY > 1500 ? showElement(nota[2]) : hideElement(nota[2])
}

function showElement(el) {
    el.style.opacity = '1'
    el.style.transform = 'translateX(0%)'
}

function hideElement(el, dir) {
    if (el.style.opacity !== '0' && el.style.transform !== 'translateX(20%)') {
        el.style.opacity = '0'
        !dir ? el.style.transform = 'translateX(20%)' : el.style.transform = 'translateX(-20%)'
    }
}

// DESKTOP

let notasDesktop = document.getElementsByClassName('nota')
let notaDesktop = Array.from(notasDesktop)

function showNotesDesktop(){
    window.scrollY > 500 ? showElement(notaDesktop[0]) : hideElement(notaDesktop[0], 1)
    window.scrollY > 500 ? showElement(notaDesktop[1]) : hideElement(notaDesktop[1], 0)
    window.scrollY > 900 ? showElement(notaDesktop[2]) : hideElement(notaDesktop[2], 1)
    window.scrollY > 900 ? showElement(notaDesktop[3]) : hideElement(notaDesktop[3], 0)
}

function presentacion(){
    document.getElementById('presentacion-texto').style.opacity = '1'
    document.getElementById('presentacion-texto').style.transform = 'translateX(0%)'
}
