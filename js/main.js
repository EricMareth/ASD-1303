// Eric Mareth
// ASD 1303
// Character Note CRUD Application

$(document).on('pageinit',function(){
	
	var imageForm = $('#newImage');
		errorDialog = $('#errorDialog');
	imageForm.validate({
		invalidHandler: function(form, validator){
			errorDialog.click();
			var html = "";
			for (var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
			};
			$("#formErrors p").html(html);
			html="";
		},
		submitHandler: function(){
		
		}
	
	});
});
