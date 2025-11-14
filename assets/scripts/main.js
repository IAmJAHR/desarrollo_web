// Main JavaScript - Mundo Aventurero
// Inicialización principal y navbar sticky

document.addEventListener('DOMContentLoaded', function() {
    // Navbar sticky al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        
        // Cuando el scroll sea mayor a 100px, agregar clase sticky
        if (scrollPosition > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});