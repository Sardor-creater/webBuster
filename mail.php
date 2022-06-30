<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$productName = $_POST['productName'];
$from = 'zakazchik';

$subject = "=?utf-8?B?".base64_encode("Заказ")."?=";
$headers = "From:$from\r\nReply-to:$from\r\nContent-type: text/html; charset=utf-8\r\n";
$message = "Заказ ".$name." ".$phone." ".$productName;

$success = mail("sardor-creater@yandex.com", $subject, $message, $headers);
echo $message;

