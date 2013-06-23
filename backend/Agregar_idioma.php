<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$idioma = strtoupper($datos[0]);


$consulta=pg_exec("SELECT * FROM traductor WHERE mail = '".$idioma."'");
$filas=pg_numrows($consulta);
					

if ($filas == 0 )
{
	
		
	pg_exec("INSERT INTO idiomas (nombre) VALUES('".$idioma."')");	
	echo " Idioma Ingresado";
	

//	mkdir("../../usuarios/".$mail);

}
else

{
	echo " Error : el Idioma ya existe";
}
pg_free_result($consulta);