<?php
include 'connection.php';
session_start();

$q=$_POST["q"];


$datos = explode("<tag>",$q);

$id = $datos[0];
$precio = $datos[1];	
	
	pg_exec("UPDATE documentos SET estado=2 ,precio='".$precio."' WHERE id='".$id."';");	
	$consulta=pg_exec("SELECT * FROM proyecto");
?>
