import Swiper from 'swiper';

(() => {

   if(!$('.js-to-swiper').length)
      return false;


   const breakpoint = window.matchMedia( '(min-width: 580px)' );
   let mySwiper;

   const breakpointChecker = function() {
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
         // clean up old instances and inline styles when available
         if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
         // or/and do nothing
         return;
      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
         // fire small viewport version of swiper
         return enableSwiper();
      }
   };

   const enableSwiper = function() {
      mySwiper = new Swiper ('.js-to-swiper', {
         loop: true,
         slidesPerView: 1,
         keyboardControl: true,
         grabCursor: true,
         // pagination
         navigation: {
            nextEl: '.arrow-nav_right',
            prevEl: '.arrow-nav_left',
         },
         pagination: {
            clickable: true,
            // dynamicBullets: false,
            el: '.pagination',
         },
      });
   };

   // keep an eye on viewport size changes
   breakpoint.addListener(breakpointChecker);
   // kickstart
   breakpointChecker();
})($)