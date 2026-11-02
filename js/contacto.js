/**
 * CONTACTO.JS
 * Copia el correo al portapapeles; si el navegador lo impide, selecciona
 * el texto y muestra una alternativa. No envía mensajes ni guarda datos.
 */
window.Portafolio = window.Portafolio || {};

window.Portafolio.iniciarContacto = function iniciarContacto() {
  const boton = document.querySelector('#copiar-correo');
  const enlace = document.querySelector('#enlace-correo');
  const estado = document.querySelector('#estado-copia');
  const correo = enlace.getAttribute('href').replace('mailto:', '');

  boton.hidden = false;
  boton.addEventListener('click', async function copiarCorreo() {
    boton.disabled = true;
    estado.textContent = '';

    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Portapapeles no disponible');
      await navigator.clipboard.writeText(correo);
      estado.textContent = 'Correo copiado. Ya puedes pegarlo en tu mensaje.';
      // Si las mascotas están cargadas, una celebra la copia.
      window.Portafolio.mostrarSaludo?.('¡Correo copiado! 📬');
    } catch {
      const seleccion = window.getSelection();
      const rango = document.createRange();
      // Selecciona solo el correo, sin incluir la flecha decorativa.
      rango.selectNodeContents(enlace.firstChild);
      seleccion?.removeAllRanges();
      seleccion?.addRange(rango);
      estado.textContent = 'No se pudo copiar automáticamente. Copia el correo seleccionado o pulsa el enlace para escribir.';
    } finally {
      boton.disabled = false;
    }
  });
};
