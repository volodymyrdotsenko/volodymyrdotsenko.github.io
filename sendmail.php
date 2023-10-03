<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\ PHPMailer\Exception;
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';



$mail = new PHPMailer (true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage ('en', 'phpmailer/language/');
$mail->IsHTML (true);

//0m кого письмо 
$mail->setFrom('info@fls.guru', 'Фрилансер по жизни') ;
//Кому отправить
$mail->addAddress ('code@fls.guru');
//Тема -письма
$mail->Subject = 'Привет! Это "Фрилансер по жизни"';
//Тело письма
$body = '<h1>Встречайте супер письмо!</h1>';
if(trim(lempty ($_POST ['name']))){ 
	$body.='<p><strong>Имя:</strong>'. $_POST[ 'name']. '</p>';
}
if(trim(lempty ($_POST ['email']))){
$body.='<p><strong>E-mail:</strong>'. $_POST['email'].'</p>';
}
if(trim(!empty($_POST [ 'message']))){
$body.='<p><strong>Сообщение:</strong> ' .$_POST['message']. '</p>';
$mail->Body = $body;
//Отправляем
if (!$mail->send()) {
$message = 'Ошибка';
} else {
$message = 'Данные отправлены!';
}
$response = ['message' => $message];
header ('Content-type: application/ison');
echo json_encode ($response);
 ?>