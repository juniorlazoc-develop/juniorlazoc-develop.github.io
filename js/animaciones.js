/**
 * ANIMACIONES.JS
 * Aparición suave de las secciones al desplazarse.
 * El contenido siempre está visible: si no hay JavaScript, o si el sistema
 * pide menos movimiento, simplemente no se anima.
 */
window.Portafolio = window.Portafolio || {};

window.Portafolio.iniciarAnimaciones = function iniciarAnimaciones() {
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (menosMovimiento || !('IntersectionObserver' in window)) return;

  const observador = new IntersectionObserver(function revelarElementos(entradas) {
    entradas.forEach(function revelarEntrada(entrada) {
      if (!entrada.isIntersecting) return;
      entrada.target.classList.add('revelado');
      observador.unobserve(entrada.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-revelar]').forEach(function observarElemento(elemento) {
    observador.observe(elemento);
  });
};
