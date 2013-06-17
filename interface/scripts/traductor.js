function mostrarcotizaciones()
{
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
			$("#muestracotizaciones").html(r);
		}
	}
	xmlhttp.open("GET","../../backend/cotizar.php",true);	
	xmlhttp.send();
}

function cotizarproyectos(id)
{
	var str;
	str = "id_documento"+id;
	valor = document.getElementById(str).value;
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
			mostrarcotizaciones();
		}
	}
	xmlhttp.open("POST","../../backend/realizarcotizaciones.php",true);	
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
	str = "q="+id+"<tag>"+valor;
	xmlhttp.setRequestHeader("Content-length", str.length);		
	xmlhttp.send(str);		
}