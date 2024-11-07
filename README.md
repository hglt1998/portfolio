# Mi Portafolio Personal

Este es un proyecto de portafolio personal desarrollado en **Next.js**. Con este proyecto pretendo mostrar mi experiencia y mis capacidades con nuevas tecnologías como NextJS 14. La aplicación incluye soporte para **modo claro y oscuro**, **responsividad**, y **soporte multilingüe** usando la biblioteca `next-intl` para internacionalización.

## Características

### 1. **Internacionalización (i18n)**
   - La aplicación utiliza `next-intl` para soporte multilingüe.
   - Actualmente incluye traducciones en español e inglés.
   - Los usuarios pueden cambiar entre los idiomas disponibles, y la aplicación mostrará los textos correctamente traducidos en toda la interfaz.

### 2. **Modo Claro y Oscuro**
   - Implementado usando `Tailwindcss`, permite a los usuarios alternar entre el modo claro y el modo oscuro según sus preferencias.
   - La configuración de tema seleccionada se guarda en el almacenamiento local para que se mantenga en futuras visitas.

### 3. **Responsividad**
   - La aplicación es completamente responsiva y se adapta a cualquier tamaño de pantalla, desde dispositivos móviles hasta pantallas de escritorio.
   - Los componentes de la interfaz están diseñados con `Tailwind CSS`, lo que facilita la creación de diseños responsivos y estilizados.

### 4. **Páginas Principales**
   - **Inicio**: Presenta una introducción, una sección de bienvenida, y gráficos que muestran mis habilidades y tecnologías dominadas.
   - **Sobre mí**: Incluye detalles sobre mi experiencia, educación y pasatiempos. La sección se divide en columnas para mostrar información personal (como fecha de nacimiento, ubicación, y una foto) junto con una biografía detallada.
   - **Habilidades y Tecnologías**: Muestra un resumen de las tecnologías que manejo y las herramientas que utilizo en mis proyectos. En lugar de gráficos, se utilizan etiquetas visuales que cambian de estilo en modo oscuro y claro.
   - **Proyectos**: Describe algunos de los proyectos en los que he trabajado. Cada proyecto incluye una breve descripción, tecnologías utilizadas y enlaces a demostraciones o repositorios en GitHub.
   - **Contacto**: Un formulario para que los visitantes puedan ponerse en contacto conmigo. Incluye campos de nombre, correo electrónico, asunto, mensaje, y botones de redes sociales como GitHub y LinkedIn.

### 5. **Formulario de Contacto**
   - Un formulario básico donde los usuarios pueden introducir su nombre, correo electrónico y mensaje.
   - Al enviar el formulario, aparece un mensaje de confirmación. **Nota**: La lógica de envío es manejada con nodemailer.

### 6. **Diseño y Estilos**
   - **Tailwind CSS**: Se utiliza `Tailwind CSS` para la estilización de la aplicación. Esto permite una personalización completa y la integración de temas oscuro y claro sin problemas.
   - **Estilo consistente**: Se mantiene una paleta de colores armoniosa y un estilo consistente en toda la aplicación.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para SSR (Server-Side Rendering) y generación de sitios estáticos.
- **next-intl**: Biblioteca para la internacionalización en Next.js, permite cambiar entre idiomas en tiempo real.
- **next-themes**: Biblioteca para la implementación de temas claros y oscuros.
- **Tailwind CSS**: Biblioteca de CSS para estilización rápida y responsive.
- **React Hooks**: Manejador del estado y eventos en el componente funcional.
- **TypeScript**: Tipado estático para JavaScript, ayuda a mantener el código escalable y menos propenso a errores.