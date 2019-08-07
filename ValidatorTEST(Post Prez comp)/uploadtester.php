<?php
if (isset($_POST['submit'])) {
    $file = $_FILES['file'];

    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];
     
    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('jpg', 'jpeg', 'png', 'pdf');
    
    
    if(!empty($fileName)){
        if(in_array($fileActualExt, $allowed)) {
            if($fileError==0) {
                $fileNameNew = uniqid('', true).".".$fileActualExt;
                $fileDestination = '/var/www/html/ValidatorTEST/uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: uploadtester.php?uploadsuccess");
            }else {
                echo'<script type="text/javascript">alert("There was an error upoading your file!")</script>';
            }
        }
        else{
            echo'<script type="text/javascript">alert("You cannot upload files of this type!")</script>';
        }
    }
    else{
        echo'<script type="text/javascript">alert("Please select a file!")</script>';
    }
}
  

?>
<!DOCTYPE html>
<html>
<head>
    <title>test uploader</title>
</head>
<body>
<form action="uploadtester.php" method="POST" enctype="multipart/form-data">
    <input type="file" name="file">
    <button type="submit" name="submit">UPLOAD</button>
</form>
</body>
</html>
