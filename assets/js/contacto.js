// Funcionalidad página contacto
document.addEventListener('DOMContentLoaded', function () {

    // Elementos DOM
    const scrollTopBtn = document.getElementById('scroll-to-top');
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    let scrollPosition = 0;
    let menuAbierto = false;

    // Navbar sticky al hacer scroll
    window.addEventListener('scroll', function () {
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
    scrollTopBtn.addEventListener('click', function () {
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
        link.addEventListener('click', function () {
            if (menuAbierto) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function (event) {
        if (!header.contains(event.target) && menuAbierto) {
            toggleMenu();
        }
    });

    // Validación formulario
    const formulario = document.querySelector('.contact-form');

    if (formulario) {
        formulario.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validar campos
            if (nombre.length < 2) {
                alert('El nombre debe tener al menos 2 caracteres');
                return false;
            }

            if (apellido.length < 2) {
                alert('El apellido debe tener al menos 2 caracteres');
                return false;
            }

            if (!email.includes('@') || !email.includes('.')) {
                alert('Por favor ingresa un email válido');
                return false;
            }

            if (mensaje.length < 10) {
                alert('El mensaje debe tener al menos 10 caracteres');
                return false;
            }

            // Confirmar envío
            const confirmacion = confirm('¿Deseas enviar el formulario de contacto?');

            if (confirmacion) {
                alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
                formulario.reset();
            }
        });
    }

    // Calculadora de presupuesto
    window.calcularPresupuesto = function () {
        const destino = prompt('¿A qué destino quieres viajar?');

        if (destino === null) return;

        const dias = prompt('¿Cuántos días planeas viajar?');

        if (dias === null || isNaN(dias) || dias <= 0) {
            alert('Por favor ingresa un número válido de días');
            return;
        }

        const personas = prompt('¿Cuántas personas viajarán?');

        if (personas === null || isNaN(personas) || personas <= 0) {
            alert('Por favor ingresa un número válido de personas');
            return;
        }

        // Cálculo básico
        const costoPorDia = 100; // USD por persona por día
        const total = costoPorDia * parseInt(dias) * parseInt(personas);

        alert(`Presupuesto estimado para ${destino}:\n${dias} días para ${personas} persona(s)\nTotal aproximado: $${total} USD`);
    }

    // Ubicación oficinas
    window.mostrarOficina = function (ciudad) {
        const oficinas = {
            'lima': 'Av. Larco 123, Miraflores, Lima',
            'cusco': 'Plaza de Armas 456, Cusco',
            'arequipa': 'Calle Mercaderes 789, Arequipa'
        };

        if (oficinas[ciudad]) {
            alert(`Oficina en ${ciudad.charAt(0).toUpperCase() + ciudad.slice(1)}:\n${oficinas[ciudad]}`);
        } else {
            alert('Oficina no encontrada');
        }
    }
});