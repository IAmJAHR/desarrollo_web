// Menu Hamburguesa - Mundo Aventurero
// Funcionalidad del menú responsive

document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa funcionalidad
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = menuToggle.querySelector('i');

    if (menuToggle && navMenu && menuIcon) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Cambiar icono entre hamburguesa y X
            if (navMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(event) {
            const header = document.querySelector('header');
            if (!header.contains(event.target)) {
                navMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }
});