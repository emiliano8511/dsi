<?php

include 'connection.php';
session_start();


$q=$_POST["q"];
$datos = explode("<tag>",$q);

$idioma = strtoupper($datos[0]);


$consulta=pg_exec("SELECT * FROM idiomas WHERE nombre = '".$idioma."'" );

$filas=pg_numrows($consulta);
pg_free_result($consulta);					
if ($filas == 0)
{
	echo "No existe ese Idioma en la base de datos ";

}
else
{
	pg_exec("DELETE FROM idiomas WHERE nombre = '".$idioma."'");
	echo " Idioma Eliminado";
}
