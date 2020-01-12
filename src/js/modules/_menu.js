$(() => {
	var $menu = $('.header__mobile');

	if(!$menu.length)
		return false;	

	$('.js-toggle-menu').on('click', e => {
		e.preventDefault()

		let $this = $(e.currentTarget);
		
		$menu.toggleClass('is-visible')
		$this.toggleClass('is-active')	

		$('html, body').toggleClass('js-lock')

		$('.header__panel').removeClass('header__panel_visible')
		$('.header__panel-item').removeClass('header__panel-item_active')
		$('.js-submenu').removeClass('is-hover')	
	})


	$(window).on('load resize', () => {
		let ww = $(window).width();
		if(ww > 1024){
			$('.js-toggle-menu').removeClass('is-active')
			$menu.removeClass('is-visible')
		}
	})	
})