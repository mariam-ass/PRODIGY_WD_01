window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navbar a');
    if (window.scrollY > 50) {
        navbar.classList.add('scroll');
        navLinks.forEach(link => {
            link.classList.add('change-color');
        });
    } else {
        navbar.classList.remove('scroll');
        navLinks.forEach(link => {
            link.classList.remove('change-color');
        });
    }
});

