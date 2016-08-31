<?php
	include "db.php";
	$id = $_GET['id'];
	$sql = "SELECT * FROM info WHERE id = $id";
	$query = mysqli_query($db_con,$sql);

	$row = mysqli_fetch_assoc($query);

	if(isset($_POST["submit"])){
		$id = $_POST['id'];
		$toolbar = $_POST['toolbar'];
		$title = $_POST['title'];
		$text = $_POST['text'];

		

			$sql = "UPDATE `info` SET `id`='$id',`toolbar`='$toolbar',`title`='$title',`text`=
			'$text' WHERE id=$id";
			$query = mysqli_query($db_con,$sql);

				if($query){
					header("Location:login.php");
				}else{
					echo "fatal  error";
				}

	}
	?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <style >
 		p{
 			color: #AC554E;
 			
 		}
 		.btn a{
			text-decoration: none;
			color: black;
		}
		input{
			border-color:#AC554E !important; 
		}
 		

    </style>
    <body>
	<div class="col-md-offset-1 col-md-11 ">
		<h1>Creat a Customer</h1>
	</div>
	<div class="col-md-offset-1 col-md-11 form-group">
		<form action="" method="POST">
			<div class="row">
				<div class="col-md-offset-1 col-md-2 form-group text-right">
			    	<p>id</p>
			    </div>
			    <div class="col-md-4">
			    	<input type="text" class="form-control" name="id" value="<?=$row['id']?>">
			    </div>
			</div>
			<div class="row">
				<div class="col-md-offset-1 col-md-2 form-group text-right">
			    	<p>toolbar</p>
			    </div>
			    <div class="col-md-4">
			    	<input  value="<?=$row['toolbar']?>" type="text" class="form-control" name="toolbar" placeholder="toolbar">
			    </div>
			</div>
			<div class="row">
				<div class="col-md-offset-1 col-md-2 form-group text-right">
			    	<p>title</p>
			    </div>
			    <div class="col-md-4">
			    	<input  value="<?=$row['title']?>"  type="text" class="form-control" name="title" placeholder="title">
			    </div>
			</div>
			<div class="row">
				<div class="col-md-offset-1 col-md-2 form-group text-right">
			    	<p>text</p>
			    </div>
			    <div class="col-md-4">
			    	<input type="text"  value="<?=$row['text']?>"  class="form-control" name="text" placeholder="text">
			    </div>
			</div>
		<div class="col-md-offset-3">
		<input type="submit" name="submit" value="Create">
		<button type="button" class="btn btn-default"><a href="list.php"> Back </a></button>
			
			
		</form>
	</div>
</body>
</html>

