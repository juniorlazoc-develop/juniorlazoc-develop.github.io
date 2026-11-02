# Portafolio de Junior Lazo

Sitio personal hecho con HTML, CSS y JavaScript puro. No necesita instalar paquetes ni compilar nada. Está publicado gratis con **GitHub Pages**: cada vez que subes un cambio a este repositorio, el sitio se actualiza solo en uno o dos minutos.

- Sitio: https://juniorlazoc-develop.github.io/ (cuando tengas dominio propio, será esa dirección; ver `DOMINIO.md`)
- Actualizar el CV: `ACTUALIZAR-CV.md`
- Plan de trabajo: `SPRINTS.md`

## 1. Verlo en tu PC

Abre `index.html` con doble clic. O, si tienes Python, sirve la carpeta:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

y abre `http://127.0.0.1:8000`. Detén el servidor con Ctrl+C.

## 2. Cómo están separados los archivos

```text
├── index.html            Contenido y estructura de la página
├── 404.html              Página para direcciones que no existen
├── robots.txt            Permiso para que Google lea el sitio
├── sitemap.xml           Lista de páginas para buscadores
├── css/
│   ├── base.css          Colores, tipografías y botones
│   ├── componentes.css   Diseño de cada sección
│   ├── mascotas.css      Robots (Bitbots), chispas y saludo flotante
│   └── adaptable.css     Tableta, móvil e impresión
├── js/
│   ├── navegacion.js     Menú móvil y sección activa
│   ├── animaciones.js    Aparición suave al desplazarse
│   ├── contacto.js       Botón para copiar el correo
│   ├── mascotas.js       Robots que caminan y animaciones al hacer clic
│   └── principal.js      Arranca las funciones anteriores
├── assets/
│   ├── CV_Junior_Lazo_Chileno.pdf   Tu CV (se reemplaza al actualizarlo)
│   ├── compartir.png                Vista previa en LinkedIn y WhatsApp
│   └── favicon.svg                  Icono de la pestaña
└── herramientas/         Fuente de la imagen para compartir
```

Clases, identificadores y funciones usan nombres en español. Las etiquetas HTML, las propiedades CSS y las funciones del navegador mantienen sus nombres en inglés porque son estándar.

## 3. El diseño

Estilo tecnológico y divertido:

- **Colores** (en `css/base.css`, dentro de `:root`): azul marino de fondo con acentos claros: celeste, turquesa, ámbar y gris acero. Cambia una variable y se actualiza todo el sitio.
- **Tipografías:** *Space Grotesk* para los títulos y *DM Sans* para el texto. Se cargan desde Google Fonts.
- **Tono:** textos en primera persona, como si conversaras con quien te lee.
- **Mascotas (Bitbots):** robotitos que caminan en el inicio y en el contacto. Al tocarlos saltan con una voltereta y dicen una frase de redes ("¡Ping: 1 ms!"). Al pulsar botones, enlaces o tarjetas salen chispas, y un robot asoma en la esquina con el mensaje que indica el atributo `data-saludo` del HTML.
- **Accesibilidad:** todo el texto cumple el contraste WCAG AA y se puede navegar con teclado. Los robots son decorativos (`aria-hidden`), se pueden pausar con el botón **Pausar robots** y, si el visitante pide menos movimiento en su sistema, se quedan quietos y no hay chispas.

Convención de clases inspirada en BEM:

```css
.proyecto { }            /* Bloque */
.proyecto__tipo { }      /* Parte del bloque */
.proyecto--salvia { }    /* Variante de color */
```

## 4. Editar el contenido

| Quiero cambiar… | Dónde |
| --- | --- |
| Un texto | Busca el comentario de la sección en `index.html` |
| Agregar un proyecto | Copia un `<article class="proyecto …">` en la sección 09 de `index.html`; cambia la variante de color si quieres |
| Un puesto de trabajo | Copia un `<article class="puesto">` en la sección 08 |
| Colores | Variables de `css/base.css` |
| Frases de los robots | Lista `frases` en `js/mascotas.js` y atributos `data-saludo` en `index.html` |
| Dibujo de los robots | Función `dibujarBot()` en `js/mascotas.js` |
| Cómo se ve en móvil | `css/adaptable.css` |
| El CV | Sigue `ACTUALIZAR-CV.md` |

Puedes editar directamente en GitHub: abre el archivo, pulsa el lápiz ✏️, cambia el texto y pulsa **Commit changes**. En uno o dos minutos el sitio publicado tiene el cambio.

## 5. Funciones JavaScript

| Función | Responsabilidad |
| --- | --- |
| `iniciarNavegacion()` | Menú móvil (abre, cierra con Escape o clic fuera) y marca la sección actual |
| `iniciarAnimaciones()` | Aparición suave al desplazarse; se desactiva si el sistema pide menos movimiento |
| `iniciarContacto()` | Copia el correo; si el navegador no lo permite, lo selecciona y explica cómo copiarlo |
| `iniciarMascotas()` | Crea los robots, los hace saltar al tocarlos, lanza chispas en cada clic y muestra el saludo de la esquina (`mostrarSaludo()`) |

`principal.js` las ejecuta en ese orden. Sin JavaScript, todo el contenido y los enlaces siguen funcionando.

## 6. Tus proyectos

La sección "Cosas que he construido" describe tus proyectos. Sus repositorios son **privados**, así que la página no enlaza al código: dice que puedes mostrarlo en una entrevista. Si algún día haces público uno, agrega un enlace a su repositorio dentro de su tarjeta.
