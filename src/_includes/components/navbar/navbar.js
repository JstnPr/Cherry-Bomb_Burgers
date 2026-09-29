// navbar.js -- Navigation Logic

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-main');
// Checks if menu is open, toggles aria-expanded for SSOT
navToggle.addEventListener('click', () => {
    // Toggles aria-expanded on button
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    // Toggles the menu's open state, based on the button's aria-expanded attribute
    navMenu.classList.toggle('is-open', !isExpanded);
})
