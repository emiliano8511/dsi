<?php
include 'connection.php';
session_start();
	
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
			$mensaje = $mensaje.'<tag>'.$line['nombre_documento'].'<tag>'.$line['idioma_original'].'<tag>'.$line['idioma_destino'].'<tag>'.$line['precio'].'<tag>'.$line['estado'].'<tag>'.$line['id'];
			$i = $i +1;
		}
		echo '<tag>'.$i.$mensaje;
	}		
	pg_free_result($consulta);	
?>
