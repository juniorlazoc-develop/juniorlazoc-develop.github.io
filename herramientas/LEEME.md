# Herramientas

Archivos de apoyo. No forman parte de la página que ven los visitantes.

## Regenerar la imagen para compartir

`imagen-compartir.html` es la fuente de `assets/compartir.png` (la vista previa en LinkedIn y WhatsApp). Si cambias el texto o los colores, abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=5000 "--screenshot=$PWD\assets\compartir.png" "file:///$PWD/herramientas/imagen-compartir.html"
```

Edge abre la página sin ventana y guarda una captura de 1200 × 630 píxeles, el tamaño que recomiendan las redes sociales.

## Regenerar el CV (formato Harvard)

`cv-harvard.html` es la fuente de `assets/CV_Junior_Lazo_Chileno.pdf`: una sola hoja, sin foto, letra serif y secciones con una línea debajo. Si cambias algo del CV, edita ese archivo y, desde la carpeta del proyecto en PowerShell, ejecuta:

```powershell
& "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --no-pdf-header-footer "--print-to-pdf=$PWD\assets\CV_Junior_Lazo_Chileno.pdf" "file:///$PWD/herramientas/cv-harvard.html"
```

Revisa que siga en una sola página: si se pasa a una segunda, acorta alguna viñeta.
