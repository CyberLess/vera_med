$(() => {
	$('.accordion__top').on('click', e => {
		let $this = $(e.currentTarget);

		$this.parent().toggleClass('is-active');
	});
	
	$('.category__title').on('click', e => {
		let $this = $(e.currentTarget);

		$this.parent().toggleClass('is-active');
	});
	
	$(".faq__item").click(function(){
		
		if ( $(this).hasClass("active") ) {
			
			$(this).removeClass("active").find(".faq__content").slideUp(300);
			
		} else {
			
			$(".faq__item.active").removeClass("active").find(".faq__content").slideUp(300);
			
			$(this).addClass("active").find(".faq__content").slideDown(300);
			
		}
		
	});
})