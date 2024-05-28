$(document).ready(function(){
    $("#record_crt").click(function(){
        $.ajax({
            type: "POST",
			url: "http://localhost/record_crt.php",
			datatype: "json",
			data:{
				
			},
			contentType: "application/x-www-form-urlencoded;charset=UTF-8",
			success: function(data) {
                
            },
            error: function(jqXHR) {
               
            }
        })
    })
});