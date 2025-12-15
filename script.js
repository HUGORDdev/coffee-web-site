const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link');

// ouvrir le menu
menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle('show-mobile-menu');
});

// fermer via bouton
menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove('show-mobile-menu');
});

// fermer en cliquant sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
  });
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
    O:{
        slidesPerView: 1,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    }
  }
  
});


