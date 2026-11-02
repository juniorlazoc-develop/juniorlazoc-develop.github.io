# Diagrama de arquitectura

- `portafolio.html`: el diagrama interactivo. Ábrelo con doble clic en el navegador (zoom, modo claro/oscuro y exportar a imagen).
- `portafolio.json`: la fuente del diagrama. Cada caja enlaza al archivo y las líneas del código que la respaldan.

Se generó con [Archify](https://github.com/tt-a1i/archify). Para actualizarlo después de cambiar el código, edita `portafolio.json` (o pídeselo a Claude) y, desde la raíz del repositorio, ejecuta:

```bash
node ~/.claude/skills/archify/bin/archify.mjs finalize architecture docs/arquitectura/portafolio.json docs/arquitectura/portafolio.html --repo-root . --quality showcase
```

Al terminar, borra los archivos `*.finalize*.json`, `*.delivery.json` y `*.browser-check.json` que deja la herramienta: son comprobantes de la verificación y contienen rutas de tu PC.
