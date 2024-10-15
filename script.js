// JavaScript to toggle the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Thank you for your message!');
});
