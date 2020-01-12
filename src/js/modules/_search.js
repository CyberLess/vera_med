(() => {

	$('.search__input').bind('change keyup input click', e => {
		let form = $(e.currentTarget).closest('.search'),
			list = form.find('.search__list'),
			str = $(e.currentTarget).val();

		if(str){
			list
				.addClass('search__list_active')	

			form.addClass('is-active')

			// здесь аякс запрос с получением списка ссылок и встраиванием их в список

			// --------------------- тут ----------------------------

			// а здесь мы из этих полученных ссылок показываем совпадения
			list.find('li').each((i, el) => {
				var text = $.trim($(el).text().toLowerCase());

				if (text.indexOf(str) >= 0){
					$(el)
						.find('a')
						.html(text.replace(str, "<b>" + str + "</b>")); 
				}else{
					$(el)
						.find('a')
						.text(text.replace(/<\/?[^>]+(>|$)/g, ""));
				}
			})		
						
		}else{
			form.removeClass('is-active')

			list
				.removeClass('search__list_active')	
		}

	}).on("focusout", e => {

		var list = $(e.currentTarget).closest('form').find('.search__list');

		list.removeClass('search__list_active');

		$(e.currentTarget).val('')

		$(e.currentTarget).closest('form').removeClass('is-active')

	})

})($)
