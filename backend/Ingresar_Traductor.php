<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$nombre = $datos[0];
$rut = $datos[1];
$mail = $datos[2];
$pass = $datos[3];
$admin = $datos[4];

$pass = md5($pass);


$consulta=pg_exec("SELECT * FROM traductor WHERE mail = '".$mail."'");
$filas=pg_numrows($consulta);
pg_free_result($consulta);					

if ($filas == 0 )
{
	
		
	pg_exec("INSERT INTO traductor (nombre,rut,mail,clave,admin) VALUES('".$nombre."','".$rut."','".$mail."','".$pass."','".$admin."')");	
	echo " Traductor Registrado con Exito";
	$_SESSION['mail'] = $mail;	
	$_SESSION['nombre'] = $nombre;	

//	mkdir("../../usuarios/".$mail);

}
else

{
	echo " Error : Usuario ya existe.";
}
