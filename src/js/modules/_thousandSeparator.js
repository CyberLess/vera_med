$(() =>{
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
	$(".js-thousand").keyup(function(){
		var this_val = $(this).val();
        this_val = this_val.replace(/[^+0-9]/gim,'');
		this_val = thousandSeparator(this_val);
		$(this).val(this_val);
	});
})