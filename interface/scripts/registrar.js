function registrar_usuario()
{
	var nombre;
	var clave;
	var telefono;
	var correo;
	var str;
	
	nombre = document.getElementById("nombre_cliente").value;
	clave = document.getElementById("pass").value;
	telefono = document.getElementById("telefono").value;
	correo = document.getElementById("correo").value;
	
	if (nombre == "" || clave == "" || telefono == "" || correo == "")
	{
		alert("Debe Ingresar todos los datos");
	}
	else
	{	
		str = nombre +  "<tag>" + clave +  "<tag>" + telefono +  "<tag>" + correo;		
		
		var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();		
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");		
		}
		xmlhttp.onreadystatechange=function()
		{		
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{							
				var r = xmlhttp.responseText;
				alert (r);
				if (r == "error")
				{
					alert ("Existe una cuenta con el mismo correo, error");
				}
				else
				{
					location.href="index.html";
				}
				
			}
		}
		xmlhttp.open("POST","../../backend/registrar_usuario.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);		
	}
}

function logear_usuario()
{	
	var clave;
	var correo;
	var str;
		
	clave = document.getElementById("pass").value;	
	correo = document.getElementById("correo").value;
	
	if (clave == "" || correo == "")
	{
		alert("Debe Ingresar todos los datos");
	}
	else
	{	
		str = clave + "<tag>" + correo;		
		
		var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();		
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");		
		}
		xmlhttp.onreadystatechange=function()
		{		
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{							
				var r = xmlhttp.responseText;
				if (r == "no")				
				{
					alert ("Usuario y contraseña no coinciden");
				}
				else
				{
					location.href="index.html";
				}
			}
		}
		xmlhttp.open("POST","../../backend/loguear_usuario.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);			
	
	
	
	
	
	}
}