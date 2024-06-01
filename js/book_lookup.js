$(document).ready(function(){
    $("#book_lookup").click(function(){
        $.ajax({
            type: "POST",
			url: "http://localhost/book_lookup.php",
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