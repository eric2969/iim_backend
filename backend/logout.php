<?php
session_start();
session_destroy();
header("Location: http://localhost/restaurant/admin_login.html");
?>
