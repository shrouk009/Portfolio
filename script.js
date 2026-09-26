const menu = document.getElementById('nav-menu');
const menuButton = document.querySelector('.mobile-menu-btn');

function toggleMenu() {
    const isOpen = menu.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
}

function closeMenu() {
    menu.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
        menuButton.focus();
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('nav')) closeMenu();
});

window.matchMedia('(max-width: 900px)').addEventListener('change', closeMenu);

// This static portfolio opens a draft; sending remains in the visitor's email app.
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const fields = new FormData(contactForm);
    const subject = encodeURIComponent('Portfolio inquiry from ' + fields.get('name').trim());
    const body = encodeURIComponent(
        'Name: ' + fields.get('name').trim() + '\n' +
        'Email: ' + fields.get('email').trim() + '\n\n' +
        fields.get('message').trim()
    );
    window.location.href = 'mailto:shroukbussnis@gmail.com?subject=' + subject + '&body=' + body;
    contactForm.querySelector('.form-status').textContent =
        'Your email app will open a draft. If it does not open, email shroukbussnis@gmail.com directly. Your message has not been sent by this website.';
});
