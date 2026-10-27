// Menu responsivo (abre/fecha no celular e tablet)
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu-principal');
  if (!btn || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  btn.addEventListener('click', function () {
    setOpen(btn.getAttribute('aria-expanded') !== 'true');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  // Fecha o menu ao voltar para a largura de desktop
  window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();
