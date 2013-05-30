$(document).ready(function(){
	var button = $('#upload_button'), interval;
	new AjaxUpload('#upload_button', {
        action: '../../backend/subir_archivo.php',
		onSubmit : function(file , ext){
		if (! (ext && /^(pdf|docx)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten documentos: pdf y docx');
			// cancela upload
			return false;
		} else {
			document.getElementById('up').value = 'Subiendo';
			this.disable();
		}
		},
		onComplete: function(file, response)
		{
			document.getElementById('up').value = file;						
			//this.enable();									
		}	
	});
});

$(document).ready(function(){
	var button = $('#upload_button2'), interval;
	new AjaxUpload('#upload_button2', {
        action: '../../backend/subir_archivo.php',
		onSubmit : function(file , ext){
		if (! (ext && /^(pdf|docx)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten documentos: pdf y docx');
			// cancela upload
			return false;
		} else {
			document.getElementById('up2').value = 'Subiendo';
			this.disable();
		}
		},
		onComplete: function(file, response)
		{
			document.getElementById('up2').value = file;						
			//this.enable();									
		}	
	});
});

$(document).ready(function(){
	var button = $('#upload_button3'), interval;
	new AjaxUpload('#upload_button3', {
        action: '../../backend/subir_archivo.php',
		onSubmit : function(file , ext){
		if (! (ext && /^(pdf|docx)$/.test(ext))){
			// extensiones permitidas
			alert('Error: Solo se permiten documentos: pdf y docx');
			// cancela upload
			return false;
		} else {
			document.getElementById('up3').value = 'Subiendo';
			this.disable();
		}
		},
		onComplete: function(file, response)
		{
			document.getElementById('up3').value = file;						
			//this.enable();									
		}	
	});
});
