$(document).ready(function(){
	$.ajax({
		"url": "_view/all",
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, picture){
				var number	= picture.value.number;
				var subject	= picture.value.subject;
				var date	= picture.value.date;
				$('#records').append(
					$('<li>').append(
						$('<a>').attr("href","#")
							.text(subject)
					)
				);
			});
			$('#records').listview('refresh');
		}
	});
});