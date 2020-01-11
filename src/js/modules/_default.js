$(() =>{
	$(window).on('load', () => {
		$('body').addClass('is-loaded')
	})

	$('.js-open-sidebar').on('click', e => {
		$(e.currentTarget).addClass('is-hidden')
		$('#sidebar').addClass('is-visible')
	})

	$('.js-close-sidebar').on('click', e => {
		let ww = $(window).width();

		if(ww <= 1024){
			$('#sidebar').removeClass('is-visible')
			$('.js-open-sidebar').removeClass('is-hidden')
		}
	});
	
	$('.js-open-cat').on('click', e => {
		$(e.currentTarget).removeClass('is-visible').addClass('is-hidden')
		$('.catalog__form.is-hidden').removeClass('is-hidden').addClass('is-visible')
	});
	
	$('.catalog__box-title_close').on('click', e => {
		$('.catalog__form.is-visible').removeClass('is-visible').addClass('is-hidden')
		$('.js-open-cat').removeClass('is-hidden').addClass('is-visible')
	});
})