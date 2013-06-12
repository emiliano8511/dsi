<?php
	include("connection.php");

	echo '<table border="1">';
	echo '<tr><td>Nombre Documento</td><td>Correo Cliente</td><td>Traductor</td><td>Corrector</td><td>Estado</td><td>Precio</td><td>Opcion</td></tr>';
	echo '<tr>';
	
	$consulta= "SELECT documentos.id as id,documentos.nombre_documento as nombre, proyecto.correo_cliente as correo, documentos.id_traductor as traduct, documentos.id_corrector as correct, documentos.estado as estado, documentos.precio as precio FROM documentos,proyecto, cliente, traductor Where documentos.id_proyecto = proyecto.id_proyecto";
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());	
	while ($linea = pg_fetch_array($result, null, PGSQL_ASSOC))			
	{		
		echo '<tr>';
		echo '<td>'.$linea["nombre"].'</td>';
		echo '<td>'.$linea["correo"].'</td>';
		echo '<td>'.$linea["traduct"].'</td>';
		echo '<td>'.$linea["correct"].'</td>';
		echo '<td>'.$linea["estado"].'</td>';
		echo '<td>'.$linea["precio"].'</td>';
		echo "<td><input type='button' value='Cambiar estado' onclick='cambiarestadopruebaadmin(".$linea["id"].")'/></td>";
		echo '</tr>';
		
	}		
	echo '</tr></table>';
?>