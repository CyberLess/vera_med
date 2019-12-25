(() => {
	if(!$('.js-move-item').length)
		return false;	

	$(window).on('load resize', () => {

		let ww = $(window).width();

		$('.js-move-item').each((i, el) => {

			let $this = $(el);
			
			let $to = $($this.data('to'));
			let $from = $($this.data('from'));

			let point = $this.attr('data-point') ? parseInt($this.data('point')) : 1024;

			if(ww <= point)
				$this.appendTo($to).addClass('is-moved')
			else
				if($this.hasClass('is-moved'))
					$this.appendTo($from).removeClass('is-moved')

		})		
	})

})($)