/**
 * MASCOTAS.JS
 * Los "Bitbots": robotitos que pasean por la página, saltan al tocarlos
 * y celebran los clics con chispas. Todo es decorativo: si no hay
 * JavaScript, o si el sistema pide menos movimiento, la página funciona igual.
 */
window.Portafolio = window.Portafolio || {};

/* Dibuja un Bitbot en SVG. Los colores salen del CSS (mascotas.css). */
window.Portafolio.dibujarBot = function dibujarBot() {
  return `
    <svg class="bot" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <line class="bot__antena" x1="32" y1="5" x2="32" y2="13" />
      <circle class="bot__luz" cx="32" cy="5" r="3.5" />
      <rect class="bot__pierna bot__pierna--izquierda" x="22" y="50" width="7" height="11" rx="2.5" />
      <rect class="bot__pierna bot__pierna--derecha" x="35" y="50" width="7" height="11" rx="2.5" />
      <rect class="bot__torso" x="19" y="40" width="26" height="13" rx="4" />
      <rect class="bot__panel" x="27" y="44" width="10" height="4" rx="1.5" />
      <rect class="bot__tornillo" x="5" y="21" width="6" height="11" rx="2" />
      <rect class="bot__tornillo" x="53" y="21" width="6" height="11" rx="2" />
      <rect class="bot__cabeza" x="9" y="12" width="46" height="30" rx="9" />
      <rect class="bot__visor" x="14" y="18" width="36" height="16" rx="6" />
      <rect class="bot__ojo" x="20" y="22" width="8" height="8" rx="2" />
      <rect class="bot__ojo" x="36" y="22" width="8" height="8" rx="2" />
    </svg>`;
};

window.Portafolio.iniciarMascotas = function iniciarMascotas() {
  const raiz = document.documentElement;
  const boton = document.querySelector('#control-mascotas');
  const saludo = document.querySelector('#saludo-mascota');
  const textoSaludo = document.querySelector('#saludo-mascota-texto');
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clavePreferencia = 'portafolio-mascotas-pausadas';
  const colores = ['celeste', 'turquesa', 'ambar', 'acero'];
  const frases = ['¡Hola!', '¡Ping: 1 ms!', '¡Conexión estable! 📶', '¡A toda fibra! ⚡', 'Bip bop 🤖', '¡Sigue explorando!', 'Sistema en línea ✅'];
  let pausaManual = false;
  let temporizadorSaludo;

  // El almacenamiento puede estar bloqueado por el navegador: no es un error fatal.
  try {
    pausaManual = localStorage.getItem(clavePreferencia) === 'si';
  } catch { /* Continuar sin guardar la preferencia. */ }

  function alAzar(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }

  function estanQuietas() {
    return pausaManual || menosMovimiento.matches;
  }

  // 1. Pausa: botón accesible y preferencia del sistema.
  function actualizarPausa() {
    raiz.classList.toggle('mascotas-pausadas', estanQuietas());
    boton.setAttribute('aria-pressed', String(estanQuietas()));
    boton.disabled = menosMovimiento.matches;
    boton.textContent = menosMovimiento.matches
      ? 'Robots quietos por tu sistema'
      : pausaManual ? 'Reanudar robots 🤖' : 'Pausar robots';
  }

  boton.hidden = false;
  actualizarPausa();
  menosMovimiento.addEventListener('change', actualizarPausa);
  boton.addEventListener('click', function alternarPausa() {
    pausaManual = !pausaManual;
    try {
      localStorage.setItem(clavePreferencia, pausaManual ? 'si' : 'no');
    } catch { /* La preferencia se mantiene durante esta visita. */ }
    actualizarPausa();
  });

  // 2. Hace que un robot salte y diga una frase.
  function hacerSaltar(mascota, frase) {
    const burbuja = mascota.querySelector('.mascota__burbuja');
    if (burbuja && frase) burbuja.textContent = frase;
    mascota.classList.remove('mascota--saltando');
    void mascota.offsetWidth; // Reinicia la animación aunque ya estuviera saltando.
    mascota.classList.add('mascota--saltando', 'mascota--hablando');
    clearTimeout(mascota.temporizador);
    mascota.temporizador = setTimeout(function terminarSalto() {
      mascota.classList.remove('mascota--saltando', 'mascota--hablando');
    }, 2400);
  }

  // 3. Llena cada franja [data-paseo] con robots de colores y velocidades distintas.
  document.querySelectorAll('[data-paseo]').forEach(function crearPaseo(paseo) {
    const cantidad = Number(paseo.dataset.paseo) || 3;
    const inicio = Math.floor(Math.random() * colores.length);
    for (let i = 0; i < cantidad; i++) {
      const mascota = document.createElement('div');
      const duracion = 16 + Math.random() * 12;
      mascota.className = 'mascota mascota--' + colores[(inicio + i) % colores.length];
      if (i % 2 === 1) mascota.classList.add('mascota--al-reves');
      // Retraso negativo: cada uno empieza en un punto distinto del recorrido.
      mascota.style.setProperty('--duracion', duracion.toFixed(1) + 's');
      mascota.style.setProperty('--retraso', (-Math.random() * duracion).toFixed(1) + 's');
      // Posición fija para cuando no hay animación (movimiento reducido).
      mascota.style.setProperty('--posicion', (10 + (80 / cantidad) * i).toFixed(0) + '%');
      mascota.innerHTML = '<span class="mascota__burbuja"></span><div class="mascota__cuerpo">' +
        window.Portafolio.dibujarBot() + '</div>';
      mascota.addEventListener('click', function tocarMascota() {
        hacerSaltar(mascota, alAzar(frases));
      });
      paseo.appendChild(mascota);
    }
  });

  // 4. Robots sueltos (avatar de "Ahora mismo", saludo): solo se dibujan.
  document.querySelectorAll('[data-mascota]').forEach(function dibujar(elemento) {
    elemento.classList.add('mascota--' + (elemento.dataset.mascota || 'celeste'));
    elemento.innerHTML = window.Portafolio.dibujarBot();
  });
  const avatar = document.querySelector('.ahora__avatar');
  if (avatar) {
    avatar.addEventListener('click', function tocarAvatar() {
      avatar.classList.remove('mascota--saltando');
      void avatar.offsetWidth;
      avatar.classList.add('mascota--saltando');
      window.Portafolio.mostrarSaludo('Soy Bitbot, el asistente de Junior 🤖');
    });
  }

  // 5. Saludo flotante: un robot asoma abajo a la derecha con un mensaje.
  window.Portafolio.mostrarSaludo = function mostrarSaludo(texto) {
    textoSaludo.textContent = texto;
    saludo.classList.remove('saludo-mascota--visible');
    void saludo.offsetWidth;
    saludo.classList.add('saludo-mascota--visible');
    clearTimeout(temporizadorSaludo);
    temporizadorSaludo = setTimeout(function esconderSaludo() {
      saludo.classList.remove('saludo-mascota--visible');
    }, 2800);
  };

  // 6. Chispas en el punto del clic: cuadritos y rayos de la paleta.
  function lanzarChispas(x, y) {
    const tonos = ['#8ecdf2', '#7fe0c8', '#ffd57a', '#b9c8e8'];
    for (let i = 0; i < 16; i++) {
      const pieza = document.createElement('span');
      const angulo = Math.random() * Math.PI * 2;
      const distancia = 50 + Math.random() * 80;
      pieza.className = 'confeti';
      if (i % 4 === 0) {
        pieza.classList.add('confeti--simbolo');
        pieza.textContent = alAzar(['⚡', '+', '✦', '{ }']);
        pieza.style.color = alAzar(tonos);
      }
      pieza.style.left = x + 'px';
      pieza.style.top = y + 'px';
      pieza.style.background = alAzar(tonos);
      pieza.style.setProperty('--dx', (Math.cos(angulo) * distancia).toFixed(0) + 'px');
      // Un poco más hacia arriba que hacia abajo, como si saltaran.
      pieza.style.setProperty('--dy', (Math.sin(angulo) * distancia - 30).toFixed(0) + 'px');
      pieza.style.setProperty('--giro', (Math.random() * 540 - 270).toFixed(0) + 'deg');
      pieza.addEventListener('animationend', () => pieza.remove());
      document.body.appendChild(pieza);
    }
  }

  // Cualquier enlace, botón o tarjeta de proyecto celebra el clic.
  // data-saludo en el HTML define el mensaje del robot de la esquina.
  document.addEventListener('click', function celebrarClic(evento) {
    const objetivo = evento.target.closest('a, button, .proyecto');
    if (!objetivo || objetivo.closest('.mascota')) return;

    if (!estanQuietas()) {
      // Con teclado no hay coordenadas: se usa el centro del elemento.
      const caja = objetivo.getBoundingClientRect();
      const x = evento.detail === 0 ? caja.left + caja.width / 2 : evento.clientX;
      const y = evento.detail === 0 ? caja.top + caja.height / 2 : evento.clientY;
      lanzarChispas(x, y);
    }
    if (objetivo.dataset.saludo) window.Portafolio.mostrarSaludo(objetivo.dataset.saludo);
  });
};
