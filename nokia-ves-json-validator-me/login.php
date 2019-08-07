<?php
    $con = mysqli_connect('localhost','admin','ia1mth3wjhp2byrj2019','jsonvalid');

   if(isset($_POST['username'])){
        
        $uname=$_POST['username'];
        $pass=$_POST['password'];
        
        $sql = "SELECT * FROM users WHERE username='".$uname."' AND password= '".$pass."' limit 1";
                                    
        $result=mysqli_query($con,$sql);
        
        if(mysqli_num_rows($result)==1){
           echo "Successfully logged in!";
          exit();
        }
        else{
              echo "Incorrect login...";
              exit();
        }
       
    }
        

?>

<!DOCTYPE html>
<html>
<head>
     <title>Nokia-VES JSON Validator tool</title>
    
     <!--<link rel="stylesheet" type="text/css" href="style.css-->
    	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/nokia-logo.ico"/>
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->	
	<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
	<link rel="stylesheet" type="text/css" href="css/login_util.css">
	<link rel="stylesheet" type="text/css" href="css/login_main.css">
<!--===============================================================================================-->
    
</head>
<body>
    <div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				
					<span class="login100-form-title p-b-26">
						VES JSON Validator tool 
					</span>
					<span class="login100-form-title p-b-48">
						<img src="./images/nokialogo.jpg" alt="Nokia" style="width: 280px;height: 60px;">
					</span>
      <form method="POST" action="process.php">
		<div class="form-input">
		<input type="username" name="username" placeholder="Enter the User Name"/>	
		</div>
           <br />
		<div class="form-input">
		<input type="password" name="password" placeholder="password"/>
		</div>
               <br />
               <br />
		<input type="submit" type="submit" value="LOGIN" class="btn-login"/>
	 </form>
                
			</div>
		</div>
	</div>
    

</body>
</html>