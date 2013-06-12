function ver_registrosdedocumentos()
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
			$("#verelregistro").html(r);
		}
	}
	xmlhttp.open("GET","../../backend/verregistrosadmin.php",true);	
	xmlhttp.send();
}

function cambiarestadopruebaadmin(id)
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
			alert (r);
			ver_registrosdedocumentos();
		}
	}
	xmlhttp.open("GET","../../backend/cambiarestadodocumentosadmin.php",true);	
	xmlhttp.send("q="+id);	
}