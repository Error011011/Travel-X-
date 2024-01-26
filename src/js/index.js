import loader from './modules/loader.js';
loader();


function mobileNav() {
	const navBtnOpen = document.querySelector('#modalOpen');
	const navBtnClose = document.querySelector('#modalClose');

	const navOverlay = document.querySelector('.mobile-nav__overlay');
	const nav = document.querySelector('#mobileNav');

	navBtnOpen.onclick = toggleMobileNav;
	navBtnClose.onclick = toggleMobileNav;
	navOverlay.onclick = toggleMobileNav;

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		nav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}
}

mobileNav();


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

// init Swiper:

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    parallax: true,
    speed: 1000,

    keyboard: {
        enabled: true
    },

  
    // If we need pagination
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#slider-next',
      prevEl: '#slider-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



