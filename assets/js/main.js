// FaitesVousConfiance — interactions communes
document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Apparition au défilement
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });

  // Formulaire de contact (démo — pas d'envoi réel)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.querySelector('#form-message');
      if (msg) { msg.style.display = 'block'; }
      form.reset();
    });
  }
});
