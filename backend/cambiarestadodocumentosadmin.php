<?php
include 'connection.php';
session_start();

$id=$_GET["q"];
echo $id;

pg_exec("UPDATE documentos SET estado=2 WHERE id=".$id.";");	

?>