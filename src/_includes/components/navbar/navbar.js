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

    // Explicitly focus the Nav Toggle
    navToggle.focus();
})

// Exit on Link Click
navMenu.addEventListener('click', (e) => {
    if (e.target.closest('a')) navToggle.click();
    else return;
})

// Tab Fencing Logic
document.addEventListener('keydown', (e) => {
    // Early Returns if menu is closed, or keydown is NOT Escape or tab
    if (navToggle.getAttribute('aria-expanded') !== 'true') return;
    if (e.key !== 'Escape' && e.key !== 'Tab') return;

    // Escape Key to close the menu
    if (e.key === 'Escape') { navToggle.click(); navToggle.focus(); return; }

    // Define Focus-Trap Variables
    const navItems = navMenu.querySelectorAll('a');
    if (!navItems.length) return;

    const first = navItems[0];
    const last = navItems[navItems.length - 1];
    const active = document.activeElement;

    // Focus-Trap Loop
    if (active === navToggle) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
    } else if (active === (e.shiftKey ? first : last)) {
        e.preventDefault();
        navToggle.focus();
    }
})

// navMenu Position Updater
const updateNavOrigin = () => {
    const bounds = navToggle.getBoundingClientRect();

    navMenu.style.setProperty(
        '--nav-origin-x',
        `${bounds.left + bounds.width / 2}px`
    );
    navMenu.style.setProperty(
        '--nav-origin-y',
        `${bounds.top + bounds.height / 2}px`
    );
};
updateNavOrigin();
window.addEventListener('resize', updateNavOrigin);