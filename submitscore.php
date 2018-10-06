
<?php
// multiple recipients
$to  = 'kasperpeulen@gmail.com';
$subject = 'send score';
$message = $_GET['score'];
$message2 = $_GET['name'];
mail($to, $subject, $message.$message2, $headers);

?>

<script>
console.log(localStorage.lastLevel);

if (localStorage.lastLevel > 0) {
  window.location.href = "/Level"+localStorage.lastLevel+"/";
}
else {
  window.location.href = "/Tutorial/";
}

</script>