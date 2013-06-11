function agregar_idioma()
{
	var idioma;

	var str;
	

	 
	idioma = document.getElementById("idioma").value;

  
	
   
	if (idioma == "")
	{
		alert("Debe ingresar el idioma");
	}
	else
	{
		 
			
		str = idioma +  "<tag>" ;		
			
			
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
		xmlhttp.open("POST","../../backend/Agregar_idioma.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);		
	}
}


