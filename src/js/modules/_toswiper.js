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
	
})($);

(() => {
	if ( $(window).outerWidth() < 580 ) {
		var keyslider = new Swiper('.keys__slider', {
			 loop: true,
			 slidesPerView: 1,
			 keyboardControl: true,
			 grabCursor: true,
			 // pagination
			 navigation: {
				nextEl: '.keys__slider .arrow-nav_right',
				prevEl: '.keys__slider .arrow-nav_left',
			 },
			 pagination: {
				clickable: true,
				// dynamicBullets: false,
				el: '.keys__slider .pagination',
			 },
		});
		var sertislider = new Swiper('.sertificate__slider', {
			 loop: true,
			 slidesPerView: 3,
			 keyboardControl: true,
			 grabCursor: true,
			 // pagination
			 navigation: {
				nextEl: '.sertificate .btn-nav_right',
				prevEl: '.sertificate .btn-nav_left',
			 },
			 pagination: {
				el: '.sertificate__counter',
				type: 'fraction',
			 },
		});
	};
})($);

(() => {
	var productslider = new Swiper('.products__slider', {
		 loop: true,
		 slidesPerView: 6,
		 keyboardControl: true,
		 grabCursor: true,
		 // pagination
		 navigation: {
			nextEl: '.products .btn-nav_right',
			prevEl: '.products .btn-nav_left',
		 },
		 pagination: {
			el: '.products__counter',
			type: 'fraction',
		 },
		 breakpoints: {
			0: {
			  slidesPerView: 1,
			},
			580: {
			  slidesPerView: 6,
			},
		  }
	});
})($);

(() => {
	var productslider = new Swiper('.fotogallery__slider', {
		 loop: true,
		 slidesPerView: 3,
		 keyboardControl: true,
		 grabCursor: true,
		 // pagination
		 navigation: {
			nextEl: '.fotogallery .btn-nav_right',
			prevEl: '.fotogallery .btn-nav_left',
		 },
		 pagination: {
			clickable: true,
            el: '.fotogallery__pagination',
         },
		 breakpoints: {
			0: {
			  slidesPerView: 1,
			  pagination: {
				el: '.fotogallery__counter',
				type: 'fraction',
			  },
			},
			580: {
			  slidesPerView: 1,
			},
			769: {
			  slidesPerView: 3,
			},
		  }
	});
})($);

(() => {
	var teamslider = new Swiper('.js-team-main', {
		 loop: true,
		 slidesPerView: 3,
		 keyboardControl: true,
		 grabCursor: true,
		 navigation: {
			nextEl: '.team .btn-nav_right',
			prevEl: '.team .btn-nav_left',
		 },
		 pagination: {
			clickable: true,
            el: '.team__pagination',
         },
		 breakpoints: {
			0: {
			  slidesPerView: 1,
			  pagination: {
				el: '.team__counter',
				type: 'fraction',
			  },
			},
			580: {
			  slidesPerView: 2,
			},
			769: {
			  slidesPerView: 5,
			},
		  }
	});
})($);

(() => {
	if ( $(window).outerWidth() < 580 ) {
		var teamslider = new Swiper('.js-team-page', {
			 loop: true,
			 slidesPerView: 1,
			 keyboardControl: true,
			 grabCursor: true,
			 navigation: {
				nextEl: '.team .btn-nav_right',
				prevEl: '.team .btn-nav_left',
			 },
			 pagination: {
				el: '.team__counter',
				type: 'fraction',
			 },
		});
	};
})($);

(() => {
	if ( $(window).outerWidth() < 580 ) {
		var teamslider = new Swiper('.single__gallery-slider', {
			 loop: true,
			 slidesPerView: 1,
			 keyboardControl: true,
			 grabCursor: true,
			 navigation: {
				nextEl: '.single__gallery .btn-nav_right',
				prevEl: '.single__gallery .btn-nav_left',
			 },
			 pagination: {
				el: '.single__gallery-counter',
				type: 'fraction',
			 },
		});
	};
})($);

(() => {
	if ( $(window).outerWidth() < 580 ) {
		var teamslider = new Swiper('.js-slider-news', {
			 loop: true,
			 slidesPerView: 1,
			 keyboardControl: true,
			 grabCursor: true,
			 navigation: {
				nextEl: '.js-slider-news .btn-nav_right',
				prevEl: '.js-slider-news .btn-nav_left',
			 },
			 pagination: {
				el: '.search-result__counter',
				type: 'fraction',
			 },
		});
	};
})($);

(()=>{
	var company_bg = new Swiper('.company__bg', {
		  slidesPerView: 1,
		  loopedSlides: 1,
		  loop: true,
		  effect: 'fade',
	});
	var company_top = new Swiper('.company__top-content', {
		loop: true,
		 slidesPerView: 1,
		 loopedSlides: 1,
		 navigation: {
			nextEl: '.company .btn-nav_right',
			prevEl: '.company .btn-nav_left',
		 },
		 breakpoints: {
			0: {
			  pagination: {
				clickable: true,
				el: '.company__pagination',
			 },
			},
			769: {
			  pagination: {
				dynamicBullets: false,
			 },
			},
		 },
		 thumbs: {
			swiper: company_bg
		  }
	});
})($);

(()=>{
	var company_list = new Swiper('.company__list', {
		  allowTouchMove: false,
		  slidesPerView: 8,
		  loop: true,
		  autoplay: {
			delay: 1000000,
			disableOnInteraction: false,
		  },
		  breakpoints: {
			0: {
			  allowTouchMove: true,
			  slidesPerView: 3,
			  autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			  },
			},
			400: {
			  allowTouchMove: true,
			  slidesPerView: 4,
			  autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			  },
			},
			580: {
			  pagination: {
				allowTouchMove: false,
			 },
			},
		 },
	});
})($);