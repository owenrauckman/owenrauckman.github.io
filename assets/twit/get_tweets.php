<?php

require_once('twitter_proxy.php');

//Twitter OAuth Config options
$oauth_access_token = '377821979-RmUBILRk5xhBfFWBxnevpbYa4VAJEBhV0sdItiN7';
$oauth_access_token_secret = 'jq1VT0Ig7xWFkxsAG9V0OtnAO4VvOTifdWnSBiN9ncIdh';
$consumer_key = 'zjsWIGtHZX3aHjFGhIkJHsVMy';
$consumer_secret = 'jrhmgHbsUXEFDVk073LF4ZarD1n0IPUNXuZMvj0uGcpYGZT81m';
$user_id = '377821979';
$screen_name = 'owenrauckman';
$count = 2;

$twitter_url = 'statuses/user_timeline.json';
$twitter_url .= '?user_id=' . $user_id;
$twitter_url .= '&screen_name=' . $screen_name;
$twitter_url .= '&count=' . $count;

//Create a Twitter Proxy Object from our twitter_proxy.php class_uses
$twitter_proxy = new TwitterProxy(
  $oauth_access_token,
  $oauth_access_token_secret,
  $consumer_key,
  $consumer_secret,
  $user_id,
  $screen_name,
  $count
);

//Invoke the get method to retrieve results via a cURL request
$tweets = $twitter_proxy->get($twitter_url);

//return json_encode($tweets);
echo $tweets;
?>
