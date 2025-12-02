App.Paquetes = (function() {
    
    function init() {
        setupReservas();
    }

    function setupReservas() {
        const botonesReserva = document.querySelectorAll('button');
        botonesReserva.forEach(boton => {
            if (boton.textContent.includes('Reservar')) {
                boton.addEventListener('click', handleReserva);
            }
        });
    }

    function handleReserva() {
        const fila = this.closest('tr');
        const paquete = fila.querySelector('td').textContent;
        const precio = fila.querySelectorAll('td')[2].textContent;
        
        if(confirm(`¿Deseas reservar el ${paquete}?\nPrecio: ${precio}`)) {
            const nombre = prompt('Ingresa tu nombre completo:');
            
            if (App.Utils.validarTexto(nombre, 3)) {
                const email = prompt('Ingresa tu email:');
                
                if (App.Utils.validarEmail(email)) {
                    alert(`¡Reserva confirmada!\nPaquete: ${paquete}\nNombre: ${nombre}\nEmail: ${email}\n\nTe contactaremos pronto para confirmar los detalles.`);
                } else {
                    alert('Email inválido. Reserva cancelada.');
                }
            } else {
                alert('Nombre inválido. Reserva cancelada.');
            }
        }
    }

    function compararPaquetes() {
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

    function calcularDescuento() {
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

    function filtrarPorPrecio() {
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

    // Exponer funciones a window
    window.compararPaquetes = compararPaquetes;
    window.calcularDescuento = calcularDescuento;
    window.filtrarPorPrecio = filtrarPorPrecio;

    return {
        init: init
    };

})();

document.addEventListener('DOMContentLoaded', function() {
    App.Paquetes.init();
});