(() => {


	$(window).on('load resize', () => {

		let ww = $(window).width();

		$('.js-move-item').each((i, el) => {

			let $this = $(el);
			
			let $to = $($this.data('to'));
			let $from = $($this.data('from'));


			if(ww <= 1024)
				$this.appendTo($to).addClass('is-moved')
			else
				if($this.hasClass('is-moved'))
					$this.appendTo($from).removeClass('is-moved')

		})		
	})

})($)