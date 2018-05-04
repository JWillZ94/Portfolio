<?php
  if(isset($POST_['submit'])) {
    $to = "jerelwilliams94@aol.com";
    $name = $_POST['name'];
    $from = $_POST['from-email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $email_from = "$from";
    $email_subject = "$subject";
    $email_body = "Message from " . $name . ". The message is:\n" . $message;
    $headers = "From: " . $email_from . "\r\n";
    $retval = mail($to, $email_subject, $email_body, $headers);
    if ( $retval == true ) {
      echo "Message sent successfully.";
    } else {
      echo "Message could not be sent...";
    }
  }
?>
