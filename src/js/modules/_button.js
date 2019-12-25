import {getRandomInt, transitionEnd} from '../functions';

$(() => {

	if(!$('.btn, .border-button, .btn-nav').length)
		return false;	

	$('.btn, .border-button, .btn-nav').each((i, el) => {
		for(i = 0; i < getRandomInt(2, 5); i++){
			
			let left = getRandomInt(0, $(el).outerWidth()),
				top = getRandomInt(0, $(el).outerHeight());

			$(el).find('.js-circles').append('<i class="b-circle" style="margin-left:'+left+'px; margin-top:'+top+'px;"></i>')
		}
	})

	$('.btn, .border-button, .btn-nav').hover(
		e => {
			let $this = $(e.currentTarget);

			$this.find('.b-circle').each((i, circle) => {
				var left = getRandomInt(-$(circle).parent().width()/2, $(circle).parent().outerWidth()),
					top = getRandomInt(-$(circle).parent().outerHeight()/2, $(circle).parent().outerHeight());		


				$(circle).removeAttr('style').removeClass('b-circle_pause').css({
					'margin-left': left+'px',
					'margin-top': top+'px'
				}).addClass('js-start')

			})
		},
		e => {
			let $this = $(e.currentTarget);

			$this.find('.b-circle').addClass('b-circle_pause')
		}
	)

	$('.b-circle').on(transitionEnd, function(e){
		let $this = $(e.currentTarget);

		if($this.hasClass('b-circle_pause'))
			$this.removeAttr('style').removeClass('js-start b-circle_pause')
	});	

})