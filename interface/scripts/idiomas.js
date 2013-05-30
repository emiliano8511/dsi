consultar_idiomas();

function consultar_idiomas()
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
			var coincidencias = r.match(/<id>/g); //Busca todas las 'e'
			var cantidad_idiomas = coincidencias ? coincidencias.length : 0;
			
			r= r.replace(/<id>/g,"-");
			r= r.replace(/<nombre>/g,"-");
			
			var elementos = r.split("-"); // 1,3,5... ID		2,4,6... Lenguajes			
			
			var i = 0;
			while (i != cantidad_idiomas)
			{
				var x=document.getElementById("idioma_origen");				
				var option=document.createElement("option");
				option.value= elementos[(2*i) + 1];
				option.text= elementos[(2*i) + 2];
				try
				  {
				  // for IE earlier than version 8
				  x.add(option,x.options[null]);				  
				  }
				catch (e)
				  {
				  x.add(option,null);				  
				  }
				  i = i+1;
			}
			i = 0;
			while (i != cantidad_idiomas)
			{
				var x=document.getElementById("idioma_destino");				
				var option=document.createElement("option");
				option.value= elementos[(2*i) + 1];
				option.text= elementos[(2*i) + 2];
				try
				  {
				  // for IE earlier than version 8
				  x.add(option,x.options[null]);				  
				  }
				catch (e)
				  {
				  x.add(option,null);				  
				  }
				  i = i+1;
			}
		}
	}
	xmlhttp.open("GET","../../backend/ver_idiomas.php",true);	
	xmlhttp.send();
}