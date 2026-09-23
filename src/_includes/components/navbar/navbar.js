// navbar.js -- Navigation Logic

const navToggle = document.querySelector('.nav-toggle');
// Checks if menu is open, toggles aria-expanded for SSOT
navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
})
