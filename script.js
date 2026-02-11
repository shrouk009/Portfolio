function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}

function closeMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('active');
}