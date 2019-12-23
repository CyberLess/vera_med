$(() =>{
	$(".js-oversized").click(function(){
		$(this).closest(".delivery__field_box").addClass("active");
		return false;
	});
	$(".delivery__sizes-close").click(function(){
		$(this).closest(".delivery__field_box").removeClass("active");
		return false;
	});
})