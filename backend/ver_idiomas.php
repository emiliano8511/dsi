<?php
include 'connection.php';
session_start();

	$consulta="SELECT id,nombre FROM idiomas";
		
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{
		echo "<id>";
		echo $line["id"];		
		echo "<nombre>";
		echo $line["nombre"];					
	}		
	pg_free_result($consulta);	
?>
