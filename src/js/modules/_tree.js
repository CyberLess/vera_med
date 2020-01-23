(() => {
	if(!$('.catalog__tree').length)
		return false;

	let $li = $('.cat-top');
	let $children = $('.children');

	$children.hide();

	$li.on({
		click: (e) => {
			let $this = $(e.currentTarget);

			if($this.parent().hasClass('cat-parent') && e.target.tagName !== 'A'){
				$this
					.toggleClass('is-active')
					.parent()
					.find('> .children')
					.slideToggle(300);					
			}
		
		}
	})
})($)