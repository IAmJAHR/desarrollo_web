/**
 * Funcionalidad específica de la página de Inicio
 * Utiliza App.UI y App.Utils del core.
 */
App.Home = (function() {
    
    // --- Lógica de Negocio (Precios, Visitas) ---
    const Business = {
        precios: {
            'paris': 1500,
            'tokyo': 1800,
            'newyork': 1200,
            'machu': 900
        },

        calcularPrecio: function(destino, personas) {
            const destinoLower = destino.toLowerCase();
            if (this.precios[destinoLower]) {
                return this.precios[destinoLower] * parseInt(personas);
            }
            return null;
        },

        gestionarVisitas: function() {
            // [Lógica] Recuperar y guardar datos en localStorage
            let visitas = App.Utils.Storage.get('visitas', 0);
            visitas = parseInt(visitas) + 1;
            App.Utils.Storage.set('visitas', visitas);
            
            // [DOM] Obtener elemento por ID para actualizar texto
            const contadorElement = document.getElementById('contador-visitas');
            if (contadorElement) {
                // [DOM] Modificar contenido HTML
                contadorElement.innerHTML = `Visitas: ${visitas}`;
            }
        }
    };

    // --- Funciones Públicas (Exposed to Window for HTML attributes) ---
    function init() {
        Business.gestionarVisitas();
    }

    function abrirModal() {
        // [Lógica] Llamada a función de UI compartida
        App.UI.abrirModal('modal-reserva');
    }

    function cerrarModal() {
        App.UI.cerrarModal('modal-reserva');
    }

    function procesarReserva() {
        // [DOM] Obtener valores de inputs del formulario
        const nombre = document.getElementById('nombre-reserva').value;
        const email = document.getElementById('email-reserva').value;
        const destino = document.getElementById('destino-reserva').value;
        
        // [Lógica] Validaciones usando utilidades
        if (!App.Utils.validarTexto(nombre, 2)) {
            // [BOM] Mostrar alerta del navegador
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        if (!App.Utils.validarEmail(email)) {
            alert('Por favor ingresa un email válido');
            return false;
        }
        
        if (destino === '') {
            alert('Por favor selecciona un destino');
            return false;
        }
        
        // [BOM] Confirmación nativa
        const confirmacion = confirm(`¿Confirmas tu reserva para ${destino}?`);
        
        if (confirmacion) {
            alert(`¡Gracias ${nombre}! Tu reserva ha sido procesada. Te contactaremos a ${email}`);
            cerrarModal();
            // [DOM] Resetear formulario
            document.getElementById('form-reserva').reset();
        }
        
        return false;
    }

    function calcularPrecio() {
        // [BOM] Prompt nativo para entrada de datos
        const destino = prompt('Ingresa el destino (Paris, Tokyo, NewYork, Machu):');
        if (destino === null) return;
        
        const personas = prompt('¿Para cuántas personas?');
        if (personas && !isNaN(personas) && personas > 0) {
            // [Lógica] Cálculo matemático
            const total = Business.calcularPrecio(destino, personas);
            if (total !== null) {
                alert(`El precio total para ${personas} persona(s) a ${destino} es: $${total}`);
            } else {
                alert('Destino no encontrado. Opciones: Paris, Tokyo, NewYork, Machu');
            }
        } else {
            alert('Por favor ingresa un número válido de personas');
        }
    }

    function filtrarDestinos() {
        // [DOM] Obtener valor del input de búsqueda
        const filtro = document.getElementById('filtro-destinos').value.toLowerCase();
        // [DOM] Seleccionar todas las tarjetas (NodeList)
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            // [DOM] Leer contenido de texto de un elemento hijo
            const titulo = card.querySelector('h3').textContent.toLowerCase();
            
            // [Lógica] Condición de filtrado
            if (titulo.includes(filtro) || filtro === '') {
                // [DOM] Mostrar elemento (modificar estilo CSS)
                card.style.display = 'block';
            } else {
                // [DOM] Ocultar elemento
                card.style.display = 'none';
            }
        });
    }

    // Exponer funciones al objeto global window para compatibilidad con HTML onclick
    window.abrirModal = abrirModal;
    window.cerrarModal = cerrarModal;
    window.procesarReserva = procesarReserva;
    window.calcularPrecio = calcularPrecio;
    window.filtrarDestinos = filtrarDestinos;

    return {
        init: init
    };

})();

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    App.Home.init();
});