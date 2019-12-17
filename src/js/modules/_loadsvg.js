(() => {
	$(".js-svg").each(function(){
		var svg_src = $(this).data("svg-src");
		$(this).load(svg_src);
	});
})($)