
<?php
// multiple recipients
$to  = 'kasperpeulen@gmail.com';
$subject = 'send score';
$message = $_GET['score'];
$message2 = $_GET['name'];
mail($to, $subject, $message.$message2, $headers);
?>