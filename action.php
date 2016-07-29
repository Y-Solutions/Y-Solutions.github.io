<?php 
	$body ='';
	$type=$_POST['type'];
	if($type==='contact'){
		$body='<p style="font-size:16px"><b>Type: </b>Contact sales<br><b>Mail: </b>'.$_POST['mail'].'<br><b>Service: </b>'.$_POST['service'].'<br><b>Description: </b>'.$_POST['desc'];
	}
	else if($type==='opinion'){
		$body='<p style="font-size:16px"><b>Type: </b>Opinion<br><b>Mail: </b>'.$_POST['mail'].'<br><b>Title: </b>'.$_POST['title'].'<br><b>Description: </b>'.$_POST['desc'];
	}
	else if($type==='apply'){
		move_uploaded_file($_FILES["attach"]["tmp_name"], 'uploads/'. basename($_FILES["attach"]["name"]));
		$body='<p style="font-size:16px"><b>Type: </b>Apply for a job<br><b>Cover letter: </b>'.$_POST['desc'].'<br><b>Attachment: </b><a href="http://locadifferent.com/uploads/'. basename($_FILES["attach"]["name"]).'">'.basename($_FILES["attach"]["name"]).'</a>';
	}
	else{
		$body='<p style="font-size:16px"><b>Type: </b>Download prices list<br><b>Name: </b>'.$_POST['name'].'<br><b>Mail: </b>'.$_POST['mail'].'<br><b>Company Name: </b>'.$_POST['comp'].'<br><b>Job Title: </b>'.$_POST['title'].'<br><b>Description: </b>'.$_POST['desc'];
		header('Content-Description: File Transfer');
	    header('Content-Type: application/octet-stream');
	    header('Content-Disposition: attachment; filename="'.basename('pdfs/prices.pdf').'"');
	    header('Expires: 0');
	    header('Cache-Control: must-revalidate');
	    header('Pragma: public');
	    header('Content-Length: ' . filesize('pdfs/prices.pdf'));
	    readfile('pdfs/prices.pdf');
	}

require_once('class.phpmailer.php'); require_once('class.smtp.php');

$to = "amr.azzam@locadifferent.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->IsHTML(true);
$mail->SMTPAuth   = true;
$mail->Host       = "smtp.gmail.com";
$mail->Port       = 587;
$mail->Username   = "yackeensolutions@gmail.com";
$mail->Password   = "Allah1akbar";
$mail->SMTPSecure = 'tls';
$mail->SetFrom('yackeensolutions@gmail.com', $name);
$mail->Subject    = '[locadifferent][Website]';
$mail->MsgHTML($body);
$mail->AddAddress($to);
$mail->send();
header("Location: /");
?>