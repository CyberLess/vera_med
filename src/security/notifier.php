<?
	$token = "958504324:AAGzMlYTOHYkZb4V_CFiQhrbV1eWsLN4CyY";
	$chat_id = "-391302157";

	$change_file = fopen("change.txt", "r");
	$var = fgets($change_file);
	fclose($change_file);

	function declOfNum($num, $titles) {
	    $cases = array(2, 0, 1, 1, 1, 2);

	    return $titles[($num % 100 > 4 && $num % 100 < 20) ? 2 : $cases[min($num % 10, 5)]];
	}

	if($var == 0 || $var == ''){

		$txt = "За " . date('d.m.Y') . " новых переходов не обнаружено";

	}else{

		$name = "site_watch_log_" . date('d.m.Y');

		$log_gile = file_get_contents("logs/".$name . ".txt");

		$count = substr_count($log_gile, '==========');

		$txt = "За " . date('d.m.Y') . " " . declOfNum($count, array('обнаружен', 'обнаружено', 'обнаружено')) ." " . $count . " ". declOfNum($count, array('новый', 'новых', 'новых')) . " " . declOfNum($count, array('переход', 'перехода', 'переходов')) . " на неизвестные домены!" . " %0A<a href='http://security.karanikola.ru/logs/".$name .".txt?".md5(date("d.m.Y-H:i"))."'>Более подробная информация</a>";
	}


	$change_file = fopen("change.txt", "w");
	fwrite($change_file, 0);
	fclose($change_file);

	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

