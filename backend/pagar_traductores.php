<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$id = $datos[0];

$consulta=pg_exec("SELECT * FROM documentos WHERE id = '".$id."'");
$filas=pg_numrows($consulta);
pg_free_result($consulta);					

if ($filas == 0 )
{
	
	echo " El documento no existe";

//	mkdir("../../usuarios/".$mail);

}else

{
pg_exec("UPDATE documentos SET  pagado_traductores=TRUE WHERE id = '".$id."'");	

	echo " Documento pagado a los respectivos traductores.";
	
	
	}



?>