<?
    $to = "contact@wheelerwhip.com";
    $from = "contact@wheelerwhip.com";
    $subject = "Contact Us Mail";
    $message = $_REQUEST['name']. " said:<br> ".$_REQUEST['comment']."<br>"."You can reach this person by emailing: " . $_REQUEST['email'];

    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    mail($to, $subject, $message, $headers);

    header('Location: http://www.wheelerwhip.com/');
?>