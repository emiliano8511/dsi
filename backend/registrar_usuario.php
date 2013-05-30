<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$nombre = $datos[0];
$pass = $datos[1];
$tel = $datos[2];
$mail = $datos[3];

$pass = md5($pass);

$consulta=pg_exec("SELECT * FROM cliente WHERE mail = '".$mail."'");
$filas=pg_numrows($consulta);
pg_free_result($consulta);					
if ($filas == 0)
{
	pg_exec("INSERT INTO cliente(nombre,contacto,mail,clave) VALUES('".$nombre."','".$tel."','".$mail."','".$pass."')");	
	echo "ok";
	$_SESSION['mail'] = $mail;	
	$_SESSION['nombre'] = $nombre;	
	mkdir("../usuarios/".$mail);
}
else
{
	echo "error";
}
?>