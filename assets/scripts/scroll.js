// Scroll Functions - Mundo Aventurero
// Botón "Ir arriba" y scroll suave

document.addEventListener('DOMContentLoaded', function() {
    // Botón "Ir arriba" funcionalidad
    const scrollTopBtn = document.getElementById('scroll-to-top');
    
    if (scrollTopBtn) {
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 150) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll suave al hacer clic
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});