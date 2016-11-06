<?
    $to = "contact@wheelerwhip.com";
    $from = "contact@wheelerwhip.com";
    $subject = "Dealer Contact Us Mail";
    $message = $_REQUEST['contact']. " from:<br> ".$_REQUEST['company']."<br>"."Requested: ".$_REQUEST['request']."<br>Comment was: ".$_REQUEST['comment']."<br> Email: ".$_REQUEST['email'];

    $headers  = "From: $from\r\n";
    $headers .= "Content-type: text/html\r\n";
    mail($to, $subject, $message, $headers);

    header('Location: http://www.wheelerwhip.com/');
?>