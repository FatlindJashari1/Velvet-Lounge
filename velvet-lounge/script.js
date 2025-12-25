document.addEventListener('DOMContentLoaded', () => {
// 1. Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
// Toggles the 'active' class to show/hide the navigation links
navLinks.classList.toggle('active');

// Change the icon from bars to X and vice-versa
const icon = menuToggle.querySelector('i');
icon.classList.toggle('fa-bars');
icon.classList.toggle('fa-times');
});

// Hide menu when a link is clicked (important for single-page sites)
navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', () => {
// Only close if the menu is visible (on mobile)
if (navLinks.classList.contains('active')) {
navLinks.classList.remove('active');
menuToggle.querySelector('i').classList.remove('fa-times');
menuToggle.querySelector('i').classList.add('fa-bars');
}
});
});
}

// 2. Simple Contact Form Handling (Client-side only)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault(); // Prevent the actual form submission

// In a real website, you would use 'fetch' here to send data to a server/email service.

// Simulate form submission success
formMessage.textContent = 'Message sent! We appreciate your interest in Velvet Lounge.';
formMessage.style.color = '#5D4037'; // Dark Brown success color
contactForm.reset(); // Clear the form fields

// Clear the message after a few seconds
setTimeout(() => {
formMessage.textContent = '';
}, 5000);
});
}
});
