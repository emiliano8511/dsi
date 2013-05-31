function generar_orden()
{
	var archivo1;
	var archivo2;
	var archivo3;
	var idioma1;
	var idioma2;
	
	archivo1 = document.getElementById("up").value;
	archivo2 = document.getElementById("up2").value;
	archivo3 = document.getElementById("up3").value;
	idioma1 = document.getElementById("idioma_origen").value;
	idioma2 = document.getElementById("idioma_destino").value;
	
	if ((idioma1 == '0' || idioma2 == '0') || (archivo1 == 'Subir Archivo' && archivo2 == 'Subir Archivo' && archivo3 == 'Subir Archivo' ) || idioma1 == idioma2)
	{
		alert("error");
	}
	else
	{
		var str;
		if (archivo1 != 'Subir Archivo')
		{
			str = archivo1 + '<tag>';
		}
		if (archivo2 != 'Subir Archivo')
		{
			str = str + archivo2 + '<tag>';
		}
		if (archivo3 != 'Subir Archivo')
		{
			str = str + archivo3 + '<tag>';
		}
		str = str + idioma1 + '<tag>' + idioma2;
		
		
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
			}
		}
		xmlhttp.open("POST","../../backend/generar_orden.php",true);	
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.setRequestHeader("Content-type", "text/html; charset=iso-8859-1");
		str = "q="+str;
		xmlhttp.setRequestHeader("Content-length", str.length);		
		xmlhttp.send(str);		
	}
}

function ver_historial_cliente()
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
			var n= r.split("<id>");
			var nproyectos = n.length -1;
			var i = 0;			
			var nombre,i1,i2,p,e,o;
			var mensaje="<table class='table1' border='1' width='100%'>";			
			mensaje +='<tr align="center"><td>Id Proyecto</td><td>Fecha Entrega</td><td>Precio</td><td>Nombre</td><td>Idioma Original</td><td>Idioma Destino</td><td>Precio</td><td>Estado</td><td>Opcion</td></tr>'
			
			while (i != nproyectos)
			{
				i = i+1;				
				var documentos = n[i].split("<tag>");								
				var ndocumentos = documentos[3];		
				var j = 0;
				mensaje += '<tr valign="center" align="center"><td>'+documentos[0]+'</td><td>'+documentos[1]+'</td><td>'+documentos[2]+'</td>';
				nombre = '';
				i1 = '';
				i2 = '';
				p = '';
				e = '';
				o = '';
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
			$("#proyectos").html(mensaje);
		}
	}
	xmlhttp.open("GET","../../backend/ver_historial_cliente.php",true);	
	xmlhttp.send();
}