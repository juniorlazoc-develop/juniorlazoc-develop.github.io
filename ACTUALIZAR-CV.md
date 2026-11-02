# Actualizar tu CV

El botón "Descargar mi CV" siempre apunta a `assets/CV_Junior_Lazo_Chileno.pdf`. Para actualizarlo, reemplaza ese archivo **manteniendo exactamente el mismo nombre**. No hace falta tocar el código.

## Desde la web de GitHub (sin instalar nada)

1. Renombra tu nuevo PDF en tu PC como `CV_Junior_Lazo_Chileno.pdf`.
2. Abre https://github.com/juniorlazoc-develop/juniorlazoc-develop.github.io/tree/main/assets
3. Pulsa **Add file → Upload files**.
4. Arrastra el PDF. GitHub avisará que reemplaza el archivo existente.
5. Abajo, en el mensaje, escribe algo como `Actualizo CV (noviembre 2026)` y pulsa **Commit changes**.
6. Espera uno o dos minutos y abre tu sitio. Si ves el CV anterior, recarga con **Ctrl + F5** (el navegador guarda una copia por un rato).

Puedes revisar el progreso de la publicación en la pestaña **Actions** del repositorio: el círculo amarillo pasa a ✅ cuando el sitio ya está actualizado.

## Desde tu PC con Git

```powershell
cd C:\Junior\portafolio-junior-lazo\portafolio-junior-lazo
copy "RUTA\DE\TU\NUEVO_CV.pdf" assets\CV_Junior_Lazo_Chileno.pdf
git add assets/CV_Junior_Lazo_Chileno.pdf
git commit -m "Actualizo CV"
git push
```

## Si también cambió tu experiencia

El CV es un PDF aparte; los textos de la página no se actualizan solos. Si cambiaste de puesto o terminaste un curso, edita también la sección correspondiente de `index.html` (ver la tabla del README, sección 4).
