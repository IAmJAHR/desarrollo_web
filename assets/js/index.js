// Funcionalidad página principal
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos DOM
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    let scrollPosition = 0;
    let menuAbierto = false;

    // Navbar fijo al hacer scroll
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

    // Botón ir arriba
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Menú móvil
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

    // Cerrar menú al hacer clic
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

    // Modal de reserva
    window.abrirModal = function() {
        const modal = document.getElementById('modal-reserva');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    window.cerrarModal = function() {
        const modal = document.getElementById('modal-reserva');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-reserva');
        if (event.target === modal) {
            cerrarModal();
        }
    });

    // Validación formulario
    window.procesarReserva = function() {
        const nombre = document.getElementById('nombre-reserva').value;
        const email = document.getElementById('email-reserva').value;
        const destino = document.getElementById('destino-reserva').value;
        
        if (nombre.length < 2) {
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        if (!email.includes('@')) {
            alert('Por favor ingresa un email válido');
            return false;
        }
        
        if (destino === '') {
            alert('Por favor selecciona un destino');
            return false;
        }
        
        const confirmacion = confirm(`¿Confirmas tu reserva para ${destino}?`);
        
        if (confirmacion) {
            alert(`¡Gracias ${nombre}! Tu reserva ha sido procesada. Te contactaremos a ${email}`);
            cerrarModal();
            document.getElementById('form-reserva').reset();
        }
        
        return false;
    }

    // Calculadora de precios
    window.calcularPrecio = function() {
        const destino = prompt('Ingresa el destino (Paris, Tokyo, NewYork, Machu):');
        
        if (destino === null) return;
        
        const precios = {
            'paris': 1500,
            'tokyo': 1800,
            'newyork': 1200,
            'machu': 900
        };
        
        const destinoLower = destino.toLowerCase();
        
        if (precios[destinoLower]) {
            const personas = prompt('¿Para cuántas personas?');
            
            if (personas && !isNaN(personas) && personas > 0) {
                const total = precios[destinoLower] * parseInt(personas);
                alert(`El precio total para ${personas} persona(s) a ${destino} es: $${total}`);
            } else {
                alert('Por favor ingresa un número válido de personas');
            }
        } else {
            alert('Destino no encontrado. Opciones: Paris, Tokyo, NewYork, Machu');
        }
    }

    // Filtro de destinos
    window.filtrarDestinos = function() {
        const filtro = document.getElementById('filtro-destinos').value.toLowerCase();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            
            if (titulo.includes(filtro) || filtro === '') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Contador de visitas
    function contarVisitas() {
        let visitas = localStorage.getItem('visitas');
        
        if (visitas === null) {
            visitas = 0;
        }
        
        visitas = parseInt(visitas) + 1;
        localStorage.setItem('visitas', visitas);
        
        const contadorElement = document.getElementById('contador-visitas');
        if (contadorElement) {
            contadorElement.innerHTML = `Visitas: ${visitas}`;
        }
    }

    // Inicializar
    contarVisitas();

    // Animaciones de scroll
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    const elementosAnimados = document.querySelectorAll('.card, .testimonial-card');
    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });
});