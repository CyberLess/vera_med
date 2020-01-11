<?
	if(
		$_POST['svkey'] !== 'b37954d59afe71d195f621e59f8c6be0' || 
		strpos($_POST['svDm'], 'xn----7sbfkcc2c3a.xn--p1ai') !== false
	)
		die;

	$name = "site_watch_log_" . date('d.m.Y');

	$log_gile = fopen("logs/".$name . ".txt", "a+");

	$log = 
		   date('d.m.Y - H:i') . " "  . "\r\n"
		 . "user IP: " . $_POST['clIp'] . " "  . "\r\n"
		 . "user County: " . $_POST['clCn'] . " "  . "\r\n"
		 . "user City: " . $_POST['clCt'] . " "  . "\r\n"
		 . "user Agent: " . $_POST['clUa'] . " "  . "\r\n"
		 . "server Domain: " . $_POST['svDm'] . " "  . "\r\n"

		 .  "\r\n" . "==========" . "\r\n" . "\r\n";

	fwrite($log_gile, $log);

	fclose($log_gile);


	$change_file = fopen("change.txt", "w");
	fwrite($change_file, 1);
	fclose($change_file);