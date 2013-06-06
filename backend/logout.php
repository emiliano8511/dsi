<?php
include 'connection.php';
session_start();

unset ($_SESSION['mail']);
unset ($_SESSION['usuario']);

session_destroy();


?>