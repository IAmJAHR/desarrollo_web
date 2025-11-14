# Design Document - APF3 Mejoras Mundo Aventurero

## Overview

Este documento describe el diseño técnico para actualizar "Mundo Aventurero" de APF2 a APF3, implementando todos los componentes obligatorios, mejoras de responsive design, y optimizaciones requeridas por las especificaciones del curso.

## Architecture

### Estructura de Archivos APF3
```
APF3_MundoAventurero/
├── index.html                          # Página principal
├── APF3_MundoAventurero.pptx          # Presentación del proyecto
├── assets/
│   ├── css/
│   │   └── styles.css                  # Estilos principales con variables CSS
│   ├── img/                           # Imágenes optimizadas
│   │   ├── paris-real.jpg             # Nueva imagen de París desde internet
│   │   └── ...                        # Otras imágenes
│   ├── video/                         # Videos multimedia
│   │   └── video_final.mp4            # Video MP4 existente
│   ├── scripts/                       # JavaScript organizado
│   │   ├── main.js                    # Funcionalidades principales
│   │   ├── menu.js                    # Menú hamburguesa
│   │   └── scroll.js                  # Botón "Ir arriba"
│   └── pages/                         # Páginas internas (movidas desde /pages/)
│       ├── destinos.html
│       ├── paquetes.html
│       ├── testimonios.html
│       └── contacto.html
```

## Components and Interfaces

### 1. Variables CSS Organizadas

#### Paleta de Colores
```css
:root {
    /* Colores principales */
    --color-primario: #005f8a;
    --color-secundario: #e63946;
    --color-blanco: #ffffff;
    --color-gris-claro: #f8f9fa;
    --color-gris-medio: #6c757d;
    --color-gris-oscuro: #2b2d42;
    --color-negro: #000000;
    
    /* Colores de estado */
    --color-exito: #28a745;
    --color-advertencia: #ffc107;
    --color-error: #dc3545;
    --color-info: #17a2b8;
    
    /* Transparencias */
    --overlay-oscuro: rgba(0, 0, 0, 0.7);
    --overlay-claro: rgba(255, 255, 255, 0.9);
}
```

#### Tipografías
```css
:root {
    /* Fuentes importadas de Google Fonts */
    --fuente-titulos: 'Montserrat', sans-serif;
    --fuente-cuerpo: 'Lato', sans-serif;
    --fuente-codigo: 'Roboto Mono', monospace;
    
    /* Tamaños de fuente */
    --texto-xs: 0.75rem;
    --texto-sm: 0.875rem;
    --texto-base: 1rem;
    --texto-lg: 1.125rem;
    --texto-xl: 1.25rem;
    --texto-2xl: 1.5rem;
    --texto-3xl: 1.875rem;
    --texto-4xl: 2.25rem;
    
    /* Espaciado */
    --espaciado-xs: 0.25rem;
    --espaciado-sm: 0.5rem;
    --espaciado-md: 1rem;
    --espaciado-lg: 1.5rem;
    --espaciado-xl: 2rem;
    --espaciado-2xl: 3rem;
}
```

### 2. FontAwesome Integration

#### CDN Implementation
```html
<!-- En el <head> de todas las páginas -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

#### Iconos Reemplazados
- **Email**: `<i class="fas fa-envelope"></i>`
- **Teléfono**: `<i class="fas fa-phone"></i>`
- **Facebook**: `<i class="fab fa-facebook-f"></i>`
- **Instagram**: `<i class="fab fa-instagram"></i>`
- **LinkedIn**: `<i class="fab fa-linkedin-in"></i>`
- **YouTube**: `<i class="fab fa-youtube"></i>`
- **Menú hamburguesa**: `<i class="fas fa-bars"></i>`
- **Cerrar**: `<i class="fas fa-times"></i>`
- **Flecha arriba**: `<i class="fas fa-chevron-up"></i>`

### 3. Menú Hamburguesa Responsive

#### HTML Structure
```html
<header>
    <div class="logo">
        <a href="index.html">Mundo Aventurero</a>
    </div>
    <button class="menu-toggle" aria-label="Abrir menú">
        <i class="fas fa-bars"></i>
    </button>
    <nav class="nav-menu">
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="assets/pages/destinos.html">Destinos</a></li>
            <li><a href="assets/pages/paquetes.html">Paquetes</a></li>
            <li><a href="assets/pages/testimonios.html">Testimonios</a></li>
            <li><a href="assets/pages/contacto.html">Contacto</a></li>
        </ul>
    </nav>
</header>
```

#### CSS Responsive Behavior
```css
/* Desktop: menú normal */
@media (min-width: 769px) {
    .menu-toggle { display: none; }
    .nav-menu { display: flex; }
}

/* Mobile: menú hamburguesa */
@media (max-width: 768px) {
    .menu-toggle { display: block; }
    .nav-menu { 
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--color-primario);
    }
    .nav-menu.active { display: block; }
}
```

### 4. Botón Flotante "Ir Arriba"

#### HTML Structure
```html
<button id="scroll-to-top" class="scroll-top-btn" aria-label="Ir arriba">
    <i class="fas fa-chevron-up"></i>
</button>
```

#### CSS Styling
```css
.scroll-top-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--color-secundario);
    color: var(--color-blanco);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-top-btn.visible {
    opacity: 1;
    visibility: visible;
}
```

### 5. Enlaces Funcionales de Contacto

#### Email Clickeable
```html
<a href="mailto:contacto@mundoaventurero.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    contacto@mundoaventurero.com
</a>
```

#### Teléfono Clickeable
```html
<a href="tel:+51987654321" class="contact-link">
    <i class="fas fa-phone"></i>
    +51 987 654 321
</a>
```

### 6. Sección de Redes Sociales Mejorada

#### HTML Structure (en página de contacto)
```html
<section class="redes-sociales">
    <h2>Síguenos en Redes Sociales</h2>
    <div class="social-grid">
        <a href="https://facebook.com" target="_blank" class="social-card facebook">
            <i class="fab fa-facebook-f"></i>
            <span>Facebook</span>
        </a>
        <a href="https://instagram.com" target="_blank" class="social-card instagram">
            <i class="fab fa-instagram"></i>
            <span>Instagram</span>
        </a>
        <a href="https://linkedin.com" target="_blank" class="social-card linkedin">
            <i class="fab fa-linkedin-in"></i>
            <span>LinkedIn</span>
        </a>
        <a href="https://youtube.com" target="_blank" class="social-card youtube">
            <i class="fab fa-youtube"></i>
            <span>YouTube</span>
        </a>
    </div>
</section>
```

## Data Models

### Responsive Breakpoints
```css
/* Móvil */
@media (max-width: 576px) {
    /* Estilos para móviles pequeños */
}

/* Tableta */
@media (max-width: 768px) {
    /* Estilos para tabletas y móviles grandes */
}

/* Pantalla mediana */
@media (max-width: 992px) {
    /* Estilos para laptops pequeñas */
}

/* Pantalla grande */
@media (max-width: 1200px) {
    /* Estilos para desktops */
}

/* Pantalla extra grande */
@media (min-width: 1201px) {
    /* Estilos para pantallas grandes */
}
```

### JavaScript Modules Structure
```javascript
// assets/scripts/main.js - Inicialización principal
// assets/scripts/menu.js - Funcionalidad del menú hamburguesa
// assets/scripts/scroll.js - Botón "Ir arriba" y scroll suave
```

## Error Handling

### JavaScript Error Prevention
- Verificar existencia de elementos DOM antes de manipularlos
- Usar try-catch para operaciones críticas
- Fallbacks para funcionalidades no soportadas

### CSS Fallbacks
- Propiedades CSS con prefijos de navegador
- Fallbacks para variables CSS no soportadas
- Graceful degradation para animaciones

## Testing Strategy

### Responsive Testing
1. **Móvil (≤576px)**: iPhone SE, Galaxy S8
2. **Tableta (≤768px)**: iPad, Galaxy Tab
3. **Pantalla mediana (≤992px)**: Laptop 13"
4. **Pantalla grande (≤1200px)**: Desktop 1080p
5. **Extra grande (>1200px)**: Desktop 4K

### Functionality Testing
- Menú hamburguesa en todos los breakpoints
- Botón "Ir arriba" funcionalidad y visibilidad
- Enlaces de contacto (mailto y tel)
- Navegación entre páginas
- Validaciones de formulario

### Cross-browser Testing
- Chrome (último)
- Firefox (último)
- Safari (último)
- Edge (último)

### Performance Testing
- Tiempo de carga < 3 segundos
- Optimización de imágenes
- Minificación de CSS/JS
- Lazy loading donde sea apropiado

## Implementation Plan

### Phase 1: Estructura y Organización
1. Reorganizar carpetas según estructura APF3
2. Mover páginas a assets/pages/
3. Crear carpeta assets/scripts/
4. Actualizar todas las rutas de enlaces

### Phase 2: Variables CSS y FontAwesome
1. Implementar variables CSS organizadas
2. Integrar FontAwesome CDN
3. Reemplazar todos los SVG por iconos FontAwesome
4. Optimizar Google Fonts

### Phase 3: Componentes JavaScript
1. Crear menú hamburguesa funcional
2. Implementar botón "Ir arriba"
3. Agregar scroll suave
4. Optimizar interacciones

### Phase 4: Responsive Design
1. Implementar 4 breakpoints específicos
2. Adaptar todos los componentes
3. Optimizar tipografías y espaciado
4. Testing en múltiples dispositivos

### Phase 5: Enlaces y Redes Sociales
1. Hacer clickeables email y teléfono
2. Actualizar redes sociales (eliminar Twitter)
3. Crear sección dedicada de redes sociales
4. Optimizar enlaces externos

### Phase 6: Optimización Final
1. Validar código HTML/CSS
2. Optimizar performance
3. Testing cross-browser
4. Crear presentación PowerPoint
5. Preparar entrega ZIP