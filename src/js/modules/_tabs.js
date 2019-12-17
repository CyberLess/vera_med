import Swiper from 'swiper';

(()=>{

	$('.tabs').each((i,el) => {

		let nav = $(el).find('.tabs__list')[0];
		let content = $(el).find('.tabs__content')[0];

		let navPrev = $(el).find('.swiper-button-prev')[0];
		let navNext = $(el).find('.swiper-button-next')[0];

		let navSwiper = new Swiper(nav, {
			navigation: {
				nextEl: navNext,
				prevEl: navPrev,
			},
			breakpoints: {
				300: {
					slidesPerView: 'auto',
					spaceBetween: 30,
					// centeredSlides: true,
					loop: true,
				},
				580: {
					slidesPerView: 3,
					loop: false,
				},
				768: {
					slidesPerView: 5,
					// centeredSlides: false,
					loop: false,
					spaceBetween: 0
				},
				1024: {
					slidesPerView: 6,
				},
			},
			// slidesPerView: 6,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});

		let contentSwiper = new Swiper(content, {
			// effect: 'fade',
			noSwiping: true,
			allowTouchMove: false,
			onlyExternal: true,
			thumbs: {
				swiper: navSwiper
			}

		});


		// navSwiper.controller.control = contentSwiper;
		// contentSwiper.controller.control = navSwiper;

		// console.log('nav', navSwiper.params.control)		

	})


})($)