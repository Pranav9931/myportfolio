<!DOCTYPE html>
<html>
<head>
	<title>Submitting Your Request - Pranav Kumar Portfolio</title>
	<style type="text/css">
		@import url('https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap');

		*
		{
			padding:0px;
			margin:0px;
		}
		html, body
		{
			width:100%;
			height:100%;
			padding: 0px;
			margin:0px;
		}
		body
		{
			font-family: 'Bebas Neue', sans-serif;
			text-align: center;
			font-size: 5vw;
		}
	</style>
</head>
<body>

<br>
<br>
<?php
	$Name = $_POST['name'];
	$Phone = $_POST['phone'];
	$Email = $_POST['emial'];

	$host = 'sql103.epizy.com';
	$username = ''; //User Name here
	$password = ''; //Password Here
	$database = ''; //Your Database Name
	if (!$conn = mysqli_connect("$host" , "$username" , "$password" , "$database")) {
		echo "Not Connected To The Server<br>";
	}
	else{
		echo "";
	}

	$sql = "INSERT INTO Data(Name , Phone , Email) values('$Name' , '$Phone' , '$Email')";
	if (!mysqli_query($conn, $sql)) {
		echo "Unable to Process Your Request";
	}
	else{
		echo "Your data is stored<br>";
		echo "We will try to contact you within 24 hours<br>
		You will get an email very soon";
		header('Refresh:4; url=https://Pranav9931.github.io/portfolio/index.html');
	}
?>

</body>
</html>
