function marcar_realizado()
{
	var id;
	var str;

	 
	 
	id = document.getElementById("iddocumento").value;
	
    

	
	if (id == "" )
	{
		alert("Debe Ingresar todos los datos");
	}
	else
	{
		
		
		str = id +  "<tag>" ;		
					
	
		
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
		xmlhttp.open("POST","../../backend/Modifica_realizado.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);		
	}
}


