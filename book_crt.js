$(document).ready(function(){
    $("#book_crt").click(function(){
        $.ajax({
            type: "POST",
			url: "http://localhost/book_crt.php",
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