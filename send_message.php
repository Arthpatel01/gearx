<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "arthpatelbooks@gmail.com.com"; // Change to the recipient's email address
    $subject = "Contact Form Submission"; // Change to your subject
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $name <$email>";

    if (mail($recipient_email, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
} else {
    echo "Invalid request.";
}
?>
