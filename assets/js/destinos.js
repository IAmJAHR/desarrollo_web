// Funcionalidad página destinos
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos DOM
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    let scrollPosition = 0;
    let menuAbierto = false;

    // Navbar fijo
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

    // Galería interactiva
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const destino = this.querySelector('h3').textContent;
            const confirmacion = confirm(`¿Te interesa conocer más sobre ${destino}?`);
            
            if (confirmacion) {
                alert(`¡Excelente! Pronto tendremos más información sobre ${destino}`);
            }
        });
    });

    // Filtro por continente
    window.filtrarPorContinente = function(continente) {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            let mostrar = false;
            
            switch(continente) {
                case 'europa':
                    mostrar = titulo.includes('parís') || titulo.includes('londres') || titulo.includes('roma');
                    break;
                case 'america':
                    mostrar = titulo.includes('nueva york') || titulo.includes('machu picchu');
                    break;
                case 'asia':
                    mostrar = titulo.includes('tokio');
                    break;
                default:
                    mostrar = true;
            }
            
            card.style.display = mostrar ? 'block' : 'none';
        });
    }

    // Animaciones
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    });
    
    const elementosAnimados = document.querySelectorAll('.card');
    elementosAnimados.forEach(elemento => {
        observador.observe(elemento);
    });
});