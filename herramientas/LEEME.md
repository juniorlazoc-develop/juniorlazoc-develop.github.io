# Herramientas

Archivos de apoyo. No forman parte de la página que ven los visitantes.

## Regenerar la imagen para compartir

`imagen-compartir.html` es la fuente de `assets/compartir.png` (la vista previa en LinkedIn y WhatsApp). Tras regenerarla, sube el número `?v=` de `og:image` en `index.html` para que las redes no muestren la anterior. Si cambias el texto o los colores, abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 "--screenshot=$PWD\assets\compartir.png" "file:///$PWD/herramientas/imagen-compartir.html"
```

Edge abre la página sin ventana y guarda una captura de 1200 × 630 píxeles, el tamaño que recomiendan las redes sociales.

## Regenerar el CV

En la web se publica **un solo CV**: el de formato ATS. `cv.html` es la fuente de `assets/CV_Junior_Lazo_Chileno.pdf`: una columna, sin imágenes, texto real y títulos estándar, para que los filtros automáticos lo lean bien.

Si cambias algo, edita `cv.html` y, desde la carpeta del proyecto en PowerShell, ejecuta:

```powershell
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
& $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 "--print-to-pdf=$PWD\assets\CV_Junior_Lazo_Chileno.pdf" "file:///$PWD/herramientas/cv.html"
```

Revisa que siga en **una sola página**; si se pasa, acorta alguna viñeta.

Después cambia el número `?v=` de los dos enlaces al CV en `index.html` (por ejemplo `?v=20261123` → la fecha de hoy). Si no, los navegadores que ya lo descargaron siguen mostrando la versión vieja guardada en su caché.

Las versiones con diseño y en inglés **no se publican**: están en `C:\Junior\Proyectos\cv-otras-versiones` (fuera de Git), con su propia guía.

### Reglas para que el filtro ATS no descarte el CV

- No pongas el CV ATS en dos columnas, tablas, cuadros de texto ni imágenes: muchos filtros leen el texto en desorden o lo pierden.
- Copia las palabras exactas del aviso (por ejemplo "GPON", "NOC", "Python") en el perfil o en habilidades, siempre que sean verdad.
- Antes de postular, abre el PDF, selecciona todo (Ctrl + A), copia y pega en el Bloc de notas: si el texto sale ordenado, el ATS también lo leerá bien.
- Nombre del archivo: siempre `CV_Junior_Lazo_Chileno.pdf`, nunca `cv final (2).pdf`.
