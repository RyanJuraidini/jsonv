<!Doctype html>
<html>
<head>
    <title>Connecting to a Database</title>
</head>
<body>
    <?php 
        $con = mysqli_connect('localhost','admin','ia1mth3wjhp2byrj2019','jsonvalid');       
        
        if($con){
            echo 'Successfully CONNECTED to the database.&nbsp;&nbsp;';
        }
        else{
            die('Error, Could not CONNECT to database.&nbsp;&nbsp;');
        }
    
    ?>
    
    <br />
    <br />
    

   <?php
    
        $con = mysqli_connect('localhost','admin','ia1mth3wjhp2byrj2019','jsonvalid');
        $query= "SELECT * FROM users";
        $result=mysqli_query($con,$query);
    
        while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
            $id = $row['id'];
            $uname = $row['username'];
            
            echo $id . ': ' . $uname . '<br />';
        }
    
        mysqli_free_result($result);
          
      
    ?>
</body>
</html>