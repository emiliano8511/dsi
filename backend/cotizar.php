holi

<?php
	include("connection.php");
	$sql= " select * from documentos where estado=NULL ";
	$resp= mysql_query($sql);
	var_dump $resp;
	while($row = mysql_fetch_array($resp))
		{
		$nombre=$row['nombre_documento'];
		$proyec_aux=$row['id_proyecto'];
		$i_origen=$row['idioma_original'];
		$i_destino=$row['idioma_destino'];
		
		echo "nombre: ".$nombre." <br>";
		echo "idioma de origen: ".$i_origen." <br>";
		echo "idioma destino: ".$i_destino." <br>";
		echo "<br>";
		}
		
	?>
	
	
		
