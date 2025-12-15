const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

// open menu when clicking the open button
menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
});

// close menu when clicking the close button
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
})