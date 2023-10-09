
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Check if ScrollReveal is defined
// Check if ScrollReveal is defined
if (typeof ScrollReveal !== 'not defined') {
    // ScrollReveal configuration and initialization
    const sr = ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Reveal elements with ScrollReveal
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .portfolio-box, .contact-form', { origin: 'bottom' });
    sr.reveal('.home-content h1,.about-img', { origin: 'left' });
    sr.reveal('.home-content p,.about-content', { origin: 'right' });
    
} else {
    // Log an error message to the console
    console.error('ScrollReveal is not defined. Make sure you have included the ScrollReveal library.');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections. forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height) {
    navLinks.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
         };
    });

    //sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click toggle link
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');

};

const typed = new Typed('.multiple-texts', {
    strings: ['Web Developer','FrontEnd Developer','FullStack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
