const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Fermer' : 'Menu';
});

document.querySelector('.contact-form')?.addEventListener('submit', (event) => {
  event.preventEvent();
});
