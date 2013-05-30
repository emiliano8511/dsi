<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$nombre = $datos[0];
$rut = $datos[1];


$consulta=pg_exec("SELECT * FROM traductor WHERE rut = '".$rut."'");
$filas=pg_numrows($consulta);
pg_free_result($consulta);					
if ($filas == 0)
{
	echo "El Traductor no Existe ";
//	$_SESSION['mail'] = $mail;	
//	$_SESSION['nombre'] = $nombre;	

//	mkdir("../../usuarios/".$mail);

}
else
{
	pg_exec("DELETE FROM traductor WHERE rut = '".$rut."'");
	echo "El Traductor ah sido eliminado.";
}
