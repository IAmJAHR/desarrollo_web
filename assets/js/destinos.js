/**
 * Funcionalidad específica de Destinos
 * Implementa Strategy Pattern para filtros.
 */
App.Destinos = (function() {
    
    // --- Strategy Pattern para Filtros ---
    const FilterStrategies = {
        'europa': (titulo) => titulo.includes('parís') || titulo.includes('londres') || titulo.includes('roma'),
        'america': (titulo) => titulo.includes('nueva york') || titulo.includes('machu picchu'),
        'asia': (titulo) => titulo.includes('tokio'),
        'default': () => true
    };

    function init() {
        setupGallery();
    }

    function setupGallery() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            // Clonar nodo para eliminar listeners anteriores si los hubiera (limpieza)
            // O simplemente agregar el listener.
            card.addEventListener('click', function() {
                const destino = this.querySelector('h3').textContent;
                const confirmacion = confirm(`¿Te interesa conocer más sobre ${destino}?`);
                
                if (confirmacion) {
                    alert(`¡Excelente! Pronto tendremos más información sobre ${destino}`);
                }
            });
        });
    }

    function filtrarPorContinente(continente) {
        const cards = document.querySelectorAll('.card');
        const strategy = FilterStrategies[continente] || FilterStrategies['default'];
        
        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            const mostrar = strategy(titulo);
            card.style.display = mostrar ? 'block' : 'none';
        });
    }

    // Exponer a window
    window.filtrarPorContinente = filtrarPorContinente;

    return {
        init: init
    };

})();

document.addEventListener('DOMContentLoaded', function() {
    App.Destinos.init();
});