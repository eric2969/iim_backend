$(document).ready(function(){
    $("#book_crt").click(function(){
        var f_date = $("#f_date").val();
        var f_time = $("#f_time").val();
        var f_name = $("#f_name").val();
        var f_phone = $("#f_phone").val();
        var f_people = $("#f_people").val();
        var f_other = $("#f_other").val();
        $.ajax({
            type: "POST",
			url: "http://localhost/book_crt.php",
			datatype: "json",
			data:{
				date: f_date,
                time: f_time,
                name: f_name,
                phone: f_phone,
                people: f_people,
                other: f_other,
			},
			contentType: "application/x-www-form-urlencoded;charset=UTF-8",
			success: function(data) {
                console.log(data);
                $("f_main").css('display','none');
                if(data == "successful"){
                    console.log("ok");
                    $("#success").css('display','block');
                }
                else if(data == "error"){
                    console.log("error");
                    $("#fail").css('display','block');
                }
                else{
                    console.log(data);
                }
            },
            error: function(jqXHR) {
                $("f_main").css('display','none');
                $("#fail").css('display','block');
                alert("error" + jqXHR.status + "\n");
            }
        })
    })
});