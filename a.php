<html>
<head>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  var id = 23; 
$.ajax({
    type: "POST",
    url: "/B.php",
    data: {email: localStorage.getItem('email')}
    dataType: 'json'
    success: function(result)
    {     
        //document.location.replace('../pages/main.php');
    },
    error: function()
    {
        alert('An Error has occured, please try again.');
    }
});
  });
 </script>
 </head>
 <body>
 <form  >
 <input type="button" id="submit" name="submit"/> 
 </form>
 </body>
 </html>