
App.Contacto = (function() {
    
    function init() {
        setupForm();
    }

    function setupForm() {
        // [DOM] Selección del formulario
        const formulario = document.querySelector('.contact-form');
        if (formulario) {
            // [Evento] Escuchar el envío del formulario
            formulario.addEventListener('submit', handleFormSubmit);
        }
    }

    function handleFormSubmit(e) {
        // [DOM] Prevenir el comportamiento por defecto (recarga de página)
        e.preventDefault();
        
        // [DOM] Obtener valores de los campos
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // [Lógica] Validaciones
        if (!App.Utils.validarTexto(nombre, 2)) {
            alert('El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        if (!App.Utils.validarTexto(apellido, 2)) {
            alert('El apellido debe tener al menos 2 caracteres');
            return false;
        }
        
        if (!App.Utils.validarEmail(email)) {
            alert('Por favor ingresa un email válido');
            return false;
        }
        
        if (!App.Utils.validarTexto(mensaje, 10)) {
            alert('El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        
        // [BOM] Confirmación
        if (confirm('¿Deseas enviar el formulario de contacto?')) {
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado. Te contactaremos pronto.`);
            // [DOM] Limpiar formulario
            e.target.reset();
        }
    }

    function calcularPresupuesto() {
        // [BOM] Prompt para entrada
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
        
        // [Lógica] Cálculo matemático
        const costoPorDia = 100; // USD por persona por día
        const total = costoPorDia * parseInt(dias) * parseInt(personas);
        
        alert(`Presupuesto estimado para ${destino}:\n${dias} días para ${personas} persona(s)\nTotal aproximado: $${total} USD`);
    }

    function mostrarOficina(ciudad) {
        // [Lógica] Datos estáticos (simulando base de datos)
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

    // Exponer funciones a window
    window.calcularPresupuesto = calcularPresupuesto;
    window.mostrarOficina = mostrarOficina;

    return {
        init: init
    };

})();

document.addEventListener('DOMContentLoaded', function() {
    App.Contacto.init();
});