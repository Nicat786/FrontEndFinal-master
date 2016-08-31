

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 


	$img = $_FILES['UploadFile']['name'];
	$target_dir = "images/";
	$target_file = $target_dir.basename($_FILES['UploadFile']['name']);

	move_uploaded_file($_FILES['UploadFile']['tmp_name'], $target_file);




?>
<img src="images/<?= $img ?>">
</body>
</html>

