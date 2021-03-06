(()=>{

	if(!$('.select').length)
		return false;

	$('.select__label').on('click', e => {
		let $select = $(e.currentTarget).closest('.select');

		$select.toggleClass('is-active')
	})

    $('.select__list-item').on('click', e => {
        let select = $(e.currentTarget).closest('.select');
        let input = select.find('.select__input');
        let label = $.trim($(e.currentTarget).text());
        let val = $(e.currentTarget).attr('data-value') ? $(e.currentTarget).data('value') : label;

        select.find('.select__list-item').removeClass('is-selected')
        $(e.currentTarget).addClass('is-selected')

        select.removeClass('is-active')
        select.find('.select__label span').text(label)
        input.val(val)
    })

    $(window).on('load resize', () => {
    	let ww = $(window).width();

    	if(ww <= 580){
    		$('.select').each((i, el) => {
    			let help_width = $(el).find('.select__text').width() + 30

    			console.log('width', help_width)

    			$(el).find('.select__label').css('padding-left', `${help_width}px`)
    		})
    	}else{
    		$('.select__label').removeAttr('style')
    	}

    })

    $(document).mouseup(function(e) {
        var container = $(".select__wrapper");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.closest('.select').removeClass('is-active');
        }
    });  

})($)