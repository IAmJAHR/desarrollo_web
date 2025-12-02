/**
 * Funcionalidad específica de Testimonios
 * Utiliza App.Utils para validaciones.
 */
App.Testimonios = (function() {
    
    function init() {
        setupInteractions();
    }

    function setupInteractions() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach(card => {
            card.addEventListener('click', function() {
                const autor = this.querySelector('.testimonial-author').textContent;
                const destino = autor.split('·')[1].trim();
                
                if(confirm(`¿Te interesa conocer más sobre ${destino}?`)) {
                    alert(`¡Excelente elección! ${destino} es uno de nuestros destinos más populares. Te contactaremos con más información.`);
                }
            });
        });
    }

    function agregarTestimonio() {
        const nombre = prompt('Ingresa tu nombre:');
        
        if (!App.Utils.validarTexto(nombre, 2)) {
            alert('Nombre inválido');
            return;
        }
        
        const destino = prompt('¿A qué destino viajaste?');
        
        if (!App.Utils.validarTexto(destino, 2)) {
            alert('Destino inválido');
            return;
        }
        
        const comentario = prompt('Escribe tu testimonio (máximo 200 caracteres):');
        
        if (!App.Utils.validarTexto(comentario, 10)) {
            alert('El testimonio debe tener al menos 10 caracteres');
            return;
        }
        
        if (comentario.length > 200) {
            alert('El testimonio es muy largo. Máximo 200 caracteres.');
            return;
        }
        
        if(confirm(`¿Deseas publicar tu testimonio?\n\nNombre: ${nombre}\nDestino: ${destino}\nComentario: ${comentario}`)) {
            alert('¡Gracias por tu testimonio! Será revisado y publicado pronto.');
        }
    }

    function filtrarTestimonios() {
        const destino = prompt('Ingresa el destino que te interesa (París, Tokyo, Nueva York, etc.):');
        
        if (!destino) return;
        
        const cards = document.querySelectorAll('.testimonial-card');
        let encontrados = 0;
        
        cards.forEach(card => {
            const autor = card.querySelector('.testimonial-author').textContent.toLowerCase();
            
            if (autor.includes(destino.toLowerCase())) {
                card.style.display = 'block';
                card.style.border = '2px solid #e63946';
                encontrados++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (encontrados === 0) {
            alert(`No se encontraron testimonios para ${destino}`);
            mostrarTodos();
        } else {
            alert(`Se encontraron ${encontrados} testimonio(s) para ${destino}`);
        }
    }

    function mostrarTodos() {
        const cards = document.querySelectorAll('.testimonial-card');
        
        cards.forEach(card => {
            card.style.display = 'block';
            card.style.border = 'none';
        });
        
        alert('Mostrando todos los testimonios');
    }

    function calcularCalificacion() {
        const testimonios = [
            { destino: 'París', calificacion: 5 },
            { destino: 'Machu Picchu', calificacion: 5 },
            { destino: 'Tokyo', calificacion: 5 },
            { destino: 'Nueva York', calificacion: 4 },
            { destino: 'Londres', calificacion: 5 },
            { destino: 'Roma', calificacion: 5 }
        ];
        
        const total = testimonios.reduce((sum, t) => sum + t.calificacion, 0);
        const promedio = (total / testimonios.length).toFixed(1);
        
        let reporte = `CALIFICACIONES POR DESTINO:\n\n`;
        
        testimonios.forEach(t => {
            reporte += `${t.destino}: ${'⭐'.repeat(t.calificacion)} (${t.calificacion}/5)\n`;
        });
        
        reporte += `\nCalificación promedio: ${promedio}/5 ⭐`;
        
        alert(reporte);
    }

    // Exponer funciones a window
    window.agregarTestimonio = agregarTestimonio;
    window.filtrarTestimonios = filtrarTestimonios;
    window.mostrarTodos = mostrarTodos;
    window.calcularCalificacion = calcularCalificacion;

    return {
        init: init
    };

})();

document.addEventListener('DOMContentLoaded', function() {
    App.Testimonios.init();
});