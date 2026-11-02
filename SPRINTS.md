# Plan por sprints

Un sprint es una etapa corta con un objetivo, tareas y una forma concreta de comprobar que quedó terminada. Este plan reemplaza al anterior: el orden ahora sigue lo que más importa, que cualquier persona pueda abrir tu portafolio desde tu CV o LinkedIn, en tu propio dominio.

## Sprint 1 — Contenido y estructura (hecho)

- HTML semántico, comentado en español, con perfil, experiencia, proyectos, habilidades, formación y contacto.
- Contenido basado en el CV, sin métricas inventadas.

**Aceptación:** contenido disponible sin JavaScript, un solo `h1`, títulos jerárquicos y enlaces internos válidos.

## Sprint 2 — Diseño propio con mascotas (hecho, 1 nov 2026)

**Objetivo:** que la página se sienta personal, divertida y con identidad propia.

- Azul marino con acentos celeste, turquesa, ámbar y acero; tipografías Space Grotesk y DM Sans.
- Textos en primera persona: "Hola, soy Junior", tarjeta "Ahora mismo", "Cosas que he construido", "¿Conversamos?".
- **Bitbots:** robotitos que caminan, saltan al tocarlos y dicen frases de redes; chispas al hacer clic; un robot asoma en la esquina al descargar el CV, copiar el correo o abrir un proyecto.
- Botón para pausar los robots (guardado en el navegador) y respeto de "movimiento reducido".
- Nueva imagen para compartir, icono y página 404 con robot.

**Verificado:** sin desplazamiento horizontal de 320 a 1440 px, todo el texto cumple el contraste WCAG AA, el menú móvil abre y cierra con clic y con Escape, y con movimiento reducido los robots quedan quietos y visibles.

## Sprint 3 — Tus proyectos reales (hecho, 1 nov 2026)

- Tarjetas para Detector de cortes masivos, AgroChupaca, Mi Nube y Central 105, con problema, solución y tecnologías.
- Los repositorios son privados; la página ofrece mostrarlos en una entrevista.

## Sprint 4 — Código en GitHub (hecho, 1 nov 2026)

| Repositorio | Visibilidad | Cuidado aplicado |
| --- | --- | --- |
| `juniorlazoc-develop.github.io` | Público | Sin datos sensibles |
| `agrochupaca` | Privado | Se quitaron la contraseña de PostgreSQL y la clave de Django de `.env.example` |
| `cortes-web` | Privado | Capturas reales de la OLT e imágenes de la empresa fuera del repositorio; sus pruebas se omiten si faltan |
| `mi-nube` | Privado | Ya existía; la base de datos y la clave están en `.gitignore` |

## Sprint 5 — Publicación en GitHub Pages (hecho, 1 nov 2026)

- Sitio en https://juniorlazoc-develop.github.io/, sin depender de ChatGPT ni de otra herramienta.
- Cada cambio subido a GitHub se publica solo.
- Actualizar el CV: reemplazar el PDF desde la web de GitHub (`ACTUALIZAR-CV.md`).

**Aceptación:** la página, los estilos, el JavaScript, el CV y la imagen para compartir responden sin iniciar sesión.

## Sprint 6 — Dominio propio (pendiente: requiere tu compra)

1. Comprar el dominio (`DOMINIO.md`, sección 2).
2. Crear los registros DNS y configurarlo en GitHub Pages (sección 3).
3. Activar HTTPS y actualizar las direcciones en `index.html`, `robots.txt` y `sitemap.xml`.
4. Cambiar el enlace en el CV y en LinkedIn.

**Aceptación:** `https://tu-dominio` carga con candado, `www.tu-dominio` redirige al mismo sitio y la vista previa de LinkedIn muestra la imagen.

## Ideas para después

- Capturas de pantalla de los proyectos (con datos de prueba, nunca reales).
- Hacer público algún repositorio limpio para que los reclutadores vean tu código.
- Versión en inglés del portafolio.

Cada sprint nuevo define objetivo, archivos afectados, datos necesarios y pruebas de aceptación antes de empezar.
