import Swiper from 'swiper';

(()=>{

	$('.tabs').each((i,el) => {

		let nav = $(el).find('.tabs__list')[0];
		let content = $(el).find('.tabs__content')[0];

		let navPrev = $(el).find('.swiper-button-prev')[0];
		let navNext = $(el).find('.swiper-button-next')[0];

		let navSwiper = new Swiper(nav, {
			slidesPerView: 'auto',
			loop: false,
			spaceBetween: 0,
			breakpoints: {
				300: {
					loop: false,
					spaceBetween: 30
				},
				580: {
					loop: false,
				},
				768: {
					loop: false,
					spaceBetween: 0
				},
				1024: {
					slidesPerView: 'auto',
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
			navigation: {
				nextEl: navNext,
				prevEl: navPrev,
			},
			thumbs: {
				swiper: navSwiper
			}

		});


		// navSwiper.controller.control = contentSwiper;
		// contentSwiper.controller.control = navSwiper;

		// console.log('nav', navSwiper.params.control)		

	})


})($);

(()=>{

	$('.cat').each((i,el) => {

		let nav = $(el).find('.cat__top')[0];
		let content = $(el).find('.cat__content')[0];

		let navSwiper = new Swiper(nav, {
			slidesPerView: 'auto',
			spaceBetween: 25,
			loop: false,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});

		let contentSwiper = new Swiper(content, {
			noSwiping: true,
			allowTouchMove: false,
			onlyExternal: true,
			autoHeight: true,
			thumbs: {
				swiper: navSwiper
			}

		});	

	});


})($);