<?php
	include("connection.php");
	
	echo '<table class="table1"><tr><td>Id Proyecto</td><td>Nombre Documento</td><td>Idioma Origen</td><td>Idioma Destino</td><td></td></tr>';
	
	$consulta="SELECT id,nombre FROM idiomas";
	$idioma[0] = '';	
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{
		$idioma[$line["id"]] = $line["nombre"];				
	}		
	pg_free_result($consulta);	
	
	
	$sql= " select * from documentos where estado=2 ";
	$result = pg_query($sql) or die ('Consulta fallida: ' . pg_last_error());
	while ($row = pg_fetch_array($result, null, PGSQL_ASSOC))			
	{
		$nombre=$row['nombre_documento'];
		$proyec_aux=$row['id'];
		$i_origen=$row['idioma_original'];
		$i_destino=$row['idioma_destino'];
		echo "<tr>";
		echo "<td>".$nombre."</td>";
		echo "<td>".$proyec_aux."</td>";
		echo "<td>".$idioma[$i_origen]."</td>";
		echo "<td>".$idioma[$i_destino]."</td>";		
		echo "<td><input type='text' id='id_documento".$proyec_aux."' size='20' maxlength='15' id='nombre_cliente'/><input type='button' value='Cotizar' onclick='cotizarproyectos(".$proyec_aux.")'/></td>";
		
						
		
		echo "</tr>";
	}
		echo "</table>";
?>