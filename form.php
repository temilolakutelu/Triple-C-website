<?php



    $recipient="info@triplecfoundation.com.ng"; //Enter your mail address
    $subject="Website Contact Form "; //Subject 
    $sender=$_POST["name"];
    $senderSubject=$_POST["subject"];
    $senderEmail=$_POST["email"];
    $headers = "From: $senderEmail \r\n";
    $message=$_POST["comment"];
    $email_body = "You have received a new contact message from  Name: $sender\nEmail Address: $senderEmail\nSubject: $senderSubject\n\nMessage: $message";



    
    
    if (mail($recipient, $subject, $email_body, $headers)){
           echo "contact mail sent successfully";
    }
    else{
        echo "error sending contact message, Please try again";
    }
 
    // // sleep(1);
    // // header('Location: https://triplecfoundation.com.ng/contact.html');
    

   











?>