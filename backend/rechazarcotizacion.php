<?php
	include 'connection.php';
	session_start();

	$id=$_POST["q"];
	echo $id;
	
	pg_exec("UPDATE documentos SET estado=4 WHERE id='".$id."';");	
	$consulta=pg_exec("SELECT * FROM proyecto");
?>