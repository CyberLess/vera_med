$(() => {
	$('.accordion__top').on('click', e => {
		let $this = $(e.currentTarget);

		$this.parent().toggleClass('is-active');
	});
	
	$('.category__title').on('click', e => {
		let $this = $(e.currentTarget);

		$this.parent().toggleClass('is-active');
	});
})