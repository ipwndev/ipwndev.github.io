<?php
if ($_GET['randomId'] != "EjcEFx7n51wRNbAiupn0xvR8YvTDIsAwyCF57bxNByOhFfjV8GH8HqYHyib4voNa") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
