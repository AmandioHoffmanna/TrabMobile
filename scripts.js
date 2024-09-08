// Menu Toggle for Mobile View
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
      }).catch((error) => {
        console.error('Erro ao registrar o Service Worker:', error);
      });
    });
  }
  