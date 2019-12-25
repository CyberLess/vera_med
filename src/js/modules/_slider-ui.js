(()=>{

	$('.js-slider-ui').each(() => {
		
		var thousandSeparator = function(str) {
			var parts = (str + '').split('.'),
				main = parts[0],
				len = main.length,
				output = '',
				i = len - 1;

			while(i >= 0) {
				output = main.charAt(i) + output;
				if ((len - i) % 3 === 0 && i > 0) {
					output = ' ' + output;
				}
				--i;
			}

			if (parts.length > 1) {
				output += '.' + parts[1];
			}
			return output;
		};
		
		var price_from = $(".js-price-from").attr("data-value");
		var price_to = $(".js-price-to").attr("data-value");
		
		var min = $('.js-slider-ui').attr("data-min");
		var max = $('.js-slider-ui').attr("data-max");

		$( ".js-slider-ui" ).slider({
		  range: true,
		  min: min,
		  max: max,
		  values: [ price_from, price_to ],
		  slide: function( event, ui ) {
			 $(".js-price-from").attr("data-value", ui.values[ 0 ] ).val( thousandSeparator( ui.values[ 0 ] ) );
			 $(".js-price-to").attr("data-value", ui.values[ 1 ] ).val( thousandSeparator( ui.values[ 1 ] ) );
		  }
		});	
		
		$(".js-price-from, .js-price-to").blur(function(){
			
			var price_from = $(".js-price-from").attr("data-value");
			var price_to = $(".js-price-to").attr("data-value");
			
			var this_val = $(this).attr("data-value");
			$( ".js-slider-ui" ).slider({
				values: [ price_from, price_to ]
			});
			
		});
		
	});


})($)