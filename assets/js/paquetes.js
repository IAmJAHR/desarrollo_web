// Funcionalidad página paquetes
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

    // Reserva de paquetes
    const botonesReserva = document.querySelectorAll('button');
    
    botonesReserva.forEach(boton => {
        if (boton.textContent.includes('Reservar')) {
            boton.addEventListener('click', function() {
                const fila = this.closest('tr');
                const paquete = fila.querySelector('td').textContent;
                const precio = fila.querySelectorAll('td')[2].textContent;
                
                const confirmacion = confirm(`¿Deseas reservar el ${paquete}?\nPrecio: ${precio}`);
                
                if (confirmacion) {
                    const nombre = prompt('Ingresa tu nombre completo:');
                    
                    if (nombre && nombre.length > 2) {
                        const email = prompt('Ingresa tu email:');
                        
                        if (email && email.includes('@')) {
                            alert(`¡Reserva confirmada!\nPaquete: ${paquete}\nNombre: ${nombre}\nEmail: ${email}\n\nTe contactaremos pronto para confirmar los detalles.`);
                        } else {
                            alert('Email inválido. Reserva cancelada.');
                        }
                    } else {
                        alert('Nombre inválido. Reserva cancelada.');
                    }
                }
            });
        }
    });

    // Comparador de paquetes
    window.compararPaquetes = function() {
        const paquetes = [
            { nombre: 'Europa', precio: 1500, dias: 10 },
            { nombre: 'Asia', precio: 1800, dias: 12 },
            { nombre: 'Sudamérica', precio: 900, dias: 7 }
        ];
        
        let comparacion = 'COMPARACIÓN DE PAQUETES:\n\n';
        
        paquetes.forEach(paquete => {
            const precioPorDia = (paquete.precio / paquete.dias).toFixed(0);
            comparacion += `${paquete.nombre}: $${paquete.precio} (${paquete.dias} días) - $${precioPorDia}/día\n`;
        });
        
        alert(comparacion);
    }

    // Calculadora de descuentos
    window.calcularDescuento = function() {
        const personas = prompt('¿Cuántas personas viajarán?');
        
        if (personas === null || isNaN(personas) || personas <= 0) {
            alert('Número de personas inválido');
            return;
        }
        
        let descuento = 0;
        
        if (personas >= 4) {
            descuento = 15;
        } else if (personas >= 2) {
            descuento = 10;
        }
        
        if (descuento > 0) {
            alert(`¡Felicidades! Por viajar ${personas} personas obtienes ${descuento}% de descuento en cualquier paquete.`);
        } else {
            alert('Para obtener descuentos, viaja con 2 o más personas.');
        }
    }

    // Filtro por precio
    window.filtrarPorPrecio = function() {
        const presupuesto = prompt('¿Cuál es tu presupuesto máximo? (en USD)');
        
        if (presupuesto === null || isNaN(presupuesto)) {
            alert('Presupuesto inválido');
            return;
        }
        
        const filas = document.querySelectorAll('tbody tr');
        let paquetesDisponibles = [];
        
        filas.forEach(fila => {
            const precio = parseInt(fila.querySelectorAll('td')[2].textContent.replace('$', '').replace(',', ''));
            const paquete = fila.querySelector('td').textContent;
            
            if (precio <= parseInt(presupuesto)) {
                paquetesDisponibles.push(`${paquete}: $${precio}`);
            }
        });
        
        if (paquetesDisponibles.length > 0) {
            alert(`Paquetes dentro de tu presupuesto:\n\n${paquetesDisponibles.join('\n')}`);
        } else {
            alert('No hay paquetes disponibles dentro de tu presupuesto. Te recomendamos ahorrar un poco más.');
        }
    }
});