<?php
if ($_GET['randomId'] != "h2Nzj69heoi8tYTrd905EhG9RUZ6PmueBf4rjm793q9RBVMOs19S2FqiVg9mk8uB") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
