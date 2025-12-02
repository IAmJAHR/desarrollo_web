/**
 * App Core - Patrón Módulo & Namespace
 * Centraliza la lógica común y utilidades del sitio.
 */
const App = (function() {
    
    // --- Módulo de Utilidades (Validaciones, Storage) ---
    // [Lógica] Objeto con funciones puras para validar y guardar datos
    const Utils = {
        validarEmail: function(email) {
            return email.includes('@') && email.includes('.');
        },
        
        validarTexto: function(texto, minLength = 2) {
            return texto && texto.length >= minLength;
        },
        
        Storage: {
            get: function(key, defaultValue = null) {
                const val = localStorage.getItem(key);
                return val ? JSON.parse(val) : defaultValue;
            },
            set: function(key, value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        }
    };

    // --- Módulo de UI (Interfaz de Usuario Común) ---
    const UI = {
        // Inicializa toda la UI común (menú, scroll, animaciones)
        init: function() {
            this.setupMenu();
            this.setupScroll();
            this.setupAnimations();
        },

        setupMenu: function() {
            // [DOM] Selección de elementos del HTML
            const menuToggle = document.querySelector('.menu-toggle');
            const navMenu = document.querySelector('.nav-menu');
            const header = document.querySelector('header');
            let menuAbierto = false;

            if (!menuToggle || !navMenu) return;

            const toggle = () => {
                menuAbierto = !menuAbierto;
                if (menuAbierto) {
                    // [DOM] Modificar clases CSS para mostrar menú
                    navMenu.classList.add('active');
                    // [DOM] Cambiar contenido HTML interno (ícono)
                    menuToggle.innerHTML = '<i class="fas fa-times"></i>';
                } else {
                    navMenu.classList.remove('active');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            };

            // [Evento] Escuchar clic en el botón
            menuToggle.addEventListener('click', toggle);

            // Cerrar al hacer click en enlaces
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    if (menuAbierto) toggle();
                });
            });

            // Cerrar al hacer click fuera
            document.addEventListener('click', (e) => {
                if (header && !header.contains(e.target) && menuAbierto) {
                    toggle();
                }
            });
        },

        setupScroll: function() {
            const header = document.querySelector('header');
            const scrollTopBtn = document.getElementById('scroll-to-top');

            // [Evento] Detectar scroll de la ventana
            window.addEventListener('scroll', () => {
                const scrollPos = window.scrollY;

                // Sticky Header
                if (header) {
                    // [DOM] Agregar/Quitar clase sticky
                    if (scrollPos > 100) header.classList.add('sticky');
                    else header.classList.remove('sticky');
                }

                // Scroll Top Button
                if (scrollTopBtn) {
                    if (scrollPos > 150) scrollTopBtn.classList.add('visible');
                    else scrollTopBtn.classList.remove('visible');
                }
            });

            if (scrollTopBtn) {
                scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        },

        setupAnimations: function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            });

            document.querySelectorAll('.card, .testimonial-card').forEach(el => {
                observer.observe(el);
            });
        },
        
        // Helpers para modales
        abrirModal: function(id) {
            // [DOM] Buscar elemento por ID
            const modal = document.getElementById(id);
            if (modal) {
                // [DOM] Modificar estilo directo (CSS)
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        },

        cerrarModal: function(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    };

    // API Pública
    return {
        Utils: Utils,
        UI: UI
    };

})();

// Inicializar UI común cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    App.UI.init();
});
