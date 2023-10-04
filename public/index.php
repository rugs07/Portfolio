<?php
    $Fullname = $_POST['Fullname'];
    $emailAddress = $_POST['emailAddress'];
    $MobileNumber = $_POST['MobileNumber'];
    $EmailSubject = $_POST['EmailSubject'];
    $YourMessage = $_POST['YourMessage'];

    //database connection
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $database = "portfolio"; // Change this to your actual database name
    // $port = 3307; // Specify the port number

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    if($conn->connect_error){
        die('Connection failed : ' .$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registration(Fullname,emailAddress,MobileNumber,EmailSubject,YourMessage)values(?,?,?,?,?)");
        $stmt->bind_param("ssiss",$Fullname, $emailAddress,$MobileNumber,$EmailSubject,$YourMessage);
        $stmt->execute();
        $stmt->close();
        $conn->close();
    }
?>
