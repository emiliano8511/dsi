<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$id = $datos[0];

$consulta=pg_exec("SELECT * FROM documentos WHERE id = '".$id."' AND pagado_clientes=true AND pagado_traductores=true");
$filas=pg_numrows($consulta);
pg_free_result($consulta);					

if ($filas == 0 )
{
	
	echo " El proyecto no tiene los suficientes argumentos para marcarse como realizado";

//	mkdir("../../usuarios/".$mail);

}else

{
pg_exec("UPDATE documentos SET  estado='6' WHERE id = '".$id."'");	

	echo " Proyecto Marcado como Realizado";
	
	
	}



?>