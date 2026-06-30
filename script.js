const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

function bindMediaFrame(frame) {
  const media = frame.querySelector('[data-replaceable-media]');
  if (!media) return;
  const markLoaded = () => frame.classList.add('is-loaded');
  const markMissing = () => frame.classList.remove('is-loaded');

  if (media.tagName === 'IMG') {
    media.addEventListener('load', markLoaded);
    media.addEventListener('error', markMissing);
    if (media.complete && media.naturalWidth > 0) markLoaded();
  } else {
    media.addEventListener('loadeddata', markLoaded);
    media.addEventListener('error', markMissing);
    media.querySelectorAll('source').forEach((source) => source.addEventListener('error', markMissing));
  }
}

document.querySelectorAll('[data-media-frame]').forEach(bindMediaFrame);

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = 'Форма подготовлена. Отправка будет подключена после получения адреса или CRM.';
});