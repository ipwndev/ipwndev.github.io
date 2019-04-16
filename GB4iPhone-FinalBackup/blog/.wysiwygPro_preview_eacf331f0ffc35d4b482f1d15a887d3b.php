<?php
if ($_GET['randomId'] != "R7H8EjJQFfNpwrBJzkoA9SCH1a5bGvLR0_IbDQEkUwW6uBNPg8MS6lgCfcovuNHq") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
