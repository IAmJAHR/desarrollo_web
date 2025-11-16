// Funcionalidad página testimonios
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    let scrollPosition = 0;
    let menuAbierto = false;

    // Navbar sticky al hacer scroll
    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        if (scrollPosition > 150) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Botón "Ir arriba"
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menú hamburguesa
    function toggleMenu() {
        menuAbierto = !menuAbierto;
        
        if (menuAbierto) {
            navMenu.classList.add('active');
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en enlaces
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuAbierto) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!header.contains(event.target) && menuAbierto) {
            toggleMenu();
        }
    });

    // Interacción testimonios
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('click', function() {
            const autor = this.querySelector('.testimonial-author').textContent;
            const destino = autor.split('·')[1].trim();
            
            const respuesta = confirm(`¿Te interesa conocer más sobre ${destino}?`);
            
            if (respuesta) {
                alert(`¡Excelente elección! ${destino} es uno de nuestros destinos más populares. Te contactaremos con más información.`);
            }
        });
    });

    // Agregar testimonio
    window.agregarTestimonio = function() {
        const nombre = prompt('Ingresa tu nombre:');
        
        if (!nombre || nombre.length < 2) {
            alert('Nombre inválido');
            return;
        }
        
        const destino = prompt('¿A qué destino viajaste?');
        
        if (!destino || destino.length < 2) {
            alert('Destino inválido');
            return;
        }
        
        const comentario = prompt('Escribe tu testimonio (máximo 200 caracteres):');
        
        if (!comentario || comentario.length < 10) {
            alert('El testimonio debe tener al menos 10 caracteres');
            return;
        }
        
        if (comentario.length > 200) {
            alert('El testimonio es muy largo. Máximo 200 caracteres.');
            return;
        }
        
        const confirmacion = confirm(`¿Deseas publicar tu testimonio?\n\nNombre: ${nombre}\nDestino: ${destino}\nComentario: ${comentario}`);
        
        if (confirmacion) {
            alert('¡Gracias por tu testimonio! Será revisado y publicado pronto.');
        }
    }

    // Filtrar por destino
    window.filtrarTestimonios = function() {
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
            // Mostrar todos de nuevo
            cards.forEach(card => {
                card.style.display = 'block';
                card.style.border = 'none';
            });
        } else {
            alert(`Se encontraron ${encontrados} testimonio(s) para ${destino}`);
        }
    }

    // Mostrar todos
    window.mostrarTodos = function() {
        const cards = document.querySelectorAll('.testimonial-card');
        
        cards.forEach(card => {
            card.style.display = 'block';
            card.style.border = 'none';
        });
        
        alert('Mostrando todos los testimonios');
    }

    // Calificación promedio
    window.calcularCalificacion = function() {
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

    // Animaciones
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    const elementosAnimados = document.querySelectorAll('.testimonial-card');
    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });
});