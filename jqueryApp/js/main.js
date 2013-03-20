// Eric Mareth
// ASD 1303
// Character Note CRUD Application

$('#addImage').on('pageinit', function(){
	
	var imageForm = $('#newImage'),
		errorDialog = $('#errorDialog')
	;
	imageForm.validate({
		invalidHandler: function(form, validator){
			errorDialog.click();
			var html = '';
			for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#formErrors p").html(html);
		},
		submitHandler: function(){
			var data = imageForm.serializeArray();
			storeData(data);
		}	
	});
	
});

$('#allImages').on('pageinit', function(){
	for(i=0, length=localStorage.length; i<length; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		for(var n in obj){
			var info = obj[n][0] + "  " + obj[n][1];
			$('<li>'+ info +'</li>')
				.appendTo('#records')
		};
	}
});

var storeData = function(data){
	var id				= $('#imgNum').val();
	var	done			= $('#main')
	var item			= {};
		item.number		=["Image Number:", $('#imgNum').val()];
		item.subject	=["Subject:", $('#subject').val()];
		item.iso		=["ISO:", $('input:radio[name=iso]:checked').val()];
		item.fstop		=["fStop/Aperture:", $('#fstop').val()];
		item.shutter	=["Shutter Speed:", $('#shutter').val()];
		item.setting	=["Camera Setting:", $('#setting').val()];
		item.date		=["Date Taken:", $('#date').val()];
		
	localStorage.setItem(id, JSON.stringify(item));
	alert("Your image has been added.");
	done.click();
};

$('#clearAll').on("click", function(){
	if(localStorage.length === 0){
		alert("There are no images to clear.");
	}else{
		var ask = confirm("Are you sure you want to delete all?")
		if(ask){
			localStorage.clear();
			window.location.reload();
			alert("All images have been erased.");
			return false;
		}else{
			alert("Image records saved")
		}
	}
});
