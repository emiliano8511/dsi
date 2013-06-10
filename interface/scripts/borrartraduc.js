function eliminar_traductor()
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
			//var n= r.split("<id>"); // id de mi sesion
			//var ntraductor = n.length -1; // id de mi sesion  -1 3
			var i = 0;			
			var nombre,i1,i2,p,e,o;
			var mensaje="<table class='table1' border='1' width='100%'>";			
			mensaje +='<tr align="center"><td>Nombre</td><td>Rut</td><td>Mail</td><td>Privilegios</td><td>Boton</td></tr>'


			alert("hi");			
			while (i != 5)
			{
								
				var documentos = n[i].split("<tag>");
							alert(documentos);								
				var ndocumentos = documentos[3];		
				var j = 0;
				mensaje += '<tr valign="center" align="center"><td>'+documentos[0]+'</td><td>'+documentos[1]+'</td><td>'+documentos[2]+'</td>';
				nombre = '';
				i1 = '';
				i2 = '';
				p = '';
				e = '';
				o = '';
				
				i = i+1;
				alert("I am an alert box!");
				while (j != ndocumentos)
				{					
					nombre += documentos[4 + j*6] + '</br>';
					i1 += documentos[5 + j*6] + '</br>';
					i2 += documentos[6 + j*6] + '</br>';
					p += documentos[7 + j*6] + '</br>';
					e += documentos[8 + j*6] + '</br>';
					o += documentos[9 + j*6] + '</br>';
					j= j +1;										
				}
				mensaje += '<td>'+ nombre+'</td><td>'+i1+'</td><td>'+i2+'</td><td>'+p+'</td><td>'+e+'</td><td>'+o+'</td>';
				mensaje += '</tr>';
			}			
			
			
			
			mensaje +="</table>";			
			$("#traductor").html(mensaje);
		}
	}
	xmlhttp.open("GET","../../backend/Borrar_traductor.php",true);	
	xmlhttp.send();
}
	
	



