<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);
$result = count($datos);

$archivo1 = $datos[0];
if ($result == 3)
{
	$idioma1= $datos[1];
	$idioma2= $datos[2];	
}
if($result == 4)
{
	$archivo2 = $datos[1];
	$idioma1= $datos[2];
	$idioma2= $datos[3];	
}
if ($result == 5)
{
	$archivo2 = $datos[1];
	$archivo3 = $datos[2];
	$idioma1= $datos[3];
	$idioma2= $datos[4];
}


$result = $result - 2;

$i = 0;
pg_exec("INSERT INTO proyecto(correo_cliente,estado) VALUES('".$_SESSION['mail']."','ingresado')");	
$consulta=pg_exec("SELECT * FROM proyecto");
$filas=pg_numrows($consulta);
pg_free_result($consulta);	
while ($i != $result)
{
	if ($i == 0)
	{
		pg_exec("INSERT INTO documentos(idioma_original,idioma_destino,nombre_documento,id_proyecto) VALUES('".$idioma1."','".$idioma2."','".$archivo1."','".$filas."')");	
	}
	if ($i == 1)
	{
		pg_exec("INSERT INTO documentos(idioma_original,idioma_destino,nombre_documento,id_proyecto) VALUES('".$idioma1."','".$idioma2."','".$archivo2."','".$filas."')");	
	}
	if ($i == 2)
	{
		pg_exec("INSERT INTO documentos(idioma_original,idioma_destino,nombre_documento,id_proyecto) VALUES('".$idioma1."','".$idioma2."','".$archivo3."','".$filas."')");	
	}
	$i = $i +1;
}

?>