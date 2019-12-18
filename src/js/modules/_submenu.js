import {animationEnd} from '../functions';

$(()=>{
	var $submenu = $('.header__panel');
	var currentOut = false;

	var submenu_close = () => {
		$('.js-submenu').removeClass('is-hover')
		$('html, body').removeClass('js-lock')

		$submenu
			.addClass('is-hide')
			.removeClass(' css-another')
			.on(animationEnd, () => {
				// $submenu.off(animationEnd).removeClass('header__panel_visible is-hide css-another')
				$submenu.off(animationEnd).removeClass('is-hide header__panel_visible')
				$('.header__panel-item').removeClass('header__panel-item_active css-another')


			})
	}

	$(window).on('load resize', () => {
		let ww = $(window).width();

		if(ww <= 1024){

			$('.js-mobile-submenu').each((i, el) => {
				let id = $(el).attr('data-submenu');
				let $submodal = $(id).find('.wrap > *');

				$(el).addClass('is-moved')

				$submodal.appendTo($(el).find('.header__mobile-inner'));
			})

		}else{

			$('.js-mobile-submenu.is-moved').each((i, el) => {
				let id = $(el).attr('data-submenu');
				let $submodal = $(el).find('.header__mobile-inner > *');

				$(el).removeClass('is-moved')

				$submodal.appendTo($(id).find('.wrap'));
			})



		}
	})

	$('.js-mobile-submenu').on('click', (e) => {
		e.preventDefault()

		let $this = $(e.currentTarget)

		$this.toggleClass('is-active').find('.header__mobile-submenu').toggle();


	})

	$('.js-submenu').each((i,el) => {

		let $this = $(el);
		let eventIn = $this.data('event');
		let eventOut = eventIn == 'mouseenter' ? 'mouseleave' : false;
		let $item = $($this.data('menu'))

		$this.on(eventIn, e => {

			currentOut = false;

			let panelItemClass = '';

			if($submenu.hasClass('header__panel_visible')){
				panelItemClass = 'css-another';
			}

			$submenu.off(animationEnd).removeClass('is-hide')

			$('.js-toggle-menu').removeClass('is-active')
			$('.header__mobile').removeClass('is-visible')

			$('html, body').addClass('js-lock')

			if(eventIn != 'click'){
				$submenu.addClass(`header__panel_visible ${panelItemClass}`)
				$('.header__panel-item').removeClass(`header__panel-item_active ${panelItemClass}`)
				$item.addClass(`header__panel-item_active ${panelItemClass}`)
				$this.addClass('is-hover')
			}else{
				// $submenu.toggleClass('header__panel_visible')
				// $('.header__panel-item').removeClass('header__panel-item_active')
				// $item.toggleClass('header__panel-item_active')
				$this.toggleClass('is-hover')

				if(!$this.hasClass('is-hover')){
					submenu_close()				
				}else{
					$submenu.toggleClass(`header__panel_visible ${panelItemClass}`)
					$('.header__panel-item').removeClass(`header__panel-item_active ${panelItemClass}`)
					$item.toggleClass(`header__panel-item_active ${panelItemClass}`)
				}
			}
			

		})

		if(eventOut){
			$this.on(eventOut, e => {
				currentOut = eventOut;

				if($(e.relatedTarget).attr('class').includes('header__panel'))
					//  && !$(e.relatedTarget).hasClass('header__panel-bg')
					return false;

				console.log('event out', e)

				submenu_close()
			})			
		}

	})

	$('.header__panel-item').on('mouseleave', e => {
		if(!currentOut)
			return false;

		submenu_close()
	})

	$('.header__panel-bg').on('click', (e)=>{
		console.log('close')
		// if(!$(e.target).hasClass('header__panel'))
		// 	return false;

		submenu_close()
	})
})