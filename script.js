const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

// ouvrir le menu (accessible)
menuOpenButton.addEventListener('click', () => {
  const expanded = menuOpenButton.getAttribute('aria-expanded') === 'true';
  menuOpenButton.setAttribute('aria-expanded', String(!expanded));
  const navMenu = document.getElementById('nav-menu');
  navMenu.setAttribute('aria-hidden', String(expanded));
  document.body.classList.toggle('show-mobile-menu');
});

// fermer via bouton
menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-menu');
  menuOpenButton.setAttribute('aria-expanded','false');
  document.getElementById('nav-menu').setAttribute('aria-hidden','true');
});

// fermer en cliquant sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
    // set aria-current for active link
    navLinks.forEach(l => l.removeAttribute('aria-current'));
    link.setAttribute('aria-current','page');
  });
});

// close menu with Escape key and click outside
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.body.classList.contains('show-mobile-menu')) {
    document.body.classList.remove('show-mobile-menu');
    menuOpenButton.setAttribute('aria-expanded','false');
    document.getElementById('nav-menu').setAttribute('aria-hidden','true');
    menuOpenButton.focus();
  }
});

document.addEventListener('click', (e) => {
  const nav = document.getElementById('nav-menu');
  if (document.body.classList.contains('show-mobile-menu') && !nav.contains(e.target) && !menuOpenButton.contains(e.target)) {
    document.body.classList.remove('show-mobile-menu');
    menuOpenButton.setAttribute('aria-expanded','false');
    nav.setAttribute('aria-hidden','true');
  }
});

// intialise swipper 
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
//   responsive breakpoints
  breakpoints: {
    0:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    }
  },
  a11y: {
    prevSlideMessage: 'Previous testimonials',
    nextSlideMessage: 'Next testimonials',
    firstSlideMessage: 'This is the first testimonial',
  }
});

// Mobile sticky CTA show/hide on scroll up
let lastScroll = 0;
const mobileCta = document.querySelector('.mobile-cta');
if (mobileCta) {
  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    if (current > lastScroll && current > 200) {
      mobileCta.classList.add('hidden');
    } else {
      mobileCta.classList.remove('hidden');
    }
    lastScroll = current;
  });
}


