$(() => {
	
	$('.accordion__top, .category__title').on('click', e => {
		let $this = $(e.currentTarget);

			$this
				.parent()
				.toggleClass('is-active')
				.find('.category__list, .accordion__content')
				.slideToggle(300);
	});
	
	
	$('.category__title').on('click', e => {
		let $this = $(e.currentTarget);

		$this.parent().toggleClass('is-active');
	});
})