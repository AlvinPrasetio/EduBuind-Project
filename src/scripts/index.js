import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/pages/home';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav__drawer'),
  drawer: document.querySelector('#nav__menu'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('colored');
      header.classList.remove('transparent');
    } else {
      header.classList.add('transparent');
      header.classList.remove('colored');
    }
  });
});
