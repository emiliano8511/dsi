<?php
include 'connection.php';
session_start();

$q=$_POST["q"];
$datos = explode("<tag>",$q);

$pass = $datos[0];
$mail = $datos[1];

$pass = md5($pass);

$consulta=pg_exec("SELECT * FROM cliente WHERE mail = '".$mail."' AND clave = '".$pass."'");
$filas=pg_numrows($consulta);

if ($filas == 1){
	$_SESSION['mail'] = $mail;		
	$_SESSION['usuario'] = 'cliente';		
	echo "exito";
}
else{

$consulta=pg_exec("SELECT * FROM traductor WHERE mail = '".$mail."' AND clave = '".$pass."' AND admin = TRUE ");

$filas=pg_numrows($consulta);

if ($filas == 1){
$_SESSION['mail'] = $mail;		
	$_SESSION['usuario'] = 'admin';		
	echo "exito admin!";
}
else {
	 echo "no";
	}
	
}
	
pg_free_result($consulta);	

?>