const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.querySelector('.sr-only').textContent = open ? 'Open navigation' : 'Close navigation';
  nav.classList.toggle('open', !open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (toggle) toggle.querySelector('.sr-only').textContent = 'Open navigation';
}));

document.getElementById('year').textContent = new Date().getFullYear();
