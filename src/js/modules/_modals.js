$(() => {

	$(document).on('click', '.js-close-modal', (e) =>{
		e.preventDefault();
		$.magnificPopup.close();			
	})

	$(document).on('click', '.js-modal', (e) => {

		e.preventDefault();

		$.magnificPopup.close();

		var	modal = $(e.currentTarget).attr('href') ? $(e.currentTarget).attr('href') : $(e.currentTarget).data('modal');

		var container_class = 'is-modal-open';

		if($(e.currentTarget).attr('data-youtube')){
			$(modal + ' iframe').attr('src', 'https://www.youtube.com/embed/'+$(e.currentTarget).data('youtube')+'?autoplay=1&showinfo=0&rel=0&controls=0')
		}

		if($(e.currentTarget).attr('data-input')){
			$(modal + ' input[name="form"]').val($(e.currentTarget).data('input'))
		}

		$.magnificPopup.open({
			tClose: 'Закрыть',
			removalDelay: 600,
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'hidden',			
			closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close close" viewBox="0 0 612 612"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
			mainClass: 'css-modal-animate',				
			items: {
				src: modal,
				type: 'inline'
			},
			callbacks: {
				beforeOpen: () => {
					$('body').addClass(container_class)
				},
				beforeClose: () => {
					$('body').removeClass(container_class)
				}
			}
		}, 0);
	});
	$('.sertificate__list').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return '<small>' + item.el.attr('title') + '</small>';
			}
		}
	});
})