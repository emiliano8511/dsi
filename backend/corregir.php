<?php
	include("connection.php");	
	$sql= " select * from documentos where id=5";
	
	$result = pg_query($sql) or die ('Consulta fallida: ' . pg_last_error());
	while ($row = pg_fetch_array($result, null, PGSQL_ASSOC))
		{		
		$nombre=$row['nombre_documento'];
		$proyec_aux=$row['id_proyecto'];
		$i_origen=$row['idioma_original'];
		$i_destino=$row['idioma_destino'];
		$precio= $row['precio'];
		
		echo "nombre: ".$nombre." <br>";
		echo "idioma de origen: ".$i_origen." <br>";
		echo "idioma destino: ".$i_destino." <br>";
		echo "precio: ".$precio." <br>";
		echo "<br>";
		}
		
	?>