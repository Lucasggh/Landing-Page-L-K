/**
 * Scroll Reveal — IntersectionObserver
 * Baseado na especificação do design_system
 *
 * - Respeita prefers-reduced-motion
 * - threshold: 0.12 (ativa quando ~12% estiver visível)
 * - rootMargin: 0px 0px -10% 0px
 */

(function () {
  'use strict';

  // Respeitar prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Torna todos os elementos visíveis imediatamente sem animação
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Após animar, desconectar para liberar recursos
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  // Observar todos os elementos .reveal
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach(el => observer.observe(el));

})();
