<?php
include 'connection.php';
session_start();


	$consulta="SELECT id,nombre FROM idiomas";
	$idioma[0] = '';	
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{
		$idioma[$line["id"]] = $line["nombre"];				
	}		
	pg_free_result($consulta);	
	
	$consulta="SELECT id,nombre FROM estado";
	$estado[0] = '';	
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{
		$estado[$line["id"]] = $line["nombre"];				
	}		
	pg_free_result($consulta);	
	
	$consulta="SELECT * FROM proyecto where correo_cliente='".$_SESSION['mail']."'";		
	$result = pg_query($consulta) or die ('Consulta fallida: ' . pg_last_error());
	while ($line = pg_fetch_array($result, null, PGSQL_ASSOC))
	{	
		$i = 0;
		$id = $line["id_proyecto"];
		echo '<id>'.$id.'<tag>'.$line['fecha_entrega'].'<tag>'.$line['precio'];
		$consulta2="SELECT * FROM documentos where id_proyecto ='".$id."'";		
		$result2 = pg_query($consulta2) or die ('Consulta fallida: ' . pg_last_error());		
		$mensaje = '';
		while ($line = pg_fetch_array($result2, null, PGSQL_ASSOC))
		{
			if ($line['estado'] == 2 )
			{
				$line['id'] = "<img src='../images/si.png' height='20' title='Aceptar' onclick='aceptarcotizacion(".$line['id'].");'><img src='../images/no.png' height='20' title='Rechazar' onclick='rechazarcotizacion(".$line['id'].");'>";				
			}
			else if ($line['estado'] == 6 )
			{
				$line['id'] = "<img src='../images/bajar.png' height='20' title='Descargar' onclick='alert(".$line['id'].");'>";				
			}
			else
				$line['id'] = '';
								
			$mensaje = $mensaje.'<tag>'.$line['nombre_documento'].'<tag>'.$idioma[$line['idioma_original']].'<tag>'.$idioma[$line['idioma_destino']].'<tag>'.$line['precio'].'<tag>'.$estado[$line['estado']].'<tag>'.$line['id'];
			$i = $i +1;
		}
		echo '<tag>'.$i.$mensaje;
	}		
	pg_free_result($consulta);	
?>
