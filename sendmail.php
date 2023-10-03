<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\ PHPMailer\Exception;
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';



$mail = new PHPMailer (true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage ('en', 'phpmailer/language/');
$mail->IsHTML (true);
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
 $mail->isSMTP();
  $mail->Host = "smtp.gmail.com";//Сервер SMTP gmail
  $mail->SMTPAuth = true;
  $mail->Username = "alitrade.volodymyr@gmail.com";//В документации Google указано что логин это адрес вместе с собакой
  $mail->Password = "BE6221ai";//Пароль
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;//Указываем что TLS
  $mail->Port = 587;                                   //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

//Recipients
 $mail->setFrom('from@example.com', 'Mailer');
 $mail->addAddress('v.dotsenko@techage.eu', 'Joe User');     //Add a recipient
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');
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