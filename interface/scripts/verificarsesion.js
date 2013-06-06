verificarsesion();
function verificarsesion()
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
			if (r == '')
			{
				location.href="unwin.html";
			}
		}
	}
	xmlhttp.open("GET","../../backend/verificarsesion.php",true);	
	xmlhttp.send();
}

function logout()
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
			if (r == '')
			{
				location.href="unwin.html";
			}
		}
	}
	xmlhttp.open("GET","../../backend/logout.php",true);	
	xmlhttp.send();
}