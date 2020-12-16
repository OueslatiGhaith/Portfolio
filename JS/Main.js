/*---------------------------------------------- SHOW MENU -------------------------------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*--------------------------------------------- ACTIVATE AND REMOVE MENU -----------------------*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Activate link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*--- ------------------------------------------ SCROLL REVEAL ANIMATION ------------------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*--- ------------------------------------------ SCROLL HOME ------------------------------------*/
sr.reveal('.home__title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.home__img', { delay: 400 })
sr.reveal('.home__social-icon', { interval: 200 })

/*--- ------------------------------------------ SCROLL ABOUT -----------------------------------*/
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', { delay: 200 })
sr.reveal('.about__text', { delay: 400 })

/*--- ------------------------------------------ SCROLL SKILLS ----------------------------------*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__text', { delay: 200 })
sr.reveal('.skills__data', { interval: 200 })
sr.reveal('.skills__img', { delay: 400 })

/*--- ------------------------------------------ SCROLL CARDS -----------------------------------*/
sr.reveal('.cards__list', {})

/*--- ------------------------------------------ SCROLL WORK ------------------------------------*/
sr.reveal('.work__img', { interval: 200 })

/*--- ------------------------------------------ SCROLL FOOTER ----------------------------------*/
sr.reveal('.footer__icon', { interval: 200 })

/*--- ------------------------------------------ LOGO ANIMATION ---------------------------------*/
document.addEventListener('mousemove', move);

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*--- ------------------------------------------ CONTACT POPUP ----------------------------------*/
var contactItems = document.getElementById("contactPopUP");
var contactButton = document.getElementById("contactButton");
var contactIcon = document.getElementById("conctactIcon");

contactButton.onclick = function() {
    if (contactItems.style.display == "block") {
        contactItems.style.display = "none"
        contactIcon.classList = ('bx bxs-message-detail contact__icon')
    } else {
        contactItems.style.display = "block";
        contactIcon.classList = ('bx bx-hide contact__icon');
    }
}

/* Send Alert */
var alertBar = document.getElementById("alert");
var SendBtn = document.getElementById("send-button");
var alertCloseBtn = document.getElementById("alert-close-button");

SendBtn.onclick = function() {
    alertBar.classList.replace("hide", "show");
    alertBar.classList.add("showAlert");
    console.log(alertBar.classList)
}
alertCloseBtn.onclick = function() {
    alertBar.classList.replace("show", "hide");
}

/* auto hide alert */
setTimeout(function() {
    alertBar.classList.replace("show", "hide");
}, 5000);