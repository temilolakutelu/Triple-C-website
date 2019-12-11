<?php



    $recipient="info@triplecfoundation.com.ng"; //Enter your mail address
    $subject="Website feedback Form "; //Subject 
    $sender=$_POST["name"];
    $senderPhone=$_POST["phone"];
    $senderEmail=$_POST["email"];
    $headers = "From: $senderEmail \r\n";
    $message=$_POST["message"];
    $email_body = "You have received a new feedback message from  Name: $sender\nEmail Address: $senderEmail\nPhone: $senderPhone\n\nMessage: $message";



    
    
    if (mail($recipient, $subject, $email_body, $headers)){
           echo "feedback mail sent successfully";
    }
    else{
        echo "error sending feedback message, Please try again";
    }
 
    // // sleep(1);
    // // header('Location: https://triplecfoundation.com.ng/feedback.html');
    

   











?>