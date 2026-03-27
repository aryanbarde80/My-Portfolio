// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections — throttled with requestAnimationFrame for performance
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let ticking = false;

function onScroll() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');

            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // keep show-animate once triggered so content stays visible
    });

    // sticky header
    header.classList.toggle('sticky', top > 100);

    // remove toggle icon and navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
    }
}, { passive: true });

// trigger initial check so visible sections aren't empty on load
document.addEventListener('DOMContentLoaded', () => {
    onScroll();
});


