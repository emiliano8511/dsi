<?php

include 'connection.php';
session_start();


	$consulta="SELECT nombre,rut,mail,admin FROM traductor";
	$idioma[0] = '';	
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{
	 echo $result;	
		
		$idioma[$line["nombre"]] = $line["rut"];				
	}		
	pg_free_result($consulta);	
 		echo '<tag>'.$result;

//$consulta=pg_exec("SELECT * FROM traductor WHERE rut = '".$rut."'");
//$filas=pg_numrows($consulta);
//pg_free_result($consulta);					
//if ($filas == 0)
//{
//	echo "El Traductor no Existe ";

//}
//else
//{
//	pg_exec("DELETE FROM traductor WHERE rut = '".$rut."'");
//	echo "El Traductor ah sido eliminado.";
//}
