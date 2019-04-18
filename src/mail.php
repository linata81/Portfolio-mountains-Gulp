<?php

$recepient = "linata81@gmail.com";
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$text = "Имя: $name \nE-mail: $email \nСообщение: $message";
$pagetitle = "Оставили заявку";

mail($recepient, $pagetitle, $text, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>