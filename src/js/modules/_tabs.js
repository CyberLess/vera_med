import Swiper from 'swiper';

(()=>{
	if(!$('.tabs').length)
		return false;

	var offset = false;

	let hash = window.location.hash;

	$('.tabs').each((i,el) => {

		let nav = $(el).find('.tabs__list')[0];
		let content = $(el).find('.tabs__content')[0];

		let navPrev = $(el).find('.swiper-button-prev')[0];
		let navNext = $(el).find('.swiper-button-next')[0];

		let current_slide = $(el).find(hash).index() + 1;

		let navSwiper = new Swiper(nav, {
			slidesPerView: 'auto',
			loop: false,
			// resistance: false,
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
			// freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,

		});

		let contentSwiper = new Swiper(content, {
			// effect: 'fade',
			noSwiping: true,
			allowTouchMove: false,
			onlyExternal: true,
			loop: true,
			autoHeight: true,
			navigation: {
				nextEl: navNext,
				prevEl: navPrev,
			},
			thumbs: {
				swiper: navSwiper
			}

		});

		$(el).find('.tabs__list a').on('click', e => {
			e.preventDefault()

			let href = $(e.currentTarget).attr('href')

			console.log('tab', href)

			if(history.pushState) {
			    history.pushState(null, null, href);
			}
			else {
			    location.hash = href;
			}

			offset = $(el).offset().top - 40;

	        $('html, body').animate({
	            scrollTop: offset
	        }, 300);

		})

		if(hash){
			contentSwiper.slideTo(current_slide, 0);
			offset = $(el).offset().top - 40;
		}

		// navSwiper.controller.control = contentSwiper;
		// contentSwiper.controller.control = navSwiper;

		// console.log('nav', navSwiper.params.control)		

	})

	$(window).on("load", ()=> {
		if(offset && $(window).width() > 1024){
	        $('html, body').animate({
	            scrollTop: offset
	        }, 300);
		}
		
	})

})($);

(()=>{
	if(!$('.cat').length)
		return false;
	
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