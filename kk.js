// Toggle Theme
const themeBtn = document.querySelector('.theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.classList.toggle('dark-mode-btn');
});

// Control Active Class
const controls = document.querySelectorAll('.control');
const sections = document.querySelectorAll('section');
const mainContent = document.querySelector('main');

controls.forEach(control => {
    control.addEventListener('click', () => {
        const id = control.dataset.id;

        // Remove active class from all controls
        controls.forEach(btn => btn.classList.remove('active-btn'));

        // Add active class to the clicked control
        control.classList.add('active-btn');

        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));

        // Show the clicked section
        const activeSection = document.getElementById(id);
        activeSection.classList.add('active');
    });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = contactForm.querySelector('input[placeholder="YOUR NAME"]').value;
    const email = contactForm.querySelector('input[placeholder="YOUR EMAIL"]').value;
    const subject = contactForm.querySelector('input[placeholder="ENTER SUBJECT"]').value;
    const message = contactForm.querySelector('textarea').value;

    if (name && email && subject && message) {
        // Simulate form submission (replace with actual form submission logic)
        alert('Form submitted successfully!');

        // Reset form
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
