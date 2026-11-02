/**
 * NAVEGACION.JS
 * Menú móvil y enlace activo según la sección visible.
 * Portafolio agrupa las funciones sin crear muchas variables globales.
 */
window.Portafolio = window.Portafolio || {};

window.Portafolio.iniciarNavegacion = function iniciarNavegacion() {
  const boton = document.querySelector('#boton-menu');
  const textoBoton = document.querySelector('#texto-menu');
  const menu = document.querySelector('#menu-principal');
  const encabezado = document.querySelector('#encabezado');
  const enlaces = [...menu.querySelectorAll('a')];
  const pantallaMovil = window.matchMedia('(max-width: 760px)');

  function cambiarMenu(abierto) {
    menu.classList.toggle('navegacion--abierta', abierto);
    boton.setAttribute('aria-expanded', String(abierto));
    textoBoton.textContent = abierto ? 'Cerrar' : 'Menú';
  }

  // El botón solo se muestra si JS pudo inicializar la navegación.
  function adaptarMenu() {
    const focoEstabaEnMenu = menu.contains(document.activeElement);
    cambiarMenu(false);
    boton.hidden = !pantallaMovil.matches;
    if (pantallaMovil.matches && focoEstabaEnMenu) boton.focus();
  }

  document.documentElement.classList.add('menu-mejorado');
  adaptarMenu();
  pantallaMovil.addEventListener('change', adaptarMenu);

  boton.addEventListener('click', function alternarMenu() {
    cambiarMenu(boton.getAttribute('aria-expanded') !== 'true');
  });

  enlaces.forEach(function prepararEnlace(enlace) {
    enlace.addEventListener('click', function cerrarAlNavegar() {
      cambiarMenu(false);
      // Deja el foco en el destino, no en un enlace que acaba de ocultarse.
      if (pantallaMovil.matches) {
        const destino = document.querySelector(enlace.getAttribute('href'));
        if (destino) {
          destino.setAttribute('tabindex', '-1');
          destino.focus({ preventScroll: true });
          destino.addEventListener('blur', () => destino.removeAttribute('tabindex'), { once: true });
        }
      }
    });
  });

  document.addEventListener('keydown', function cerrarConEscape(evento) {
    if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      cambiarMenu(false);
      boton.focus();
    }
  });

  document.addEventListener('click', function cerrarFueraDelMenu(evento) {
    if (!encabezado.contains(evento.target)) cambiarMenu(false);
  });

  // Una sola actualización por fotograma, sin librerías ni scroll continuo costoso.
  const secciones = [...document.querySelectorAll('main section[id]')];
  let actualizacionPendiente = false;

  function marcarSeccionActual() {
    let seccionActual = 'inicio';
    const limite = encabezado.offsetHeight + 120;
    secciones.forEach(function revisarSeccion(seccion) {
      if (seccion.getBoundingClientRect().top <= limite) seccionActual = seccion.id;
    });

    enlaces.forEach(function actualizarEnlace(enlace) {
      if (enlace.hash === '#' + seccionActual) enlace.setAttribute('aria-current', 'location');
      else enlace.removeAttribute('aria-current');
    });
    actualizacionPendiente = false;
  }

  window.addEventListener('scroll', function solicitarActualizacion() {
    if (!actualizacionPendiente) {
      actualizacionPendiente = true;
      window.requestAnimationFrame(marcarSeccionActual);
    }
  }, { passive: true });

  marcarSeccionActual();
};
