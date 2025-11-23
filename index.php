<?php
	//TODO: Replace portfolio ID with your Portfolio ID
	$portfolioId	= "9PO5Y6DE3";
	$forwardDomain	= "http://www.searchingredirect.com/";	
	
	
	//
	//
	// DO NOT CHANGE BELOW THIS LINE
	//
	//
	error_reporting(0);
	$domain			= urlencode(isStringSet( safeReturn( $_SERVER, 'SERVER_NAME' ) )?safeReturn( $_SERVER, 'SERVER_NAME' ):safeReturn( $_SERVER, 'HTTP_HOST' ));
	$user_agent		= urlencode(safeReturn( $_SERVER,'HTTP_USER_AGENT'));
	$ipAddress		= urlencode(safeReturn( $_SERVER,'REMOTE_ADDR'));
	$userAgent		= urlencode(safeReturn( $_SERVER,'HTTP_USER_AGENT'));
	$xIP			= urlencode(safeReturn( $_SERVER,'HTTP_X_FORWARDED_FOR' ));
	$originalURL 	= urlencode('http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
	$languageHeader = urlencode($_SERVER['HTTP_ACCEPT_LANGUAGE']);
	$referrer 		= urlencode($_SERVER['HTTP_REFERER']);

	$url = $forwardDomain."sk-park.php?dn=".$domain."&ua=".$userAgent."&requrl=".$originalURL."&al=".$languageHeader."&reqref=".$referrer."&pid=".$portfolioId."&ip=".$ipAddress."&xfip=".$xIP;
	
	try {
		echo getContentUsingCurl($url);
	}
	catch(Exception $e){
		try {
			echo getContentUsingFGet($url);	
		}
		catch(Exception $e){
			header("Location: ".$forwardDomain."/?dn=".$domain."&pid=".$portfolioId."&spfwd=1");
		}
	}
	
	function safeReturn($array, $index)
	{
		return isset($array[$index])? $array[$index] : null;
	}
	function isStringSet($string)
	{
		return (! is_null($string) && $string !== '');
	}
	function getContentUsingCurl( $url )
	{
		if(!function_exists('curl_init'))
		{
			throw new Exception ( 'No curl support' );
		}
		
		$curlResource= curl_init ();
		if (!$curlResource)
		{
			throw new Exception ( 'Not able to initialise curl resource' );
		}
		
		$options = array (
			CURLOPT_CONNECTTIMEOUT => 10,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_MAXREDIRS => 3,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_URL=>$url
		);
		curl_setopt_array ( $curlResource, $options );
		$resultContent = curl_exec($curlResource);
		curl_close($curlResource);
		if(!$resultContent)
		{
			throw new Exception ( 'Not able to fetch response .' );	
		}
		return $resultContent;
	}
	
	function getContentUsingFGet($url)
	{
		if(!function_exists('file_get_contents'))
		{
			throw new Exception ( 'No file_get_contents() support' );
		}
		
		$resultContent = file_get_contents($url);
		if(!isStringSet($resultContent))
		{
			throw new Exception ( 'Not able to fetch response .' );	
		}
		return $resultContent;
	}