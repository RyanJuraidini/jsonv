<?php
    $con = mysqli_connect('localhost','admin','ia1mth3wjhp2byrj2019','jsonvalid');

   if(isset($_POST['username'])){
        
        $uname=$_POST['username'];
        $pass=$_POST['password'];
        
        $sql = "SELECT * FROM users WHERE username='".$uname."' AND password= '".$pass."' limit 1";
            
        $result=mysqli_query($con,$sql);
       
        if(mysqli_num_rows($result)==1 AND $uname=="admin"){
            header("Location: php/ves_json_validator_tool_admin.php");
            exit();
        }
       elseif(mysqli_num_rows($result)==1){
           header("Location: php/ves_json_validator_tool.php");
            exit();
        }
        elseif(mysqli_num_rows($result)==0){
             //header("Location: #");
            // exit();
            echo'<script type="text/javascript">alert("Login Error")</script>';
        }
       else{
           header("Location: #");
            exit();
       }
            
    }
       
        

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd"> 
<html lang="en">
<head>
	<title>Nokia-VES JSON Validator tool</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->	
	<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================
    <link rel="stylesheet" type="text/css" href="css/normalize.css">-->
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
<!--===============================================================================================
    
   <![if gte (IE 6)]>
 <link rel="stylesheet" type="text/css" href="css/login_main_IE.css">
 <link rel="stylesheet" type="text/css" href="css/login_util.css">
 <![endif]>
    
   <![if  !IE]>
    <link rel="stylesheet" type="text/css" href="css/login_util.css">
	<link rel="stylesheet" type="text/css" href="css/login_main.css"> 
 <![endif]>
	 
<!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="css/login_util.css">
	<link rel="stylesheet" type="text/css" href="css/login_main.css"> 
<!--===============================================================================================-->
    <script>
function myFunction()
{
alert("I am an alert box!"); // this is the message in ""
}
</script>
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
                    <!--yaseeme-->
    
				 <form method="POST" action="#">
					<div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
						<input class="input100" type="text" name="username">
						<span class="focus-input100" data-placeholder="Username"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input class="input100" type="password" name="password">
						<span class="focus-input100" data-placeholder="Password"></span>
					</div>
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								Login
							</button>
						</div>
					</div>
                </form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
	
<!--===============================================================================================-->
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
	<script src="vendor/daterangepicker/moment.min.js"></script>
	<script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
	<script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
	<script src="js/login_main.js"></script>

</body>
</html>