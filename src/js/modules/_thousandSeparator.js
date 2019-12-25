import {thousandSeparator} from '../functions';

$(() =>{

    if(!$('.js-thousand').length)
        return false;
    
	$(".js-thousand").keyup(function(){
		
		var this_val = $(this).val();
		
        this_val = this_val.replace(/[^+0-9]/gim,'');
		this_val = thousandSeparator(this_val);
		
		$(this).val(this_val);
		$(this).attr("data-value", this_val.replace(/\s+/g,''));
		
	});
})