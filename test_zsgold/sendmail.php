<?php
     
     use PHPmailer\PHPMailer\PHPMailer;
     use PHPmailer\PHPMailer\Exception;

     require 'phpmailer/src/Exception.php';
     require 'phpmailer/src/PHPMailer.php';


     $mail = new PHPMailer(true);
     $mail -> CharSet = 'UTF-8';
     $mail -> setLanguage('ru', 'phpmailer/language/');
     $mail -> IsHTML(true);

     $mail -> setFrom ('admin@zsgold.ru', 'Форма связи с сайта ZSGOLD');
     $mail -> addAddress('v.dotsenko@techage.eu');
     $mail -> Subject = 'Заполнена форма контакта на сайте!';


     $body = '<h1> Заполнена форма контакта на сайте "Золотой Стандарт"!</h1>';

     if(trim(!empty($_POST['name']))){
     	$body .= '<p><strong>Имя:</strong> '.$_POST['name'].' </p>';
     }
     if(trim(!empty($_POST['email']))){
     	$body .= '<p><strong>E-mail:</strong> '.$_POST['email'].' </p>';
     }
     if(trim(!empty($_POST['phone']))){
     	$body .= '<p><strong>Телефон:</strong> '.$_POST['phone'].' </p>';
     }
     if(trim(!empty($_POST['city']))){
     	$body .= '<p><strong>Город:</strong> '.$_POST['city'].' </p>';
     }
     if(trim(!empty($_POST['material']))){
     	$body .= '<p><strong>Материал:</strong> '.$_POST['material'].' </p>';
     }
     if(trim(!empty($_POST['probe']))){
     	$body .= '<p><strong>Проба:</strong> '.$_POST['probe'].' </p>';
     }
     if(trim(!empty($_POST['weight']))){
     	$body .= '<p><strong>Вес:</strong> '.$_POST['weight'].' </p>';
     }
     $jewelery="Нет драгоценных камней";
     if($_POST['stones']=='on'){
     	$jewelery="Есть драгоценные камни";
     }
     if(trim(!empty($_POST['stones']))){
     	$body .= '<p><strong>Наличие камней:</strong> '.$jewelery.' </p>';
     }



     if(!empty($_FILES['image']['tmp_name'])) {

     	$filePath = __DIR__ ."/files/". $_FILES['image']['name'];
     	if (copy($_FILES['image']['tmp_name'],$filePath)){
     		$fileAttach = $filePath;
     		$body.='<p><strong>Фото изделия: </strong>';
     		$mail->addAttachment($fileAttach);
     	}
     }

     $mail->Body=$body;

     if( !$mail->send()){
     	$message = 'Ошибка';
     } else {
     	$message = 'Данные отправлены!';
     }


     $response = ['message' => $message];
     header('Content-type: application/json');
     echo json_encode($response);
?>

