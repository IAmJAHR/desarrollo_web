# Requirements Document - APF3 Mejoras Mundo Aventurero

## Introduction

Este documento define los requisitos para actualizar el proyecto "Mundo Aventurero" desde APF2 a APF3, implementando mejoras en estructura, estilos, componentes y responsive design según las especificaciones del curso.

## Requirements

### Requirement 1: Estructura del Proyecto APF3

**User Story:** Como desarrollador, quiero reorganizar la estructura del proyecto para cumplir con el formato APF3, de manera que el proyecto esté correctamente organizado y sea fácil de entregar.

#### Acceptance Criteria

1. WHEN se revise la estructura THEN el proyecto SHALL tener la carpeta principal nombrada "APF3_MundoAventurero"
2. WHEN se revise los archivos THEN SHALL existir el archivo "APF3_MundoAventurero.pptx" en la raíz
3. WHEN se revise la estructura interna THEN SHALL existir la carpeta "assets/scripts/" para JavaScript
4. WHEN se revise la organización THEN las páginas internas SHALL estar en "assets/pages/" en lugar de "pages/"
5. WHEN se prepare la entrega THEN SHALL existir un archivo ZIP "APF3_MundoAventurero.zip"

### Requirement 2: Variables CSS y Estilos Mejorados

**User Story:** Como desarrollador, quiero implementar variables CSS organizadas y FontAwesome, de manera que el código sea más mantenible y profesional.

#### Acceptance Criteria

1. WHEN se revise el CSS THEN SHALL existir variables CSS para toda la paleta de colores
2. WHEN se revise las tipografías THEN SHALL usar Google Fonts importadas con variables CSS
3. WHEN se revise los iconos THEN SHALL implementar FontAwesome obligatoriamente
4. WHEN se revise el diseño THEN SHALL tener márgenes y alineaciones consistentes
5. WHEN se compare con APF2 THEN SHALL tener adaptación visual personalizada mejorada
6. WHEN se busquen imágenes THEN SHALL usar imagen real de París, Francia desde internet

### Requirement 3: Componentes Obligatorios Faltantes

**User Story:** Como usuario, quiero que el sitio web tenga todos los componentes requeridos funcionando correctamente, de manera que cumpla con las especificaciones del APF3.

#### Acceptance Criteria

1. WHEN se navegue por el sitio THEN SHALL existir un botón flotante "Ir arriba" con scroll suave
2. WHEN se visite cualquier página THEN el favicon SHALL ser visible en todas las páginas
3. WHEN se revise el contenido THEN SHALL existir una sección dedicada de Redes Sociales
4. WHEN se haga clic en redes sociales THEN SHALL tener enlaces activos a Facebook, Instagram, LinkedIn y YouTube (no Twitter)
5. WHEN se revise la navegación THEN el logo SHALL estar enlazado al index.html
6. WHEN se revise las páginas internas THEN cada una SHALL tener sección de título con imagen de fondo
7. WHEN se haga clic en email THEN SHALL abrir cliente de correo con "mailto:contacto@mundoaventurero.com"
8. WHEN se haga clic en teléfono THEN SHALL abrir marcador con "tel:+51987654321"

### Requirement 4: Diseño Responsive Completo

**User Story:** Como usuario, quiero que el sitio web se adapte perfectamente a todos los dispositivos, de manera que tenga una experiencia óptima en móvil, tablet y desktop.

#### Acceptance Criteria

1. WHEN se visualice en móvil (≤576px) THEN SHALL adaptar tipografías, márgenes e imágenes
2. WHEN se visualice en tablet (≤768px) THEN SHALL mostrar menú hamburguesa funcional
3. WHEN se visualice en pantalla mediana (≤992px) THEN SHALL mantener layout apropiado
4. WHEN se visualice en pantalla grande (≤1200px) THEN SHALL optimizar el uso del espacio
5. WHEN se interactúe con menú móvil THEN SHALL mostrar/ocultar mediante JavaScript
6. WHEN se use en cualquier dispositivo THEN SHALL mantener claridad y accesibilidad

### Requirement 5: Menú Hamburguesa Responsive

**User Story:** Como usuario móvil, quiero un menú hamburguesa funcional, de manera que pueda navegar fácilmente en dispositivos pequeños.

#### Acceptance Criteria

1. WHEN el ancho sea ≤768px THEN el menú SHALL convertirse en hamburguesa
2. WHEN se haga clic en hamburguesa THEN SHALL mostrar/ocultar el menú con animación
3. WHEN se muestre el menú móvil THEN SHALL mantener todos los enlaces funcionales
4. WHEN se navegue en móvil THEN SHALL cerrar automáticamente al seleccionar enlace
5. WHEN se use el menú THEN SHALL tener indicadores visuales claros del estado

### Requirement 6: Mejoras de JavaScript y Interactividad

**User Story:** Como usuario, quiero interacciones suaves y funcionales en el sitio web, de manera que la experiencia sea moderna y profesional.

#### Acceptance Criteria

1. WHEN se haga scroll THEN SHALL existir botón flotante "Ir arriba" visible
2. WHEN se haga clic en "Ir arriba" THEN SHALL desplazarse suavemente al top
3. WHEN se navegue en móvil THEN el menú hamburguesa SHALL funcionar correctamente
4. WHEN se cargue la página THEN todas las animaciones SHALL ser suaves
5. WHEN se interactúe con elementos THEN SHALL tener feedback visual apropiado

### Requirement 7: Optimización y Performance

**User Story:** Como usuario, quiero que el sitio web cargue rápidamente y funcione de manera eficiente, de manera que tenga una experiencia fluida.

#### Acceptance Criteria

1. WHEN se cargue el sitio THEN las imágenes SHALL estar optimizadas para web
2. WHEN se use FontAwesome THEN SHALL cargar solo los iconos necesarios
3. WHEN se ejecute JavaScript THEN SHALL ser eficiente y sin errores
4. WHEN se navegue THEN las transiciones SHALL ser suaves sin lag
5. WHEN se valide el código THEN SHALL cumplir con estándares web

### Requirement 8: Documentación y Entrega

**User Story:** Como evaluador, quiero documentación clara y estructura de entrega correcta, de manera que pueda revisar y calificar el proyecto fácilmente.

#### Acceptance Criteria

1. WHEN se revise la documentación THEN SHALL existir README actualizado para APF3
2. WHEN se revise la presentación THEN SHALL existir APF3_MundoAventurero.pptx
3. WHEN se entregue el proyecto THEN SHALL estar en formato ZIP correcto
4. WHEN se revise el código THEN SHALL tener comentarios explicativos
5. WHEN se evalúe THEN SHALL cumplir 100% de los requisitos APF3
### 
Requirement 9: Enlaces Funcionales de Contacto

**User Story:** Como usuario, quiero poder contactar directamente desde el sitio web, de manera que pueda enviar emails o hacer llamadas con un solo clic.

#### Acceptance Criteria

1. WHEN se haga clic en "📧 contacto@mundoaventurero.com" THEN SHALL abrir cliente de correo con mailto
2. WHEN se haga clic en "📞 +51 987 654 321" THEN SHALL abrir marcador telefónico con tel
3. WHEN se revisen los enlaces THEN SHALL funcionar en todos los dispositivos
4. WHEN se prueben los enlaces THEN SHALL tener formato correcto sin espacios
5. WHEN se navegue THEN los enlaces SHALL estar visibles en barra superior

### Requirement 10: Redes Sociales Actualizadas

**User Story:** Como usuario, quiero acceder a las redes sociales correctas de la agencia, de manera que pueda seguir sus actualizaciones en las plataformas apropiadas.

#### Acceptance Criteria

1. WHEN se revisen las redes sociales THEN SHALL incluir Facebook, Instagram, LinkedIn y YouTube
2. WHEN se haga clic en Facebook THEN SHALL llevar a página principal de Facebook
3. WHEN se haga clic en Instagram THEN SHALL llevar a página principal de Instagram  
4. WHEN se haga clic en LinkedIn THEN SHALL llevar a página principal de LinkedIn
5. WHEN se haga clic en YouTube THEN SHALL llevar a página principal de YouTube
6. WHEN se revise Twitter THEN NO SHALL existir (eliminado según instrucciones)

### Requirement 11: Cumplimiento Estricto APF3

**User Story:** Como evaluador, quiero que el proyecto cumpla exactamente con las especificaciones APF3, de manera que pueda ser calificado correctamente.

#### Acceptance Criteria

1. WHEN se revise el proyecto THEN SHALL ser original y personalizado (no clon de plantilla)
2. WHEN se evalúe el código THEN SHALL usar solo HTML5, CSS3 y JavaScript vanilla
3. WHEN se revise la estructura THEN SHALL mantener base APF2 con mejoras APF3
4. WHEN se entregue THEN SHALL incluir presentación PowerPoint APF3_MundoAventurero.pptx
5. WHEN se valide THEN SHALL demostrar dominio completo de tecnologías web