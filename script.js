const menuOpenButton = document.querySelector('#menu-open-button');
const navlinks = document.querySelector('.nav-menu .nac-links');
const menuCloseButton = document.querySelector('#menu-close-button');

// open menu when clicking the open button
menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
});

// close menu when clicking the close button
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
})
navlinks.forEach(link => {
  link.addEventListener('click',()=>menuOpenButton.click)
  
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


