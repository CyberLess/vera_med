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
})