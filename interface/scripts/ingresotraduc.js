function ingresar_traductor()
{
	var nombre;
	var rut;
	var correo;
	var clave;
	var admin
	var str;

	 
	 
	nombre = document.getElementById("NombreTraductor").value;
	rut = document.getElementById("RutTraductor").value;
    correo = document.getElementById("MailTraductor").value;
	clave = document.getElementById("ClaveTraductor").value;
	admin =  document.getElementById("valoradmin").value;
    

	
	if (nombre == "" || rut == "" || clave == "" || correo == "")
	{
		alert("Debe Ingresar todos los datos");
	}
	else
	{
		
		
		str = nombre +  "<tag>" + rut +  "<tag>" + correo +  "<tag>" + clave +  "<tag>" + admin ;		
					
	
		
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
			}
		}
		xmlhttp.open("POST","../../backend/Ingresar_Traductor.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);		
	}
}


