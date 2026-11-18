# Herramientas

Archivos de apoyo. No forman parte de la página que ven los visitantes.

## Regenerar la imagen para compartir

`imagen-compartir.html` es la fuente de `assets/compartir.png` (la vista previa en LinkedIn y WhatsApp). Tras regenerarla, sube el número `?v=` de `og:image` en `index.html` para que las redes no muestren la anterior. Si cambias el texto o los colores, abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 "--screenshot=$PWD\assets\compartir.png" "file:///$PWD/herramientas/imagen-compartir.html"
```

Edge abre la página sin ventana y guarda una captura de 1200 × 630 píxeles, el tamaño que recomiendan las redes sociales.

## Regenerar los CV (dos versiones)

Hay dos CV y cada uno tiene su uso:

| Archivo fuente | PDF que genera | Cuándo usarlo |
|---|---|---|
| `cv.html` | `assets/CV_Junior_Lazo_Chileno.pdf` | Portales con filtro automático (ATS): Computrabajo, Bumeran, LinkedIn Easy Apply, Indeed, formularios de empresas. Una columna, sin imágenes, texto real, títulos estándar. |
| `cv-diseno.html` | `assets/CV_Junior_Lazo_Chileno_Diseno.pdf` | Cuando lo envías a una persona: correo a un reclutador, WhatsApp, mensaje de LinkedIn, impreso en una entrevista. Tiene tu logo, línea de tiempo y un QR a este portafolio. |

Si cambias algo, edita **los dos** archivos (los datos deben coincidir) y, desde la carpeta del proyecto en PowerShell, ejecuta:

```powershell
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 "--print-to-pdf=$PWD\assets\CV_Junior_Lazo_Chileno.pdf" "file:///$PWD/herramientas/cv.html"
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 "--print-to-pdf=$PWD\assets\CV_Junior_Lazo_Chileno_Diseno.pdf" "file:///$PWD/herramientas/cv-diseno.html"
```

El CV con diseño carga sus letras (Archivo e IBM Plex Sans) desde Google Fonts: genera el PDF con internet. Revisa que cada PDF siga en **una sola página**; si se pasa, acorta alguna viñeta.

El QR (`assets/cv/qr-portafolio.svg`) apunta a https://juniorlazoc-develop.github.io/. Si compras un dominio, hay que generarlo de nuevo con la nueva dirección.

### Reglas para que el filtro ATS no descarte el CV

- No pongas el CV ATS en dos columnas, tablas, cuadros de texto ni imágenes: muchos filtros leen el texto en desorden o lo pierden.
- Copia las palabras exactas del aviso (por ejemplo "GPON", "NOC", "Python") en el perfil o en habilidades, siempre que sean verdad.
- Antes de postular, abre el PDF, selecciona todo (Ctrl + A), copia y pega en el Bloc de notas: si el texto sale ordenado, el ATS también lo leerá bien.
- Nombre del archivo: siempre `CV_Junior_Lazo_Chileno.pdf`, nunca `cv final (2).pdf`.
