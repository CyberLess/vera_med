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
	


	if ( $(window).width() > 580 ) {
		$('.js-gallery').each(function(){
			$(this).magnificPopup({
				delegate: 'a:not(.swiper-slide-duplicate)',
				type: 'image',
				autoFocusLast: false,
				tLoading: 'Loading image #%curr%...',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,2],
					arrowMarkup: `<div class="btn-wrap btn-wrap_%dir%"><div class="btn-nav btn-nav_%dir% btn-nav_white">
                                <div class="btn-nav__icon">
                                    <svg class="icon icon-arrow2" viewBox="0 0 9 17">
                                        <use xlink:href="/app/icons/sprite.svg#arrow2"></use>
                                    </svg>
                                </div>
                            </div></div>`,
					tCounter: '<span>%curr%' + '/</span>%total%'
				},
				image: {
					markup: '<div class="mfp-figure">'+
								'<div class="mfp-close"></div>'+
								'<div class="mfp-img"></div>'+
								'<div class="mfp-bottom-bar">'+
								  '<div class="mfp-title h6"></div>'+
								  '<div class="mfp-counter"></div>'+
								'</div>'+
							  '</div>', 

					  cursor: 'mfp-zoom-out-cur', 

					  titleSrc: 'title', 

					  verticalFit: true,

					  tError: '<a href="%url%">The image</a> could not be loaded.'
				}
			});
		});

		$('a.swiper-slide-duplicate').on('click', e => {
			e.preventDefault();

			let $this = $(e.currentTarget);
			let $gallery = $this.closest('.js-gallery');
			let index = $this.data('swiper-slide-index');

			$gallery.magnificPopup('open').magnificPopup('goTo', index);
		})
	} else {
		$('.js-gallery a').click(function(){
			$(this).attr("href", "#");
			return false;
		});
	};
	
	// if ( $(window).outerWidth() > 769 ) {
	// 	$('.fotogallery__list').each(function(){
	// 	  var gallery = $(this);
	// 	  var galleryImages = $(this).find('.fotogallery__slide').not(".fotogallery__slide.swiper-slide-duplicate");
	// 	  var items = [];
	// 	  for(var i=0;i<galleryImages.length; i++){
	// 		items.push({
	// 		  src:$(this).find('.fotogallery__slide[data-swiper-slide-index="' + i + '"]').attr('href'),
	// 		  title:$(this).find('.fotogallery__slide[data-swiper-slide-index="' + i + '"]').attr('title')
	// 		});
	// 	  }
	// 	  gallery.magnificPopup({
	// 		mainClass: 'mfp-fade',
	// 		items:items,
	// 		tLoading: 'Loading image #%curr%...',
	// 		gallery: {
	// 			enabled: true,
	// 			navigateByImgClick: true,
	// 			preload: [0,1],
	// 			tCounter: '<span>%curr%' + '/</span>%total%'
	// 		},
	// 		type: 'image',
	// 		image: {
	// 			markup: '<div class="mfp-figure">'+
	// 						'<div class="mfp-close"></div>'+
	// 						'<div class="mfp-img"></div>'+
	// 						'<div class="mfp-bottom-bar">'+
	// 						  '<div class="mfp-title middle"></div>'+
	// 						  '<div class="mfp-counter"></div>'+
	// 						'</div>'+
	// 					  '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

	// 			  cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

	// 			  titleSrc: 'title',

	// 			  verticalFit: true, // Fits image in area vertically

	// 			  tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
	// 		}
	// 		/*callbacks: {
	// 		  beforeOpen: function() {
	// 			alert(index);
	// 			if (-1 !== index) {
	// 			  this.goTo(index);
	// 			}
	// 		  }
	// 		}*/

	// 	  });
	// 	});
	// } else {
	// 	$('.fotogallery__list a').click(function(){
	// 		$(this).attr("href", "#");
	// 		return false;
	// 	});
 //  	};
	
	$('.js-img-modal').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: false,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
})