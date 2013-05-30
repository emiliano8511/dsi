<?php		
session_start();
		$directorio = '../usuarios/'.$_SESSION['mail'].'/';
		$tmpName  = $_FILES['userfile']['tmp_name'];		
		$name = $_FILES['userfile']['name'];		
		$name = $directorio.$name;				
		file_put_contents($name,file_get_contents($tmpName));
		
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) 
{
  echo "success";
} else {
  echo "error";
}
?>