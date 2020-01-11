<?
	$token = "958504324:AAGzMlYTOHYkZb4V_CFiQhrbV1eWsLN4CyY";
	$chat_id = "-391302157";

	$change_file = fopen("change.txt", "r");
	$var = fgets($change_file);
	fclose($change_file);

	if($var == 0 || $var == ''){

		$txt = "За " . date('d.m.Y') . " новых переходов не обнаружено";

	}else{

		$name = "site_watch_log_" . date('d.m.Y');

		$log_gile = file_get_contents("logs/".$name . ".txt");

		$count = substr_count($log_gile, '==========');

		$txt = "За " . date('d.m.Y') . " обнаружено " . $count . " новых перехода на неизвестные домены! %0A<a href='http://security.karanikola.ru/logs/".$name .".txt?".md5(date("d.m.Y-H:i"))."'>Более подробная информация</a>";

	}


	$change_file = fopen("change.txt", "w");
	fwrite($change_file, 0);
	fclose($change_file);

	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

