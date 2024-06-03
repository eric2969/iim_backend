$(document).ready(function(){
    let objDate = new Date();
    $("#f_date").val(objDate.toISOString().split('T')[0]);
    $("#f_date").attr('min',objDate.toISOString().split('T')[0]);
    $("#book_crt").click(function(){
        var f_date = $("#f_date").val();
        var f_time = $("#f_time").val();
        var f_name = $("#f_name").val();
        var f_phone = $("#f_phone").val();
        var f_people = $("#f_people").val();
        var f_other = $("#f_other").val();
        if(f_name == "" || f_phone == ""){
            alert("請輸入個人資料!");
            return 0;
        }
        else if(f_date == "" || f_time == ""){
            alert("請輸入訂位資訊!");
            return 0;
        }
        $.ajax({
            url: 'http://49.158.179.101/backend/check_holiday.php',
            type: 'POST',
            dataType: 'json',
            data: {
                date: f_date,
            },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            success: function(response) {
                console.log(response);
                if (response.message == "yes" ) {
                    alert("當日為公休日!");
                    return 0;
                }
                else if(response.message != "no"){
                    alert('查詢失敗!');
                    return 0;
                }
                else{
                    $.ajax({
                        type: "POST",
                        url: "http://49.158.179.101/backend/book_crt.php",
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
                            $("#f_main").css('display','none');
                            if(data == "successful"){
                                $("#success").css('display','block');
                            }
                            else if(data == "error"){
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
                    });
                }
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    })
});